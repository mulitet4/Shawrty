import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import urlRoutes from "./routes/url.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

const port = 8000;

const frontendURL =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_URL
    : ["http://localhost:3001", "http://localhost:3000"];

app.use(
  cors({
    origin: frontendURL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/urls", urlRoutes);
app.use("/api/users", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
