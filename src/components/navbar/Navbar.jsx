import React from "react";
import TRM from '../../assets/TRM-logo.svg';
import './Navbar.css';

const links = [
  { href: '#quemsomos', text: 'Quem Somos' },
  { href: '#areasatuacao', text: 'Áreas de atuação' },
  { href: '#advogados', text: 'Advogados' },
  { href: '#contato', text: 'Contato' }
]

function Navbar() {
  const [nav, setNav] = React.useState('');

  React.useEffect(() => {
    function handleScroll() {
      const headerOne = document.querySelector('.header .header-one');
      setNav(window.scrollY >= (headerOne?.clientHeight || 0) ? 'active' : '');
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    }
  }, [])

  return (
    <nav className={`navbar ${nav}`} >
      <div className="container flex">
        <img className="logo" src={TRM} alt="trm" />
        <div className="menu">
          {links.map(({ href, text }, index) => (
            <a href={href} key={index}>{text}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;