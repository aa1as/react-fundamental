import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
  });

  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const buttonSubmitHander = (event) => {
    event.preventDefault();

    getPaymentFormData(objectState);
    // console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHander}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputTodayHandler}
              value={objectState.today}
            />
          </div>
          {/* 스노우2 팀장님과제 */}
          {/* <div className="new-payment__control">
            <label>이메일</label>
            <input
              type="email"
              onChange={inputTodayHandler}
              value={objectState.email}
            />
          </div>
          <div className="new-payment__control">
            <label>파일선택</label>
            <input
              type="file"
              onChange={inputTodayHandler}
              value={objectState.file}
            />
          </div>
          <div className="new-payment__control">
            <label>체크</label>
            <input
              type="checkbox"
              onChange={inputTodayHandler}
              value={objectState.checkbox}
            />
          </div> */}
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
