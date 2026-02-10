import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import "./i18n/i18n.ts";

import { TranslateContext } from "./utils/translateContext";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import { Media } from "./components/Geral/Media";
import { Header } from "./components/Geral/Header";
import { Footer } from "./components/Geral/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TranslateContext>
      <BrowserRouter>
        <Media />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Project />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </TranslateContext>
  </React.StrictMode>,
);
