import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  //빈 스트링으로 작성하였을 때 에러메세지
  const nameInputChangeHandeler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameIsTouched(true);
    if (event.target.value.trim() === "") {
      setEnteredNameIsValid(false);
    } else {
      setEnteredNameIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);

    setEnteredNameIsTouched(true);

    //enteredname이 빈값인 경우로 제출하였을 때 에러메세지
    if (enteredName.trim() === "") {
      console.log("실패");
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredName("");
  };

  //초점을 두고 빈 값으로 초점을 해제하였을때 에러메세지
  const nameInputBlurHandler = (event) => {
    console.log("이벤트 블러");
    setEnteredNameIsTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };
  //에러 메세지를 보여주는 경우가 true면 메세지 노출
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">당신의 이름은?</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandeler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">이름 비면 안돼</p>}
      </div>
      <div className="form-actions">
        <button>제출하기</button>
      </div>
    </form>
  );
};

export default SimpleInput;
