import classes from "./Counter.module.css";
import { counterActions } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const isHidden = useSelector((state) => state.counter.isHidden);
  const { increment, decrement, toggle, increase } = counterActions;

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrease = () => {
    dispatch(increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value} hidden={isHidden}>
        {counter}
      </div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrease}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
