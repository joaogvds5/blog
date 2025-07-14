import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Index";
import Projetos from "../pages/projetos/Index";
import MaisInformacoes from "../pages/about/Index";
import Header from "./header/Index";
import Contato from "../pages/contato/Index";


export default function Routers() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/maisInformacoes" element={<MaisInformacoes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </>
  );
}
