import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./api/todoApi";
import todoReducer from "./slice/todoSlice";

export const store = configureStore({
  reducer: {
    slice: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
