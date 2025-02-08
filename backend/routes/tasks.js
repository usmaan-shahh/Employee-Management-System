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
  const { name, age, email, salary } = req.body;
  const newTask = new Task({
    name,
    age,
    email,
    salary,
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
  const { name, age, email, salary } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { name, age, email, salary },
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
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "task deletion failed", error: error.message });
  }
});

export default router;
