import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "slice",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    // deleteTodo: (state, action) => {
    //   return state.filter((todo) => todo.id !== action.payload);
    // },
    // updateTodo: (state, action) => {},
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
