import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Whatsapp from "../../../assets/Whatsapp.svg";
import "./styles.css";

interface ContactModalProps {
  children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const title = formData.get("title");
    const message = formData.get("message");

    const mailtoLink = `mailto:cavalcantevictor2003@gmail.com?subject=${encodeURIComponent(
      title as string,
    )}&body=${encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <Dialog.Root>
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
              <button type="submit" className="button-pre">
                Send
              </button>
              <a
                href="https://wa.me/5585999458074?text=Hello!"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-button"
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
