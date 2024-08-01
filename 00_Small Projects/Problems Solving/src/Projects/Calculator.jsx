import React, { useState } from "react";

function Calculator() {
  const Button = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "*",
    "/",
    "=",
    "C",
  ];

  const [input, setInput] = useState("");

  const cal = (btn) => {
    if (btn === "C") {
        setInput("");
    }else if(btn === "="){
        const result = eval(input)
        setInput(result)
    }else {
        const newValue = input + btn
        setInput(newValue)
    }
  }

  return (
    <div className=" border-pink  ">
      <input
        type="text"
        id="first_name"
        class="bg-gray-100 m-4 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[290px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
        placeholder=""
        required
        value={input}
      />

      <ul className="grid gap-2 grid-cols-4 grid-rows-3 ">
        {Button.map((value) => {
          return (
            <li>
              <button onClick={() => cal(value) }> {value} </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Calculator;
