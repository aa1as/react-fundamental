import React, { useState } from "react";

import "./PaymentForm.css";

//각각 하나씩 state로 다루기
// const PaymentForm = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [today, setToday] = useState(null);

//   const inputTypeTextChangeHandler = (event) => {
//     setName(event.target.value);
//   };
//   const inputTypeNuberChangeHandler = (event) => {
//     setPrice(event.target.value);
//   };
//   const inputTypDateTextChangeHandler = (event) => {
//     setToday(event.target.value);
//   };
//   const buttonSubmitHandler = (event) => {
//     console.log(name);
//     console.log(price);
//     console.log(today);
//   };

//여러 state를 하나의 객체에 다루기
const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
  });

  const inputTypeTextChangeHandler = (event) => {
    setObjectState((prevSate) => ({ ...prevSate, name: event.target.value }));
  };
  const inputTypeNuberChangeHandler = (event) => {
    setObjectState((prevSate) => ({ ...prevSate, price: event.target.value }));
  };
  const inputTypTodayTextChangeHandler = (event) => {
    setObjectState((prevSate) => ({ ...prevSate, today: event.target.value }));
  };

  const buttonSubmitHandler = (event) => {
    event.preventDefault();
    console.log(objectState);
    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };

  return (
    <form on onSubmit={buttonSubmitHandler}>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>이름</label>
          <input
            type="text"
            value={objectState.name}
            onChange={inputTypeTextChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={objectState.price}
            onChange={inputTypeNuberChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={objectState.today}
            onChange={inputTypTodayTextChangeHandler}
          />
        </div>
      </div>
      <div className="new-payment__actions">
        <button type="submit">결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;
