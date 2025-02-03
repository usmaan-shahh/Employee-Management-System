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
    fetchData();
  };

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <br />

        <label>Enter E-mail:</label>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <br />

        <label>Age:</label>
        <input type="text" name="age" onChange={handleChange} />
        <br />
        <br />

        <label>Describe Yourself</label>
        <textarea name="describeYourself" onChange={handleChange} />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
