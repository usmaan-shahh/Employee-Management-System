import React from "react";
import { useGetTodosQuery } from "../api/todoApi";

const TodoList = () => {
  const { data: todos, isLoading, error, refetch } = useGetTodosQuery();

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Error fetching todos</p>;

  return (
    <div className="max-w-4xl mx-auto  border border-gray-300 mt-10">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 border border-gray-300 text-center">Name</th>
              <th className="p-3 border border-gray-300 text-center">Email</th>
              <th className="p-3 border border-gray-300 text-center">Age</th>
              <th className="p-3 border border-gray-300 text-center">
                Describe Yourself
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {todos.map((todo) => (
              <tr key={todo._id} className="hover:bg-gray-100 transition">
                <td className="p-3 border border-gray-300 text-center">
                  {todo.name}
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  {todo.email}
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  {todo.age}
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  {todo.describeYourself}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
