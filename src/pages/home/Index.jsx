import React from 'react';
import './homeStyle.css';
import { useNavigate } from "react-router-dom";

export default function Home() {
  
  const navigate = useNavigate();

  return (
    <div>
      

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Simongame.png" className="d-block w-100" alt="slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Simon Game</h1>
              <p>Jogo de memória usando jQuery</p>
              <p><a className="btn btn-lg btn-primary" onClick={() => 
                window.open("https://joaogvds5.github.io/Simon-game/", '_blank')} href="#">Jogar</a></p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="pedais.png" className="d-block w-100" alt="slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h1>As vezes músico</h1>
              <p>Alguns momentos não podem passar em branco</p>
            </div>
          </div>

          
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>


    <div className='informacoes'>
      <div className='informacoesResumo'>
        <h1>João Vieira</h1>
        <p>Estudante de engenharia de software pela Unigran (2024 - 2026) vindo de transferência 
          da UFMS (2023 - 2024). Possui experiência trabalhando na área administrativa pela Cargill 
          Agrícola (2024 - atual) e em finalização de curso Técnico Administrativo pelo SENAI MS 
          (2024 - 2025). Atualmente trabalhando na área administrativa, responsável por:
          <br />
            * Acompanhamento do controle patrimonial da unidade Dourados/MS.<br />
            * Auxílio em compras.<br />
            * Emissão, correção, acompanhamento e armazenamento de documentos.<br />
            Sistemas utilizados:  Oracle JDE, RDSweb, Neogrid, SAP, Excel, PowerBI.
        </p>
        <p>Gosto de praticar minhas habilidades em desenvolvimento web utilizando HTML, CSS, JavaScript (padrão)
          e utilizando de bibliotecas e frameworks como React, Bootstrap, Node.js, etc. Aliás, nota-se a utilização
          destes no desenvolvimento deste 'blog', não?!
        </p>
        <p>Busco desenvolver projetos pessoais (como este) para manter a prática do desenvolvimento e 
          evitar 'enferrujar' as skills. Buscando desenvolver aplicações úteis que agreguem e facilitem 
          a vida dos usuários em questão.
        </p>
        <p>Como hobbie e "segunda área" de estudo: música. Gosto de ouvir, tocar, gravar e, de vez em quando,
          fazer uns shows.
        </p>
      </div>

      <div className='informacoesImg'>
        <img src="../../public/foto TI perfil.jpg" alt="foto desenvolvedor" />
        
      </div>
    </div>


    </div>
  );
}
