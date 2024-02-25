import React from "react";
import HeaderMeansOfContact from "./HeaderMeansOfContact";
import HeaderSocialMedia from './HeaderSocialMedia'
import HeaderLanguage from "./HeaderLanguage";
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

import './Header.css';

function Header() {
  const [nav, setNav] = React.useState('');

  React.useEffect(() => {

    function handleScroll() {
      setNav(window.scrollY >= 63.5 ? 'active' : '');
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="header-one">
          <div className="flex">
            <HeaderMeansOfContact />
            <HeaderSocialMedia />
            <HeaderLanguage />
          </div>
        </div>
      </header >

      <nav className={`header-navbar ${nav}`} >
        <div className="container flex">
          <HeaderLogo />
          <HeaderMenu />
        </div>
      </nav>
    </>

  )
}

export default Header;