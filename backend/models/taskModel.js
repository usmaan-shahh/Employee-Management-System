import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  salary: { type: String, required: true },
});
const Task = mongoose.model("Task", taskSchema);
export default Task;
