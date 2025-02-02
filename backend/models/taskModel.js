import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Data },
  priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
});
const Task = mongoose.model("Task", taskSchema);
export default Task;
