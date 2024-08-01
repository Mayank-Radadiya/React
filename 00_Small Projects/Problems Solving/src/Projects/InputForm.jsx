import React from "react";

function InputForm() {
  const [input, setInput] = React.useState("");

  const info = (e) => {
    return setInput(e.target.value);
  };

  return (
    <div>
      <input
        onChange={(e) => {
          info(e);
        }}
        // onChange={ (e) => setInput(e.target.value) }

        type="text"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Value"
        required
      />

      <h2 className="text-2xl mt-5">
        Your Input: <br />
        {input}
      </h2>
    </div>
  );
}

export default InputForm;
