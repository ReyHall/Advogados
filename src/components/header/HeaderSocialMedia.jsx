import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const socialMedia = [
  { icon: <BsFacebook />, link: '' },
  { icon: <FaTwitter />, link: '' },
  { icon: <FaLinkedin />, link: '' }
]

function HeaderSocialMedia() {
  return (
    <div className="header-social-media">
      {socialMedia.map(({ icon, link }, index) => (
        <a href={link} key={index}> {icon} </a>
      ))}
    </div>
  )
}

export default HeaderSocialMedia;