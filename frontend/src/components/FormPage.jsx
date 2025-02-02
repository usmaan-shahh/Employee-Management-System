import React from "react";
import { useState } from "react";
const FormPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: "false",
    priority: "low",
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:8000/tasks", {
      method: POST,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        dueDate,
        completed,
        priority,
      }),
      const tasks = await response.json()
      
    });
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <br />
      <br />

      <label>Enter Description:</label>
      <textarea
        name="description"
        onChange={handleChange}
        value={formData.description}
      />

      <br />
      <br />

      <label>Enter Due Date:</label>
      <input
        type="date"
        onChange={handleChange}
        name="dueDate"
        value={formData.dueDate}
      />

      <br />
      <br />

      <label>Completed:</label>
      <select
        onChange={handleChange}
        value={formData.completed}
        name="completed"
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>

      <br />
      <br />

      <label>priority:</label>
      <select onChange={handleChange} value={formData.priority} name="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <br />
      <br />

      <button type="submit">submit</button>
    </form>
  );
};

export default FormPage;
