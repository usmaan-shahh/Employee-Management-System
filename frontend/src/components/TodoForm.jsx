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
      setFormData({ name: "", email: "", age: "", describeYourself: "" }); // Reset form
    } catch (err) {
      console.error("Failed to submit:", err);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Enter E-mail:</label>

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Age:</label>
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={formData.age}
        />
        <br />
        <br />

        <label>Describe Yourself</label>
        <textarea
          name="describeYourself"
          onChange={handleChange}
          value={formData.describeYourself}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
