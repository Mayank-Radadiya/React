import { createSlice } from "@reduxjs/toolkit";


const PrivacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    togglePrivacy: (state) => {
      console.log(state);
      return (state = !state);
    },
  },
}); 

export const PrivacyAction = PrivacySlice.actions;

export default PrivacySlice;