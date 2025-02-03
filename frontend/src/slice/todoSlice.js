import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
        describeYourself: action.payload.describeYourself,
      };
      state.push(todo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
