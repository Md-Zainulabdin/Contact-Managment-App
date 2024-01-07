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

// routes

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);

export { app };
