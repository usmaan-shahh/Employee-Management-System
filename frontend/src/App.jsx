import React from "react";
import TodoForm from "./components/TodoForm";
import { useGetTodosQuery } from "./api/todoApi";
const App = () => {
  const { data: todos } = useGetTodosQuery();
  console.log(todos);
  return (
    <div>
      <TodoForm />
    </div>
  );
};

export default App;
