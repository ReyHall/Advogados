import React from "react";
import BTM from '../../assets/business-team-manager-meeting.jpg';
import './QuemSomos.css';

const texts = [
  { text: 'A Távora, Rubin & Matos é uma firma de advocacia fundada em 2007 e focada na assessoria jurídica empresarial na Amazônia.' },

  { text: 'Atuamos na área consultiva e contenciosa, no âmbito judicial, extrajudicial e arbitral, proporcionando atendimento individualizado ou em caráter “full service”.' }
];


function QuemSomos() {
  return (
    <section className="quem-somos" id="quemsomos">
      <div className="imagem">
        <img src={BTM} alt="quemsomos" />
      </div>

      <div className="content">
        <div className="container flex">
          <h1 className='title'>Quem somos e o que fazemos?</h1>
          <div className="flex-text">
            {texts.map(({ text }, index) => <p key={index}>{text}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuemSomos