import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function InputValue() {
  const inputValue = useRef();
  const dispatch = useDispatch();

  const handleSubmitADD = () => {
    dispatch({
      type: "USER_VALUE_ADD",
      payload: {
        num: Number(inputValue.current.value),
      },
    });
    inputValue.current.value = "";
  };

  const handleSubmitRemove = () => {
    // console.log(inputValue.current.value);
    dispatch({
      type: "USER_VALUE_REMOVE",
      payload: {
        num: Number(inputValue.current.value),
      },
    });

    inputValue.current.value = "";
  };

  const handlePrivacyBtn = () => {
    dispatch({
      type: "PRIVACY",
    });
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

      <button
       onClick={handlePrivacyBtn}
       style={{ backgroundColor: "gray" }}>
        Privacy Button{" "}
      </button>
    </>
  );
}

export default InputValue;
