import express from "express";
import Task from "../models/taskModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  const newTask = new Task({
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
  });
  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (error) {
    res.status(404).json({ message: "task creation failed" });
  }
});

export default router;
