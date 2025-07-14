import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './projetosStyle.css';

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.github.com/users/joaogvds5/repos?per_page=100')
      .then(res => {
        setRepos(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar repositórios:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando projetos...</p>;

  return (
    <div className="projetos-container">
      {repos.map(repo => (
        <div key={repo.id} className="card-projeto">

          <h3>{repo.name}</h3>
          <p>{repo.description || 'Sem descrição'}</p>
          <p><strong>{repo.language || '—'}</strong></p>
          <button onClick={() => window.open(repo.html_url, '_blank')}>
            Ver mais
          </button>
        </div>
      ))}
    </div>
  );
}
