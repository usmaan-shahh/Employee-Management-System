import express from "express";
import Task from "../models/taskModel.js";
const router = express.Router();

router.post("/", (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  const newTask = new Task({
    title,
    description,
    dueDate,
    priority,
  });
});

export default router;
