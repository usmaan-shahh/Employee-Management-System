import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice";
import { todoApi } from "./api/todoApi";

export const store = configureStore({
  reducer: {
    form: formSlice,

    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
