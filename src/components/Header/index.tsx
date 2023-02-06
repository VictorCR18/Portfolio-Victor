import "./styles.css";
import Union from "../../assets/Union.svg";
import Hastag from "../../assets/Hastag.svg";

export function Header() {
  return (
    <div className="content">
      <div className="main-header">
        <div className="logo">
          <a href="/" className="link-logo">
            <img className="union" src={Union} /> Victor Dev
          </a>
        </div>
        <div className="navbar">
          <label>
            <img src={Hastag} />
            home
          </label>
          <label>
            <img src={Hastag} />
            works
          </label>
          <label>
            <img src={Hastag} />
            about-me
          </label>
          <label>
            <img src={Hastag} />
            contacts
          </label>
          <select className="select" name="language">
            <option value="EN">EN</option>
            <option value="PT-Br">PT</option>
          </select>
        </div>
      </div>
    </div>
  );
}
