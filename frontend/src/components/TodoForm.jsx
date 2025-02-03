import React, { useState } from "react";
import { addTodo } from "../slice/todoSlice";
import { useDispatch } from "react-redux";
const TodoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    describeYourself: "",
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(formData));
    setFormData({
      name: "",
      email: "",
      age: "",
      describeYourself: "",
    });
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

        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default TodoForm;
