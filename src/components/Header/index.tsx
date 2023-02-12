import "./styles.css";
import Union from "../../assets/Union.svg";

import { useContext } from "react";
import MyContext from "../Context/translateContext";

export function Header() {

  const { t, handleChangeLanguage }: any = useContext(MyContext);

  return (
    <div className="main-header">
      <div className="logo">
        <a href="/" className="link-logo">
          <img className="union" src={Union} /> Victor Dev
        </a>
      </div>
      <div className="navbar">
        <a className="label-header">
          <label className="label-color">#</label>{t('nav.navHome')}
        </a>
        <a className="label-header">
          <label className="label-color">#</label>
          {t("nav.navWorks")}
        </a>
        <a className="label-header">
          <label className="label-color">#</label>
          {t("nav.navAbout")}
        </a>
        <a className="label-header">
          <label className="label-color">#</label>
          {t("nav.navContacts")}
        </a>
        <select
          id="mySelect"
          onChange={handleChangeLanguage}
          className="select"
          name="language"
        >
          <option value="EN">EN</option>
          <option value="PT">PT</option>
        </select>
      </div>
    </div>
  );
}
