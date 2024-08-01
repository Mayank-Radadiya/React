import { createStore } from "redux";

const INITIAl_VALUE = {
  counter: 0,
  Privacy : false
};

const Reducer = (counterStore = INITIAl_VALUE, action) => {
  let NewStore = counterStore;

  if (action.type === "INCREMENT") {
    NewStore = { ...counterStore, counter: counterStore.counter + 1 };
  } else if (action.type === "DECREMENT") {
    NewStore = { ...counterStore, counter: counterStore.counter - 1 };
  } else if (action.type === "USER_VALUE_ADD") {
    NewStore = {
      ...counterStore,
      counter: counterStore.counter + action.payload.num,
    };
  } else if (action.type === "USER_VALUE_REMOVE") {
    NewStore = {
      ...counterStore,
      counter: counterStore.counter - action.payload.num,
    };
  } else if (action.type === "PRIVACY") {
    NewStore = { ...counterStore,Privacy: !counterStore.Privacy };
  }
  return NewStore;
};

const counterStore = createStore(Reducer);

export default counterStore;
 