import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then((mongooseInstance) => {
    console.log("Connected to the database");

    const connection = mongooseInstance.connection;
    console.log("Database name:", connection.name);
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
