import React, { useState } from "react";
import { useGetTodosQuery, useRemoveTodosMutation } from "../api/todoApi";
import UpdateTask from "./UpdateTask";

const TodoList = () => {
  const { data: todos, isLoading, error } = useGetTodosQuery();

  const [removeTodos] = useRemoveTodosMutation();

  const [taskToEdit, setTaskToEdit] = useState(null); // editingTask holds the id to be Updated

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Error fetching todos</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <tr>
              <th className="p-4 text-center font-semibold">Name</th>
              <th className="p-4 text-center font-semibold">Email</th>
              <th className="p-4 text-center font-semibold">Age</th>
              <th className="p-4 text-center font-semibold">
                Describe Yourself
              </th>
              <th className="p-4 text-center font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-gray-50">
            {todos.map((todo) => (
              <React.Fragment key={todo._id}>
                <tr className="hover:bg-gray-100 transition">
                  <td className="p-4 text-center">{todo.name}</td>
                  <td className="p-4 text-center">{todo.email}</td>
                  <td className="p-4 text-center">{todo.age}</td>
                  <td className="p-4 text-center">{todo.describeYourself}</td>
                  <td className="p-4 text-center">
                    <div className="flex gap-3 justify-center">
                      <button
                        className="bg-red-500 text-white font-medium py-2 px-5 rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                        onClick={() => removeTodos(todo._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-blue-500 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
                        onClick={() => setTaskToEdit(todo._id)}
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>

                {taskToEdit === todo._id && (
                  <tr>
                    <td colSpan="5">
                      <UpdateTask
                        todo={todo}
                        closeForm={() => setTaskToEdit(null)}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
