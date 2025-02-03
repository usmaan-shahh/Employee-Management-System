import React from "react";
import TodoForm from "./components/TodoForm";
import { useGetTodosQuery } from "./api/todoApi";
const App = () => {
  const { data: todos, error, isLoading } = useGetTodosQuery();
  consdole.log(todos);
  return (
    <div>
      <TodoForm />
    </div>
  );
};

export default App;
