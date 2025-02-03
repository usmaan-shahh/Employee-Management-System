import React from "react";
import { useGetTodosQuery } from "../api/todoApi";

const TodoList = () => {
  const { data: todos, isLoading, error } = useGetTodosQuery();

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Error fetching todos</p>;

  return (
    <div>
      {todos.map((todo) => (
        <ul key={todo._id}>
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

export default TodoList;
