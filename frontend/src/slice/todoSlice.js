import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    toggleEditTodo: (state, action) => {
      const todoId = action.payload;
      const todo = state.find((todo) => todo._id === todoId);
      if (todo) {
        todo.isEditing = !todo.isEditing; // Toggle the isEditing state
      }
    },
  },
});

export const { setTodos, toggleEditTodo } = todoSlice.actions;
export default todoSlice.reducer;
