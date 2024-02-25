import React from "react";
import QuemSomosImg from "./QuemSomosImg";
import QuemSomosTitle from "./QuemSomosTitle";
import QuemSomosText from "./QuemSomosText";
import './QuemSomos.css';

function QuemSomos() {
  return (
    <section className="quem-somos" id="quemsomos">
      <div className="quem-somos-img">
        <QuemSomosImg />
      </div>

      <div className="quem-somos-content">
        <div className="container flex">
          <QuemSomosTitle />
          <div className="flex-text">
            <QuemSomosText />
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuemSomos