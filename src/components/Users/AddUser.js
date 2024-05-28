import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "유효하지 않은 입력값",
        message: "유효한 나이와 이름을 입력해주세요 (빈 값이 아닌).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "유효하지 않은 나이",
        message: "유효한 나이를 입력해주세요 (> 0).",
      });
      return;
    }
    //제출후에 빈창으로 나타내주기
    props.onAddUser(enteredUsername, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">사용자 이름</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">나이</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">사용자 추가</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
