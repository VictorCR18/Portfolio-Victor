import express from "express";
import cors from "cors";
import { contactRoutes } from "./routes/contact.routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://portifolio-victor-plum.vercel.app",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API rodando perfeitamente na Vercel!" });
});

app.use("/api", contactRoutes);

export default app;
