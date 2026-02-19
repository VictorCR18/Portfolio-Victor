import { Request, Response } from "express";
import { ContactService } from "../services/ContactService.js";

const contactService = new ContactService();

export class ContactController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, title, message } = req.body;

      // Validação básica
      if (!name || !email || !message) {
        return res
          .status(400)
          .json({ error: "Nome, email e mensagem são obrigatórios." });
      }

      // Chama o serviço para enviar o email
      await contactService.sendEmail(
        name,
        email,
        title || "Sem assunto",
        message,
      );

      return res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      return res.status(500).json({ error: "Erro interno ao enviar o email." });
    }
  }
}
