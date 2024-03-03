import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import DirAdm from '../../assets/dir-adm.svg';
import DirAgro from '../../assets/dir-agro.svg';
import DirAmbiental from '../../assets/dir-ambiental.svg';
import DirCivil from '../../assets/dir-civil.svg';
import DirComercial from '../../assets/dir-comercial.svg';
import DirConsumer from '../../assets/dir-consumer.svg';
import DirEcono from '../../assets/dir-econo.svg';
import DirEmpresarial from '../../assets/dir-agro.svg';
import DirImobiliario from '../../assets/dir-imobiliario.svg';
import DirIndeniza from '../../assets/dir-indeniza.svg';
import DirRegulatorio from '../../assets/dir-regulatorio.svg';
import DirSocio from '../../assets/dir-socio.svg';
import DirTrabalho from '../../assets/dir-trabalho.svg';
import DirTribute from '../../assets/dir-tribute.svg';
import UnderlineSimbol from '../../assets/underline-simbol.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import './AreasAtuacao.css';

const slideItem = [
  { img: DirAdm, text: 'Direito Administrativo'.split(' '), },
  { img: DirAgro, text: 'Direito Agrário'.split(' '), },
  { img: DirAmbiental, text: 'Direito Ambiental'.split(' '), },
  { img: DirCivil, text: 'Direito Cível'.split(' '), },
  { img: DirComercial, text: 'Direito Comercial'.split(' '), },
  { img: DirConsumer, text: 'Direito do Consumidor'.split() },
  { img: DirEcono, text: 'Direito Econômico'.split(' ') },
  { img: DirEmpresarial, text: 'Direito Empresarial'.split(' ') },
  { img: DirImobiliario, text: 'Direito Imobiliário'.split(' ') },
  { img: DirIndeniza, text: 'Direito Indenizatório'.split(' ') },
  { img: DirRegulatorio, text: 'Direito Regulatório'.split(' ') },
  { img: DirSocio, text: 'Direito Societário'.split(' ') },
  { img: DirTrabalho, text: 'Direito Trabalhista'.split(' ') },
  { img: DirTribute, text: 'Direito Tributário'.split(' ') }
]

function AreasAtuacao() {
  const swiperRef = React.useRef(null);
  const [isMouseOver, setIsMouseOver] = React.useState(false)

  const handleMouse = (option) => {
    switch (option) {
      case 'stop':
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.autoplay.stop();
        }
        break;
      case 'start':
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.autoplay.start();
        }
        break;
      default: ''
        break;
    }
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    handleMouse('stop');
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    handleMouse('start');
  }

  return (
    <section className="areas-atuacao" id="areasatuacao">
      <div className="container">
        <h2 className="sub-title"><BiLeftArrow /> Áreas de Atuação <BiRightArrow />
          <img className="underline-img" src={UnderlineSimbol} alt="underline" />
        </h2>
        <Swiper
          ref={swiperRef}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,

            },
            768: {
              slidesPerView: 5,

            },
            1024: {
              slidesPerView: 7,

            },
          }}
          modules={[Autoplay]}
        >
          {slideItem.map(({ img, text }, index) => (
            <SwiperSlide className="slide" key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <img src={img} alt={`${img + index}`} />
              {text.map((p) => <p key={p}>{p}</p>)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default AreasAtuacao;