import express from "express";
import cors from "cors";

const app = express();

// middlewares

app.use(
  cors({
    origin: "",
    credentials: true,
  })
);
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); 

// routes

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);

export { app };
