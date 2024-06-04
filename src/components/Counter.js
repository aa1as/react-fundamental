import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispathch({ type: "toggle" });
  };
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispathch = useDispatch();

  const incrementHandler = () => {
    dispathch({ type: "increment" });
  };

  const increase10Handler = () => {
    dispathch({ type: "increase", amount: 10 });
  };

  const decrementHandler = () => {
    dispathch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={incrementHandler}>증가</button>
      <button onClick={increase10Handler}>10 증가</button>
      <button onClick={decrementHandler}>감소</button>
    </main>
  );
};

export default Counter;
