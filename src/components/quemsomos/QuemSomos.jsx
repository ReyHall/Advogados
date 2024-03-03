import React from "react";
import BTM from '../../assets/business-team-manager-meeting.jpg';
import './QuemSomos.css';

const texts = [
  { text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor nibh euismod tincidunt.' },

  { text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor nibh euismod tincidunt.' }
];


function QuemSomos() {
  return (
    <section className="quem-somos" id="quemsomos">
      <div className="imagem">
        <img src={BTM} alt="quemsomos" />
      </div>

      <div className="content">
        <div className="container flex">
          <h1 className='title'>Um pouco de nossa historia</h1>
          <div className="flex-text">
            {texts.map(({ text }, index) => <p key={index}>{text}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuemSomos