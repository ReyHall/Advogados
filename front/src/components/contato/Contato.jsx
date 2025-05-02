import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { PiMapPinLight } from 'react-icons/pi';
import UnderlineSimbol from '../../assets/underline-simbol.svg';
import './Contato.css';

const itemsContact = [
  { icon: <PiMapPinLight />, text: 'Edifício Rogélio Fernandez Tv. Quintino Bocaiúva, nº 2301 - Sala 1803, Cremação - Belém - PA, 66045-315', href: 'https://maps.app.goo.gl/7XMSdifgu8oE4Z1m7' },
  { icon: <FiPhone />, text: '(91) 98116-7240', href: 'tel:91981167240' },
  { icon: <RxEnvelopeClosed />, text: 'contato@trm.com.br', href: 'mailto:contato@trm.com.br' }
]

function Contato() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [celular, setCelular] = React.useState('');
  const [servico, setServico] = React.useState('');
  const [menssagem, setMenssagem] = React.useState('');
  const recaptchaRef = React.useRef(null);
  const [captchaValue, setCaptchaValue] = React.useState(null);
  const timeOutStatus = React.useRef(null);
  const [status, setStatus] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    value == null ? setStatus('reCAPTCHA') : setStatus('');
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();

    if (!captchaValue) {
      setStatus('reCAPTCHA');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${BACKEND_URL}/email`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          nome: nome,
          email: email,
          celular: celular,
          servico: servico,
          menssagem: menssagem,
          token: captchaValue
        })
      })

      const data = await response.json();
      setStatus('Sucesso');
    } catch (error) {
      setStatus("Error");
      console.log(error);
    } finally {
      setLoading(false); 

      if(recaptchaRef.current){
        recaptchaRef.current.reset();
        setCaptchaValue(null);
      };

      timeOutStatus.current = setTimeout(() => setStatus(''), 6000);
      timeOutStatus.current = null;
    }
  }

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
          <form onSubmit={handleSubmit}>
            {status === "Sucesso" && <div className="notificacao notificacao-sucesso">Email enviado com sucesso para: <br/><strong>{email}</strong></div>}
            {status === "Error" && <div className="notificacao notificacao-error">Não foi possível enviar o email, tente novamente mais tarde</div>}
            {status === "reCAPTCHA" && <div className='notificacao notificacao-aviso'>Por favor, preencha o <strong>reCAPTCHA</strong></div>}
            <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="tel" name="celular" value={celular} onChange={(e) => setCelular(e.target.value)} placeholder="Celular (Opcional)" />
            <input type="text" name="servico" value={servico} onChange={(e) => setServico(e.target.value)} placeholder="Serviço (Opcional)" />
            <textarea name="menssagem" cols="30" rows="10" value={menssagem} onChange={(e) => setMenssagem(e.target.value)} placeholder="Mensagem" required />

            <div className="flex">
              <input disabled={loading} type="submit" className="btn" />
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={SITE_KEY}
                onChange={handleCaptchaChange}
              />
            </div>

            <p className="politica-privacidade">Nosso escritório respeita a sua privacidade e utiliza seus dados pessoais apenas para a finalidade solicitada. Para saber mais, confira nossa <span>Política de Privacidade.</span></p>
          </form>

          <div className="iframe-contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5244237728575!2d-48.48700708809944!3d-1.4592260985209038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e875aeaaaab%3A0x4398a2812fe6d4d2!2sTv.%20Quintino%20Bocai%C3%BAva%2C%202301%20-%20Sala%201803%20-%20Crema%C3%A7%C3%A3o%2C%20Bel%C3%A9m%20-%20PA%2C%2066045-315!5e0!3m2!1spt-PT!2sbr!4v1709497362676!5m2!1spt-PT!2sbr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="content">
              {itemsContact.map(({ icon, text, href }, index) => (
                <p key={index}>{icon}  <a href={href}>{text}</a> <br /></p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato;
