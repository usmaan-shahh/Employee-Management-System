import React from "react";
import { useGetTodosQuery } from "../api/todoApi";

const TodoList = () => {
  const { data: todos, isLoading, error, refetch } = useGetTodosQuery();

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Error fetching todos</p>;

  return (
    <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="p-3 border border-gray-300 text-left">Name</th>
          <th className="p-3 border border-gray-300 text-left">Email</th>
          <th className="p-3 border border-gray-300 text-left">Age</th>
          <th className="p-3 border border-gray-300 text-left">
            Describe Yourself In One Word
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {todos.map((todo) => (
          <tr key={todo._id} className="hover:bg-gray-100 transition">
            <td className="p-3 border border-gray-300">{todo.name}</td>
            <td className="p-3 border border-gray-300">{todo.email}</td>
            <td className="p-3 border border-gray-300">{todo.age}</td>
            <td className="p-3 border border-gray-300">
              {todo.describeYourself}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
