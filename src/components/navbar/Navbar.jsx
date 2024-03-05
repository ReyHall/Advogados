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

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const top = document.querySelector(href).offsetTop - 85;
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }


  React.useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    navLinks[0].classList.add('active');

    function handleScroll() {
      const headerOne = document.querySelector('.header .header-one');
      setNav(window.scrollY >= (headerOne?.clientHeight || 0) ? 'active' : '');
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
  }, [])

  return (
    <nav className={`navbar ${nav}`} >
      <div className="container flex">
        <img className="logo" src={TRM} alt="trm" />
        <div className="menu">
          {links.map(({ href, text }, index) => (
            <a onClick={scrollToSection} href={href} key={index}>{text}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;