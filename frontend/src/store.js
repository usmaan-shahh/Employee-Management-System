import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import { todoApi } from "./api/todoApi";

export const store = configureStore({
  reducer: {
    form: formReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
