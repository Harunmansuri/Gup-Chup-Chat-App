import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./router/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import messageRoute from "./router/message.route.js";
import { app, server } from "./SocketIO/server.js"; // Import the app from SocketIO/server.js


dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
///enable cors for all routes
app.use(cors({ origin: "https://your-frontend-domain.vercel.app", credentials: true }));
app.use(cookieParser()); // enable cookie parser for all routes
const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
