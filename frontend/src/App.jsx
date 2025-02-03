import React from "react";
import TodoForm from "./components/TodoForm";
import { useGetTodosQuery } from "./api/todoApi";
const App = () => {
  const { data: todos } = useGetTodosQuery();
  console.log(todos);
  return (
    <div>
      <TodoForm />
      {todos.map((todo) => todo.name)}
    </div>
  );
};

export default App;
