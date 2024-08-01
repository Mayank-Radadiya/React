import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    add: (state, action) => {
      state.counter += action.payload.num;
    },
    remove: (state, action) => {
      state.counter -= action.payload.num;
    },
  },
});

export const Counteraction = CounterSlice.actions;

export default CounterSlice;
