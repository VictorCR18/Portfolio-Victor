import express from "express";
import cors from "cors";
import { contactRoutes } from "./routes/contact.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.status(200).json({ message: "API rodando perfeitamente na Vercel!" });
});

// Registrando a rota de contato
app.use("/api", contactRoutes);

export default app;
