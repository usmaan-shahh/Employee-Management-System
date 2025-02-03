import React from "react";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} from "../api/todoApi";

const App = () => {
  const { data: todos } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const handleSubmit = () => {};
  const handleChange = () => {};
};

return <div></div>;

export default App;
