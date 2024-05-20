import "./App.css";
import Toast from "./components/Toast";
import { useState } from "react";

function App() {
  const messageArray = [
    {
      title: "success",
      text: "Right On! Your account has been updated.",
    },
    {
      title: "warning",
      text: "Hmmm. Something doesn't look right.",
    },
    {
      title: "error",
      text: "Un oh! Something went terribly wrong!",
    },
  ];

  const [title, setTitle] = useState("hello");
  return (
    <div className="wrapper">
      <p>{title}</p>
      <button onClick={() => setTitle("changed")}>클릭하기</button>
      {messageArray.map((message) => (
        <Toast message={message} />
      ))}
    </div>
  );
}

export default App;
