import { Contacts } from "../../components/Home/Contacts";
import "./styles.css";

export default function ContactsPage() {
  return (
    <div className="contacts-main">
      <Contacts symbol="/" display="none" />
    </div>
  );
}
