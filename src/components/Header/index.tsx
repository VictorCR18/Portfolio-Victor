import "./styles.css";
import Union from "../../assets/Union.svg";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = (event: any) => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

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
          <label className="label-color">#</label>
          {t("navWorks")}
        </a>
        <a className="label-header">
          <label className="label-color">#</label>{t("navAbout")}
        </a>
        <a className="label-header">
          <label className="label-color">#</label>{t("navContacts")}
        </a>
        <select id="mySelect" onChange={handleChangeLanguage} className="select" name="language">
          <option value="EN">EN</option>
          <option id="langPT" value="PT">
            PT
          </option>
        </select>
      </div>
    </div>
  );
}
