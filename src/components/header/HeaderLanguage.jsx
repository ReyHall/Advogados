import React from "react";

const options = [
  { lang: 'PT' },
  { lang: 'EN' }
]

function HeaderLanguage() {
  return (
    <form className="header-language" action="">
      <select name="" id="">
        {options.map(({ lang }, index) => (
          <option value={lang} key={index}>{lang}</option>
        ))}
      </select>
    </form>
  )
}

export default HeaderLanguage;