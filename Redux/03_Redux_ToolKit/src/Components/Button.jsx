import React from "react";
import { useDispatch } from "react-redux";
import { Counteraction } from "../Store/Counter";

function Button() {
    const dispatch = useDispatch();
    

    const handleIncrement = () => {
      dispatch(Counteraction.increment());
    }
    const handleDecrement = () => {
        dispatch(Counteraction.decrement());
    }

  return (
    <div>
      <button onClick={ handleIncrement }>Increment</button>
      <button onClick={ handleDecrement}>Decrement</button>
    </div>
  );
}

export default Button; 
