import React from "react";
const links = [
  { href: '#quemsomos', text: 'Quem Somos' },
  { href: '#areasdeatuacao', text: 'Áreas de atuação' },
  { href: '#advogados', text: 'Advogados' },
  { href: '#contato', text: 'Contato' }
]

function HeaderMenu() {
  return (
    <nav className="header-menu">
      {links.map(({ href, text }, index) => (
        <a href={href} key={index}>{text}</a>
      ))}
    </nav>
  )
}

export default HeaderMenu;