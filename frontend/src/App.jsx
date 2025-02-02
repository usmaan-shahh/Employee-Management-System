import React, { useEffect, useState } from "react";
import FormPage from "./components/FormPage";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchAllTasks = async () => {
    try {
      const response = await fetch("http://localhost:8000/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const allTasks = await response.json();
      setTasks(allTasks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <FormPage fetchAllTasks={fetchAllTasks} />
      {tasks.map((task, index) => (
        <div key={index}>
          <h2>Title: {task.title}</h2>
          <p>Description: {task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Completed: {task.completed ? "Yes" : "No"}</p>
          <p>Priority: {task.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
