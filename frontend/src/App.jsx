import React from "react";
import TodoForm from "./components/TodoForm";
import { useGetTodosQuery } from "./api/todoApi";
const App = () => {
  const { data: todos, isLoading, error } = useGetTodosQuery();
  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Error fetching todos</p>;
  console.log(todos);
  return (
    <div>
      <TodoForm />
      {todos.map((todo) => (
        <ul>
          <hr />
          <li>
            <b>Name: </b>
            {todo.name}
          </li>
          <li>
            <b>Email: </b>
            {todo.email}
          </li>
          <li>
            <b>Age: </b>
            {todo.age}
          </li>
          <li>
            <b>Describe Yourself: </b>
            {todo.describeYourself}
          </li>
          <hr />
        </ul>
      ))}
    </div>
  );
};

export default App;
