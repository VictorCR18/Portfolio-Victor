import "./styles.css";
import Union from "../../../assets/Union.svg";

import { useContext } from "react";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import MyContext from "../../../utils/translateContext";

export function Header() {
  const { t, handleChangeLanguage }: any = useContext(MyContext);

  const Modal = () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <label htmlFor="checkbox" className="hamburguer">
          <span className="line line--top"></span>
          <span className="line line--middle"></span>
        </label>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            <div className="logo">
              <Link id="logo-mobile" to="/" className="link-logo">
                <img className="union" src={Union} alt="Union Logo" /> Victor
                Dev
              </Link>
            </div>
          </Dialog.Title>
          <Dialog.Description className="DialogDescription" asChild>
            <div className="navbar-modal">
              <Link to="/" className="label-header">
                <span className="label-color">#</span>
                {t("nav.navHome")}
              </Link>

              <Link to="/works" className="label-header">
                <span className="label-color">#</span>
                {t("nav.navWorks")}
              </Link>

              <Link to="/about" className="label-header">
                <span className="label-color">#</span>
                {t("nav.navAbout")}
              </Link>

              <Link to="/contacts" className="label-header">
                <span className="label-color">#</span>
                {t("nav.navContacts")}
              </Link>

              <select
                id="mySelectMobile"
                onChange={handleChangeLanguage}
                className="select"
                name="language"
              >
                <option value="EN">EN</option>
                <option value="PT">PT</option>
              </select>
            </div>
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );

  return (
    <div className="main-header">
      <div className="logo">
        <Link to="/" className="link-logo">
          <img className="union" src={Union} alt="Union Logo" /> Victor Dev
        </Link>
      </div>

      <Modal />

      <div className="navbar">
        <Link to="/" className="label-header">
          <span className="label-color">#</span>
          {t("nav.navHome")}
        </Link>
        <Link to="/works" className="label-header">
          <span className="label-color">#</span>
          {t("nav.navWorks")}
        </Link>
        <Link to="/about" className="label-header">
          <span className="label-color">#</span>
          {t("nav.navAbout")}
        </Link>
        <Link to="/contacts" className="label-header">
          <span className="label-color">#</span>
          {t("nav.navContacts")}
        </Link>

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
