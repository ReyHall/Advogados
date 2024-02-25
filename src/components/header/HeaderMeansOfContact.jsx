import React from "react";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { PiMapPinLight } from "react-icons/pi";

const means = [
  { icon: <PiMapPinLight />, text: 'Onde estamos', href: '#contato' },
  { icon: <FiPhone />, text: '(91) 988923-0344', href: 'tel:91889230344' },
  { icon: <RxEnvelopeClosed />, text: 'exemplo@trm.com.br', href: 'mailto:' }
];

function MeansOfContact() {
  return (
    <div className="header-means-of-contact">
      {means.map(({ icon, text, href }, index) => (
        <a className="means" href={href} key={index}> {icon} {text}</a>
      ))}
    </div>
  )
}

export default MeansOfContact;