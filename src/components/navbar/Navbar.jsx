import React from "react";
import { FaBars } from "react-icons/fa";
import TRM from '../../assets/TRM-logo.svg';
import scrollToSection from "../../methods/scrollToSection";
import './Navbar.css';

const links = [
  { href: '#quemsomos', text: 'Quem Somos' },
  { href: '#areasatuacao', text: 'Áreas de atuação' },
  { href: '#advogados', text: 'Advogados' },
  { href: '#redessociais', text: 'Redes Sociais' },
  { href: '#contato', text: 'Contato' }
]


function Navbar() {
  const [nav, setNav] = React.useState('');
  const [menu, setMenu] = React.useState('');
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])


  React.useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    navLinks[0].classList.add('active');

    function handleScroll() {
      const headerOne = document.querySelector('.header .header-one');
      setNav(window.scrollY >= (headerOne?.clientHeight || 0) ? 'active' : '');
      setMenu(false);
    }

    function scrollSpy() {
      sections.forEach((sec) => {
        const top = window?.scrollY;
        const height = sec?.offsetHeight;
        const offset = sec?.offsetTop - 90;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link?.classList?.remove('active');
            document.querySelector('.navbar a[href*=' + id + ']')?.classList?.add('active');
          })
        }
      })
    }

    handleScroll();
    scrollSpy();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', scrollSpy);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', scrollSpy);
    }
  }, [nav])

  return (
    <nav className={`navbar ${nav}`} >
      <div className="container flex">
        <img className="logo" src={TRM} alt="trm" />
        <div className={`menu ${menu ? 'active' : ''}`}>
          {links.map(({ href, text }, index) => (
            <a onClick={scrollToSection} href={href} key={index}>{text}</a>
          ))}
        </div>
        {width <= 860 && <FaBars onClick={() => setMenu(!menu)} className="bars" />}
      </div>
    </nav>
  )
}

export default Navbar;