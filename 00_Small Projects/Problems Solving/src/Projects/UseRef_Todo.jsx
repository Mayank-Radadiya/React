import React, { useRef, useState } from "react";

function UseRef_Todo() {
  // State to hold the list of to-do items
  const [todo, setTodo] = useState([]);

  // useRef to reference the input element, allowing us to access its value without causing re-renders
  const input = useRef();

  // Function to handle form submission
  const submit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    if (input.current.value) {
      // Check if there is a value in the input
      setTodo([...todo, input.current.value]); // Add the input value to the todo list
      console.log(input.current.value); // Log the input value to the console
      input.current.value = ""; // Clear the input field
    }
  };

  // Function to handle deleting a to-do item
  const deleteItem = (index) => {
    // Filter out the to-do item at the specified index
    const NewTodoItem = todo.filter((value, i) => i !== index);
    setTodo(NewTodoItem); // Update the state with the new list
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          className="w-[300px] h-[35px] p-2 text-orange-400"
          ref={input} // Attach the ref to the input element
        />
        <button>Add</button> {/* Button to submit the form */}
      </form>

      <ul>
        {todo.map((value, index) => {
          return (
            <li key={index}>
              {value} <button onClick={() => deleteItem(index)}>Remove</button>{" "}
              {/* Button to remove the to-do item */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseRef_Todo;
