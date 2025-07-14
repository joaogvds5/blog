import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./maisInfStyle.css";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='container-Titulo'>
        <p>Desenvolvido de forma rápida e atualizável para desenvolvimento das habilidades. "Hospedado" no GitHub
          para controle de versão e pela facilidade do uso. Abaixo, as tecnologias utilizadas no desenvolvimento.
          </p>
      </div>

      <div className='gridTecnologias'>
        
        <div className='tecnologia-card' onClick={ () => window.open('https://reactjs.org', '_blank')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="" />          
          <h3>React</h3>
          <p>Biblioteca para criação de interfaces dinâmicas e responsivas.</p>
          
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://html.spec.whatwg.org', '_blank')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" />                    
          <h3>HTML</h3>
          <p>Linguagem para marcação e layout das estruturas do projeto.</p>
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank')}>
          <img src="https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg.webp" alt="" />                              
          <h3>CSS</h3>
          <p>Estilização customizada para layout, responsividade e identidade visual.</p>
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://www.javascript.com', '_blank')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s" alt="" />                    
          <h3>JavaScript</h3>
          <p>Linguagem base do projeto, manipulando lógica e interatividade.</p>
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://getbootstrap.com', '_blank')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="" />
          <h3>Bootstrap</h3>
          <p>Framework para agilizar a construção de componentes.</p>
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://vite.dev', '_blank')}>
          <img src="https://pt.vite.dev/logo.svg" alt="" />
          <h3>Vite</h3>
          <p>Ambiente rápido para desenvolvimento em React.</p>
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://reactrouter.com', '_blank')}>
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*8BlvIy8wNLlz6icM" alt="" />
          <h3>React Router</h3>
          <p>Navegação entre páginas sem recarregar a página.</p>
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://docs.github.com', '_blank')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png" alt="" />
          <h3>GitHub</h3>
          <p>Utilizado como repositório, controle de versão e API para exibir os projetos.
          </p>
        </div>

        <div className='tecnologia-card' onClick={() => window.open('https://axios-http.com/docs/api_intro', '_blank')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Axios_logo_%282020%29.svg/2560px-Axios_logo_%282020%29.svg.png" alt="" />
          <h3>Axios</h3>
          <p>Cliente HTTP usado para consumir a API do GitHub e listar projetos dinamicamente.</p>
      </div>

      </div>


    </div>
  );
}
