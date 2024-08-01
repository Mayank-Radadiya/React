import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {Counteraction} from "../Store/Counter";
import { PrivacyAction } from "../Store/Privacy";

function InputValue() {
  const inputValue = useRef();
  const dispatch = useDispatch();

  const handleSubmitADD = () => {
    dispatch(
      Counteraction.add({
        num: Number(inputValue.current.value),
      })
    );
    inputValue.current.value = "";
  };

  const handleSubmitRemove = () => {
    dispatch(
      Counteraction.remove({
        num: Number(inputValue.current.value),
      })
    );

    inputValue.current.value = "";
  };

  const handlePrivacyBtn = () => {
   dispatch(PrivacyAction.togglePrivacy());
  };

  return (
    <>
      <div>
        <input
          ref={inputValue}
          type="text"
          placeholder="Enter number"
          style={{ width: "100px", height: "29px", margin: "10px" }}
        />

        <button onClick={handleSubmitADD}> ADD </button>
        <button onClick={handleSubmitRemove}> Subtract </button>
      </div>

      <button onClick={handlePrivacyBtn} style={{ backgroundColor: "gray" }}>
        Privacy Button{" "}
      </button>
    </>
  );
}

export default InputValue;
