import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/tasks",
      providesTags: ["Todos"],
    }),
    addTodos: builder.mutation({
      query: (formData) => ({
        url: "/tasks",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Todos"],
    }),
    removeTodos: builder.mutation({
      query: (id) => ({ url: `/tasks/${id}`, method: "DELETE" }),
      invalidatesTags: ["Todos"],
    }),
    editTodos: builder.mutation({
      query: ({ id, UpdatedFormData }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body: UpdatedFormData,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useRemoveTodosMutation,
  useEditTodosMutation,
} = todoApi;
