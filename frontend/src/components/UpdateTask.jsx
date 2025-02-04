import React, { useState } from "react";
import { useUpdateTaskMutation } from "../api/todoApi";

const UpdateTask = ({ todo, closeForm }) => {
  const [formData, setFormData] = useState({
    name: todo.name,
    email: todo.email,
    age: todo.age,
    describeYourself: todo.describeYourself,
  });

  const [updateTask, { isLoading, isError, isSuccess }] =
    useUpdateTaskMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask({ id: todo._id, data: formData }).unwrap();
      closeForm();
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  return (
    <div className="p-4 border-t border-gray-300 bg-gray-100">
      <h3 className="text-lg font-semibold mb-2">Update Task</h3>
      <form onSubmit={handleSubmit} className="grid gap-2">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <label>Describe Yourself:</label>
        <input
          name="describeYourself"
          value={formData.describeYourself}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            {isLoading ? "Updating..." : "Save"}
          </button>
          <button
            type="button"
            onClick={closeForm}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
        {isSuccess && (
          <p className="text-green-500">Task updated successfully!</p>
        )}
        {isError && <p className="text-red-500">Error updating task</p>}
      </form>
    </div>
  );
};

export default UpdateTask;
