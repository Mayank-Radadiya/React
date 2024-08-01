import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const Add = () => {
    count === 20 ? setCount(20) : setCount(count + 1);
  };

  const Remove = () => {
    count === 0 ? setCount(0) : setCount(count - 1);
  };

  return (
    <>
      <h1>Counter: {count} </h1>

      <button onClick={Add}>Increase: {count} </button>

      <button onClick={Remove}>Decrease: {count} </button>
    </>
  );
}

export default Counter;
