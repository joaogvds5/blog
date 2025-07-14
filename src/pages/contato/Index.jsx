import React from 'react'

export default function () {

  return (
    <div className='container'>
      

      <div className='gridTecnologias'>
        <div className='tecnologia-card' onClick={ () => window.open('https://whatsa.me/5567992994855', '_blank')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png" alt="" />          
          <h3>Whatsapp</h3>          
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLqDdsVnVKknCxSqsCkBklBZLlmZnJGGMwBSkfFNFwGfwgBpTSddClvpxqCjshXWVLBZL', '_blank')}>
          <img src="https://cdn-icons-png.flaticon.com/512/2250/2250206.png" alt="" />                    
          <h3>Email</h3>
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://www.linkedin.com/in/joão-guilherme-vieira-de-souza-339542286/', '_blank')}>
          <img src="https://www.gov.br/cdtn/pt-br/canais_atendimento/linkedin.png " alt="" />                              
          <h3>Linkedin</h3>
        </div>

        <div className='tecnologia-card' onClick={ () => window.open('https://www.instagram.com/joaogvds/', '_blank')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" />
          <h3>Instagram</h3>
        </div>


      </div>
    </div>
  );
}
