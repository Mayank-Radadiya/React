import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const Switch = () => {
    !toggle ? setToggle(true) : setToggle(false);
  };

  const light = () => {
    document.body.style.backgroundColor = "white";
  };
  const dark = () => {
    document.body.style.backgroundColor = "#242424";
  };

  return (
    <div>
      <h1 className="text-3xl mb-7 text-pink-400">Toggle Switch</h1>
      <label className="inline-flex items-center mb-5 cursor-pointer">
        <input
          onChange={Switch}
          type="checkbox"
          value=""
          class="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {" "}
          {toggle ? light() : dark()}{" "}
        </span>
      </label>
    </div>
  );
}

export default Toggle;
