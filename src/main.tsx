import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import "./i18n/i18n.ts";

import { TranslateContext } from "./utils/translateContext";
import { Home } from "./pages/Home";
import { Media } from "./components/Media";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Exemplo de uma nova página
// import { ProjectDetails } from "./pages/ProjectDetails";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TranslateContext>
      <BrowserRouter>
        <Media />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Exemplo de como adicionar novas rotas no futuro:
          <Route path="/projeto/:id" element={<ProjectDetails />} /> 
          */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </TranslateContext>
  </React.StrictMode>,
);
