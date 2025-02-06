import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  age: "",
  describeYourself: "",
};

const formSlice = createSlice({
  name: "form", //Slice Name
  initialState, //Initial state of the form
  reducers: {
    setFieldValue: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    editFieldValue: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    resetForm: () => initialState,
  },
});

export const { setFieldValue, resetForm, editFieldValue } = formSlice.actions;
export default formSlice.reducer;
