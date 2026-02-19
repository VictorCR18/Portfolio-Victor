import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export class ContactService {
  private transporter;

  constructor() {
    // Configura o "carteiro" usando o Gmail
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendEmail(name: string, email: string, title: string, message: string) {
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Quem envia (seu próprio email autenticado)
      to: process.env.EMAIL_USER, // Para quem vai (para você mesmo)
      replyTo: email, // Se você clicar em "Responder", vai pro email do cliente
      subject: `[Portfolio] Mensagem de: ${name} - ${title}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <h3>Nova mensagem do Portfólio</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${title}</p>
        <br/>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Tenta enviar o email
    await this.transporter.sendMail(mailOptions);
  }
}
