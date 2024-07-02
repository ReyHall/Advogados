import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import UnderlineSimbol from '../../assets/underline-simbol.svg'
import Advogado4 from '../../assets/advogado-4.jpg';
import Advogado1 from '../../assets/advogado-1.jpg';
import Advogado2 from '../../assets/advogado-2.jpg';
import Advogado3 from '../../assets/advogado-3.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import './Advogados.css';

const advogadoItem = [
  {
    img: Advogado4,
    alt: 'advogado-4',
    name: 'Morane de Oliveira Tavora',
    span: 'Advogado OAB/PA 14.993',
    text: 'Bacharel em direito pela UFPA. Especialista em Direito Agrário pelo CESUPA. Atualmente cursa especialização em Economia Brasileira para Negócios na USP.'
  },

  {
    img: Advogado1,
    alt: 'advogado-1',
    name: 'Camilla Rubin Matos',
    span: 'Advogada OAB/PA 9.504',
    text: 'Bacharel em direito pela UNAMA MBA em Direito Civil e Processual Civil – Fundação Getúlio Vargas – Belém/PA; Curso de expansão em Direito Ambiental Comparado - Pace Law University – Nova York/EUA.'
  },

  {
    img: Advogado2,
    alt: 'advogado-2',
    name: 'Caroline Laura da Costa Ferreira Matos',
    span: 'Advogada OAB/PA 18.112',
    text: 'Bacharel em direito pelo CESUPA MBA em Direito Ambiental e Sustentável pela Fundação Getúlio Vargas – FGV Especialização do Centro de Estudos de Direito do Ordenamento, do Urbanismo e do Ambiente pela Universidade de Coimbra'
  },

  {
    img: Advogado3,
    alt: 'advogado-3',
    name: 'Danilo Ewerton Costa Fortes',
    span: 'Advogado OAB/PA 14.431',
    text: 'Bacharel em direito pela Faculdade Integrada de Ensino Superior - FIES'
  },
]

function Advogados() {
  return (
    <section className="advogados" id="advogados">
      <div className="container">
        <hgroup className="group-title">
          <h2 className="sub-title"> <BiLeftArrow /> Advogados <BiRightArrow />
            <img className="underline-img" src={UnderlineSimbol} alt="underline-img" />
          </h2>
          <h3>Conheça nosso time de profissionais</h3>
        </hgroup>

        <div className="box-container">
          {advogadoItem.map(({ img, alt, redes, name, span, text }, index) => (
            <div className="box" key={index}>
              <div className="imagem">
                <img src={img} alt={alt} />
              </div>

              <div className="content">
                <h3 className="name">{name}</h3>
                <span className="oab">{span}</span>
                <p className="text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advogados;