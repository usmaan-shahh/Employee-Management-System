import express from "express";
import Task from "../models/taskModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: "task reading failed" });
  }
});

router.post("/", async (req, res) => {
  const { title, description, completed, dueDate, priority } = req.body;
  const newTask = new Task({
    title,
    description,
    dueDate,
    priority,
    completed,
  });
  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (error) {
    res.status(404).json({ message: "task creation failed" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority, completed } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        title,
        description,
        dueDate,
        priority,
        completed,
      },
      { new: true }
    );
    if (!updatedTask) {
      res.status(404).json({ message: "task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(404).json({ message: "task updation failed" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      res.status(404).json({ message: "task not found" });
    }
    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "task deletion failed" });
  }
});

export default router;
