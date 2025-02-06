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

    editFieldValue: (state, action) => ({ ...action.payload }),

    resetForm: () => initialState,
  },
});

export const { updateField, resetForm, setFormData } = formSlice.actions;
export default formSlice.reducer;
