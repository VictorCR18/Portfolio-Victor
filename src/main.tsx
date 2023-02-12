import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";

import { TranslateContext } from "./components/Context/translateContext";
import { Home } from "./pages/Home";
import { Media } from "./components/Media";

import "./i18n/i18n.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TranslateContext>
      <Media />
      <Home />
    </TranslateContext>
  </React.StrictMode>
);
