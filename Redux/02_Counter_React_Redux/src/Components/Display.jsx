import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const CounterValue = useSelector((store) => store.counter);
  const PrivacyValue = useSelector((store) => store.Privacy);
  return (
    <div>
      <h2>Value: {PrivacyValue ? "XXX" :  CounterValue } </h2>
    </div>
  );
}

export default Display;
