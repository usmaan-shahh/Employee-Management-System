import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  age: "",
  describeYourself: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    setFormData: (state, action) => ({ ...action.payload }),

    resetForm: () => initialState,
  },
});

export const { updateField, resetForm, setFormData } = formSlice.actions;
export default formSlice.reducer;
