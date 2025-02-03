import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  age: { type: String },
  describeYourself: { type: String },
});
const Task = mongoose.model("Task", taskSchema);
export default Task;
