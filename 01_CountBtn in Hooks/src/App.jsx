import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function Add() {
    count == 20 ? setCount(20) : setCount(count + 1);
  }
  function remove() {
    count == 0 ? setCount(0) : setCount(count - 1);
  }
  return (
    <>
      <h1>UseState</h1>
      <h2>Count {count} </h2>

      <button onClick={Add}>Increase {count} </button>
      <button onClick={remove}>Decrease {count}</button>
    </>
  );
}

export default App;
