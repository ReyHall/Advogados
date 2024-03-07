import React from "react";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { PiMapPinLight } from "react-icons/pi";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import scrollToSection from "../../methods/scrollToSection";
import './Header.css';

const means = [
  {
    icon: <PiMapPinLight />,
    text: 'Onde estamos',
    href: '#contato',
    target: '',
    func: scrollToSection
  },

  {
    icon: <FiPhone />,
    text: '(91) 98116-7240',
    href: 'tel:(91)981167240',
    target: '_blank',
    func: null,
  },

  {
    icon: <RxEnvelopeClosed />,
    text: 'contato@rubinrocha.com.br',
    href: 'mailto:contato@rubinrocha.com.br',
    target: '_blank',
    func: null
  }
];

const socialMedia = [
  { icon: <BsFacebook />, link: 'https://www.facebook.com/trm.adv' },
  { icon: <FaInstagram />, link: 'https://www.instagram.com/trm.advocacia/' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/company/trmadvogados/' }
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
      {width >= 860 && (
        <div className="header-one">
          <div className="flex">
            <div className="means-of-contact">
              {means.map(({ icon, text, href, target, func }, index) => (
                <a onClick={func} target={target} className="means" href={href} key={index}> {icon} {text}</a>
              ))}
            </div>

            <div className="social-media">
              {socialMedia.map(({ icon, link }, index) => (
                <a target="_blank" href={link} key={index}> {icon} </a>
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