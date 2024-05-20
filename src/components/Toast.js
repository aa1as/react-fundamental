import React from "react";
import "./Toast.css";
import ToastMessage from "./ToastMessage";

const Toast = ({ message }) => {
  const buttonClickHandler = (title) => {
    console.log(title);
  };
  return (
    <div className={`toast toast-${message.title}`}>
      <ToastMessage message={message} />
      <button
        className="toast__button"
        onClick={() => buttonClickHandler(message.title)}
      >
        Dismiss
      </button>
    </div>
  );
};

export default Toast;
