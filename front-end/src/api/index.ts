import axios from "axios";
import { ContactData } from "../types";

const api = axios.create({
  baseURL: "https://portfolio-victor-backend.vercel.app/api",
});

export async function sendContactEmail(data: ContactData) {
  try {
    const response = await api.post("/contact", data);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        error.response.data.error || "Erro desconhecido ao enviar email.",
      );
    }

    throw new Error("Erro de conexão com o servidor.");
  }
}
