import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  jobTitle: {
    type: String,
    required: true,
    enum: [
      "Software Engineer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "DevOps Engineer",
      "Data Scientist",
      "UI/UX Designer",
      "QA Tester",
      "IT Support Specialist",
    ],
  },
  salary: { type: Number, required: true },
});
const Task = mongoose.model("Task", taskSchema);
export default Task;
