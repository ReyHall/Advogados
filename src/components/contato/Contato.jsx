import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { PiMapPinLight } from "react-icons/pi";
import UnderlineSimbol from '../../assets/underline-simbol.svg'
import './Contato.css';

const itemsContact = [
  { icon: <PiMapPinLight />, text: 'Edifício Rogélio Fernandez Tv. Quintino Bocaiúva, nº 2301 - Sala 1803 Cremação, Belém - PA, 66045-315', href: 'https://maps.app.goo.gl/mhMSUoYVzzPRiPGk7' },
  { icon: <FiPhone />, text: '(91) 98116-7240', href: 'tel:91981167240' },
  { icon: <RxEnvelopeClosed />, text: 'contato@trm.com.br', href: 'mailto:contato@trm.com.br' }
]

function Contato() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [celular, setCelular] = React.useState('');
  const [servico, setServico] = React.useState('');
  const [menssagem, setMenssagem] = React.useState('');

  return (
    <section className="contato" id="contato">
      <div className="container">
        <hgroup className="group-title">
          <h2 className="sub-title"> <BiLeftArrow /> Contato <BiRightArrow />
            <img className="underline-img" src={UnderlineSimbol} alt="underline-img" />
          </h2>
          <h3>Agende uma visita com nossa equipe!</h3>
        </hgroup>

        <div className="row">
          <form action="">

            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="tel" value={celular} onChange={(e) => setCelular(e.target.value)} placeholder="Celular (Opcional)" />
            <input type="text" value={servico} onChange={(e) => setServico(e.target.value)} placeholder="Serviço (Opcional)" />
            <textarea name="mensagem" id="" cols="30" rows="10" value={menssagem} onChange={(e) => setMenssagem(e.target.value)} placeholder="Mensagem" required />

            <p className="politica-privacidade">Nosso escritório respeita a sua privacidade e utiliza seus dados pessoais apenas para a finalidade solicitada. Para saber mais, confira nossa <span>Política de Privacidade.</span></p>
          </form>

          <div className="iframe-contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5244237728575!2d-48.48700708809944!3d-1.4592260985209038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e875aeaaaab%3A0x4398a2812fe6d4d2!2sTv.%20Quintino%20Bocai%C3%BAva%2C%202301%20-%20Sala%201803%20-%20Crema%C3%A7%C3%A3o%2C%20Bel%C3%A9m%20-%20PA%2C%2066045-315!5e0!3m2!1spt-PT!2sbr!4v1709497362676!5m2!1spt-PT!2sbr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="content">
              {itemsContact.map(({ icon, text, href }, index) => (
                <p href={href} key={index}>{icon}  <a href={href}>{text}</a> <br /></p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contato;