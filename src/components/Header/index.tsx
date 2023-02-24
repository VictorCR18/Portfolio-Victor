import "./styles.css";
import Union from "../../assets/Union.svg";

import { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import MyContext from "../Context/translateContext";

export function Header() {
  const { t, handleChangeLanguage }: any = useContext(MyContext);

  const Modal = () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <label htmlFor="checkbox" className="hamburguer">
          <span className="line line--top"></span>
          <span className="line line--middle"></span>
        </label>
        {/* <button>macaco</button> */}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            {" "}
            <div className="logo">
              <a href="/" className="link-logo">
                <img className="union" src={Union} /> Victor Dev
              </a>
            </div>
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            <div className="navbar-modal">
              <a href="/" className="label-header">
                <label className="label-color">#</label>
                {t("nav.navHome")}
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
        <a href="/" className="link-logo">
          <img className="union" src={Union} /> Victor Dev
        </a>
      </div>

      <Modal />
      <div className="navbar">
        <a href="/" className="label-header">
          <label className="label-color">#</label>
          {t("nav.navHome")}
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
