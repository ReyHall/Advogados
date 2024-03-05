import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import TRM from '../../assets/TRM-footer.svg';
import './Footer.css';

const redes = [
  { icon: <BsFacebook />, url: '' },
  { icon: <FaTwitter />, url: '' },
  { icon: <FaLinkedin />, url: '' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={TRM} alt="TRM" />
        <div className="icons">
          {redes.map(({ icon, url }, index) => (
            <a href={url} key={index}>{icon}</a>
          ))}
        </div>
        <div className="credits"><a href="https://www.parc3ria.com.br">© parc3ria.com.br</a></div>
      </div>
    </footer>
  )
}

export default Footer;