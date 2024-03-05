import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import UnderlineSimbol from '../../assets/underline-simbol.svg'
import Advogado1 from '../../assets/advogado-1.png';
import Advogado2 from '../../assets/advogado-2.png';
import Advogado3 from '../../assets/advogado-3.png';
import Advogado4 from '../../assets/advogado-4.png';
import 'swiper/css';
import 'swiper/css/pagination';
import './Advogados.css';

const advogadoItem = [
  {
    img: Advogado1,
    alt: 'advogado-1',
    redes: [
      {
        icon: <BsFacebook />,
        url: 'https://',
      },

      {
        icon: <FaTwitter />,
        url: 'https://',
      },

      {
        icon: <FaLinkedin />,
        url: 'https://',
      },
    ],
    name: 'Morane de Oliveira Tavora',
    span: 'Advogado OAB/PA 14.993',
    text: 'Bacharel em direito pela UFPA. Especialista em Direito Agrário pelo CESUPA. Atualmente cursa especialização em Economia Brasileira para Negócios na USP.'
  },

  {
    img: Advogado2,
    alt: 'advogado-2',
    redes: [
      {
        icon: <BsFacebook />,
        url: 'https://',
      },

      {
        icon: <FaTwitter />,
        url: 'https://',
      },

      {
        icon: <FaLinkedin />,
        url: 'https://',
      },
    ],
    name: 'Camilla Rubin Matos',
    span: 'Advogada OAB/PA 9.504',
    text: 'Bacharel em direito pela UNAMA MBA em Direito Civil e Processual Civil – Fundação Getúlio Vargas – Belém/PA; Curso de expansão em Direito Ambiental Comparado - Pace Law University – Nova York/EUA.'
  },

  {
    img: Advogado3,
    alt: 'advogado-3',
    redes: [
      {
        icon: <BsFacebook />,
        url: 'https://',
      },

      {
        icon: <FaTwitter />,
        url: 'https://',
      },

      {
        icon: <FaLinkedin />,
        url: 'https://',
      },
    ],
    name: 'Caroline Laura da Costa Ferreira Matos',
    span: 'Advogado OAB/PA 18.112',
    text: 'Bacharel em direito pelo CESUPA MBA em Direito Ambiental e Sustentável pela Fundação Getúlio Vargas – FGV Especialização do Centro de Estudos de Direito do Ordenamento, do Urbanismo e do Ambiente pela Universidade de Coimbra'
  },

  {
    img: Advogado4,
    alt: 'advogado-4',
    redes: [
      {
        icon: <BsFacebook />,
        url: 'https://',
      },

      {
        icon: <FaTwitter />,
        url: 'https://',
      },

      {
        icon: <FaLinkedin />,
        url: 'https://',
      },
    ],
    name: 'Danilo Ewerton Costa Fortes',
    span: 'Advogada OAB/PA 14.431',
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
                <div className="icons">
                  {redes.map(({ icon, url }, index) => (
                    <a target="_blank" href={url} key={index}> {icon} </a>
                  ))}
                </div>
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