import "./styles.css";
import Union from "../../assets/Union.svg";

export function Header() {
  return (
    <div className="main-header">
      <div className="logo">
        <a href="/" className="link-logo">
          <img className="union" src={Union} /> Victor Dev
        </a>
      </div>
      <div className="navbar">
        <label>#home</label>
        <label>#works</label>
        <label>#about-me</label>
        <label>#contacts</label>
        <select className="select" name="language">
          <option value="EN">EN</option>
          <option value="PT-Br">PT</option>
        </select>
      </div>
    </div>
  );
}
