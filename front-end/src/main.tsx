import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import "./i18n/i18n.ts";

import { TranslateContext } from "./utils/translateContext";
import Home from "./pages/Home";
import { Media } from "./components/Geral/Media";
import { Header } from "./components/Geral/Header";
import { Footer } from "./components/Geral/Footer";
import AboutMePage from "./pages/AboutMe";
import ContactsPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TranslateContext>
      <BrowserRouter>
        <Media />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </TranslateContext>
  </React.StrictMode>,
);
