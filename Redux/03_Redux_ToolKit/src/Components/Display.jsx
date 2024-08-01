import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const counterValue = useSelector((state) => state.counter.counter);
  const privacyEnabled = useSelector((state) => state.privacy);

  return (
    <div>
      <h2>Value: {privacyEnabled ? "XXX" : counterValue} </h2>
    </div>
  );
}

export default Display;
