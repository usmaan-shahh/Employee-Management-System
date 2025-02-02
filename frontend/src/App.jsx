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
          <h4>
            Title: <u>{task.title}</u>
          </h4>
          <h4>
            Description: <u>{task.description}</u>
          </h4>
          <h4>
            Due Date: <u>{task.dueDate}</u>
          </h4>
          <h4>
            Completed: <u>{task.completed ? "Yes" : "No"}</u>
          </h4>
          <h4>
            Priority:<u>{task.priority}</u>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default App;
