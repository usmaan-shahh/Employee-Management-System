import express from "express";
import connectDB from "./configuration/mongoDb.js";
import dotenv from "dotenv";
import router from "./routes/tasks.js";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/tasks", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Backend running on ${port} `);
});
