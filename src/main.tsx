import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";

import { Home } from "./pages/Home";
import { Media } from "./components/Media";

import './i18n/i18n.ts';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Media />
    <Home />
  </React.StrictMode>
);
