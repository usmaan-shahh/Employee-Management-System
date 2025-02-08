import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  jobTitle: "",
  salary: "",
};

const formSlice = createSlice({
  name: "form", //Slice Name
  initialState, //Initial state of the form
  reducers: {
    setFieldValue: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    populateFieldValues: (state, action) => ({ ...action.payload }),

    resetForm: () => initialState,
  },
});

export const { setFieldValue, resetForm, populateFieldValues } =
  formSlice.actions;
export default formSlice.reducer;
