import React, { useState } from "react";
import { useAddTodosMutation } from "../api/todoApi";

const TodoForm = () => {
  const [addTodos] = useAddTodosMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    describeYourself: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await addTodos(formData);
      console.log("Success:", response);
      setFormData({ name: "", email: "", age: "", describeYourself: "" });
    } catch (err) {
      console.error("Failed to submit:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Todo App
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center gap-4"
      >
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">E-mail:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">
            Describe Yourself:
          </label>
          <input
            name="describeYourself"
            value={formData.describeYourself}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
