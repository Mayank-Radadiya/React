// Import the Redux library
const redux = require("redux");

// Define the initial state of the store
const INITIAL_VALUE = {
  counter: 0,
};

// Define the reducer function which takes the current state and an action as arguments
const reducer = (store = INITIAL_VALUE, action) => {
  // Initialize a variable to hold the new state (store)
  let newStore = store;

  // Check the action type and update the state accordingly
  if (action.type === "INCREMENT") {
    // If the action type is "INCREMENT", increase the counter by 1
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    // If the action type is "DECREMENT", decrease the counter by 1
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    // If the action type is "ADDITION", add the payload's number to the counter
    newStore = { counter: store.counter + action.payload.Number };
  }

  // Return the new state
  return newStore;
};

// Create the Redux store using the reducer
const store = redux.createStore(reducer);

// Define a function to handle store updates (subscribers)
// useSeletor
const subscribe = () => {
  // Get the current state of the store
  const state = store.getState();
  // Log the current state to the console
  console.log(state);
};

// Subscribe the function to the store so it gets called on every state change
store.subscribe(subscribe);

// Dispatch actions to modify the state
store.dispatch({ type: "INCREMENT" }); // Increment the counter by 1
store.dispatch({ type: "DECREMENT" }); // Decrement the counter by 1
store.dispatch({ type: "ADDITION", payload: { Number: 10 } }); // Add 10 to the counter
