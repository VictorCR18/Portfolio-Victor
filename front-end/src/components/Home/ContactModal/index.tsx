import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Whatsapp from "../../../assets/Whatsapp.svg";
import "./styles.css";

import { useState } from "react"; 

import { sendContactEmail } from "../../../api"; 

interface ContactModalProps {
  children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    
    const contactData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      title: formData.get("title") as string,
      message: formData.get("message") as string,
    };

    try {
      await sendContactEmail(contactData);
      
      alert("Mensagem enviada com sucesso!"); 
      setOpen(false); 
      
    } catch (error: any) {
      console.error("Erro no envio:", error);
      alert(error.message || "Falha ao enviar a mensagem. Tente novamente mais tarde.");
    } finally {
      setIsSending(false); 
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="ContactModalContent">
          <div className="modal-header">
            <Dialog.Title className="modal-title">Contacts</Dialog.Title>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </div>

          <form className="contact-form" onSubmit={handleEmailSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <input type="text" name="title" placeholder="Title" required />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
            ></textarea>

            <div className="form-actions">
              <button type="submit" className="button-pre" disabled={isSending}>
                {isSending ? "Sending..." : "Send"}
              </button>
              
              <a
                href="https://wa.me/5585999458074?text=Hello!"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-button"
                onClick={() => setOpen(false)}
              >
                <img src={Whatsapp} alt="WhatsApp" width={20} />
                WhatsApp
              </a>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}