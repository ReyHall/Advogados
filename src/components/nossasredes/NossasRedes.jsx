import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import UnderlineSimbol from '../../assets/underline-simbol.svg';
import './NossasRedes.css';

function NossasRedes() {
  return (
    <section className="nossas-redes">
      <div className="container">
        <hgroup className="group-title">
          <h2 className="sub-title"> <BiLeftArrow /> Redes Sociais <BiRightArrow />
            <img className="underline-img" src={UnderlineSimbol} alt="underline-img" />
          </h2>
          <h3>A gente nas redes sociais</h3>
        </hgroup>
      </div>
    </section>
  )
}

export default NossasRedes;