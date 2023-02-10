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
        <a className="label-header">
          <label className="label-color">#</label>home
        </a>
        <a className="label-header">
          <label className="label-color">#</label>works
        </a>
        <a className="label-header">
          <label className="label-color">#</label>about-me
        </a>
        <a className="label-header">
          <label className="label-color">#</label>contacts
        </a>
        <select className="select" name="language">
          <option value="EN">EN</option>
          <option value="PT-Br">PT</option>
        </select>
      </div>
    </div>
  );
}
