import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/tasks",
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
