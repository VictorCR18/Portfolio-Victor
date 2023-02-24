import "./styles.css";
import Union from "../../assets/Union.svg";

import { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
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
          <Dialog.Title className="DialogTitle"> teste </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <Dialog.Close />
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
      {/* <label htmlFor="checkbox" className="hamburguer">
          <input onClick={Modal} type="checkbox" id="checkbox" />
          <span className="line line--top"></span>
          <span className="line line--middle"></span>
          <span className="line line--bottom"></span>
        </label> */}

      <div id="modal" className="open-modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="modal-container">
            <div className="form-header">
              <h1>Cadastar</h1>
            </div>
          </div>
        </div>
      </div>
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
