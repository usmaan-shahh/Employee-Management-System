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
    await addTodos(formData);
    addTodos("");
  };

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input type="text" name="name" onChange={handleChange} />

        <label>Enter E-mail</label>
        <input type="text" name="email" onChange={handleChange} />

        <label>Age</label>
        <input type="text" name="age" onChange={handleChange} />

        <label>Describe Yourself</label>
        <textarea name="describeYourself" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
