import React from "react";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { PiMapPinLight } from "react-icons/pi";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import './Header.css';

const means = [
  { icon: <PiMapPinLight />, text: 'Onde estamos', href: '#contato' },
  { icon: <FiPhone />, text: '(91) 988923-0344', href: 'tel:91889230344' },
  { icon: <RxEnvelopeClosed />, text: 'exemplo@trm.com.br', href: 'mailto:' }
];

const socialMedia = [
  { icon: <BsFacebook />, link: '' },
  { icon: <FaTwitter />, link: '' },
  { icon: <FaLinkedin />, link: '' }
];

const options = [
  { lang: 'PT' },
  { lang: 'EN' }
]



function Header() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (

    <header className="header">
      {width >= 830 && (
        <div className="header-one">
          <div className="flex">
            <div className="means-of-contact">
              {means.map(({ icon, text, href }, index) => (
                <a className="means" href={href} key={index}> {icon} {text}</a>
              ))}
            </div>

            <div className="social-media">
              {socialMedia.map(({ icon, link }, index) => (
                <a href={link} key={index}> {icon} </a>
              ))}
            </div>

            <form className="language" action="">
              <select name="" id="">
                {options.map(({ lang }, index) => (
                  <option value={lang} key={index}>{lang}</option>
                ))}
              </select>
            </form>
          </div>
        </div>
      )}

    </header >

  )
}

export default Header;