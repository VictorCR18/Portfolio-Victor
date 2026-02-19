import { Router } from "express";
import { ContactController } from "../controllers/ContactController.js";

const contactRoutes = Router();
const contactController = new ContactController();

// Quando bater um POST em /contact, o controller assume
contactRoutes.post("/contact", (req, res) =>
  contactController.handle(req, res),
);

export { contactRoutes };
