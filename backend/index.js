import express from "express";
import connectDB from "./configuration/mongoDb.js";
import dotenv from "dotenv";
import cors from "cors";
const corsOption = {
  origin: "https://todo-1-w7yl.onrender.com",
  credentials: true,
};
import path from "path";
dotenv.config();
import router from "./routes/tasks.js";
connectDB();
const _dirname = path.resolve();
const app = express();
app.use(cors(corsOption));
app.use(express.json());
app.use("/tasks", router);
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Backend running on ${port} `);
});
