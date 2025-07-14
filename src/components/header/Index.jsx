// src/componentes/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./headerStyle.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="cabecalho">
      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}><p>Home</p></a>
      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/projetos"); }}><p>Projetos</p></a>
      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/contato"); }}><p>Contato</p></a>
      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/maisInformacoes"); }}><p>Sobre</p></a>
    </header>
  );
}
