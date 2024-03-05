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
  { img: DirAdm, alt: 'Dir-Adm', text: 'Direito Administrativo'.split(' '), },
  { img: DirAgro, alt: 'Dir-Agro', text: 'Direito Agrário'.split(' '), },
  { img: DirAmbiental, alt: 'Dir-Ambiental', text: 'Direito Ambiental'.split(' '), },
  { img: DirCivil, alt: 'Dir-Civil', text: 'Direito Cível'.split(' '), },
  { img: DirComercial, alt: 'Dir-Comercial', text: 'Direito Comercial'.split(' '), },
  { img: DirConsumer, alt: 'Dir-Consumer', text: 'Direito do Consumidor'.split(), },
  { img: DirEcono, alt: 'Dir-Econo', text: 'Direito Econômico'.split(' '), },
  { img: DirEmpresarial, alt: 'Dir-Empresarial', text: 'Direito Empresarial'.split(' '), },
  { img: DirImobiliario, alt: 'Dir-Imobiliario', text: 'Direito Imobiliário'.split(' '), },
  { img: DirIndeniza, alt: 'Dir-Indeniza', text: 'Direito Indenizatório'.split(' '), },
  { img: DirRegulatorio, alt: 'Dir-Regulatorio', text: 'Direito Regulatório'.split(' '), },
  { img: DirSocio, alt: 'Dir-Socio', text: 'Direito Societário'.split(' '), },
  { img: DirTrabalho, alt: 'Dir-Trabalho', text: 'Direito Trabalhista'.split(' '), },
  { img: DirTribute, alt: 'Dir-Tribute', text: 'Direito Tributário'.split(' '), }
]

function AreasAtuacao() {
  const swiperRef = React.useRef(null);
  const [isMouseOver, setIsMouseOver] = React.useState(false)

  const handleMouse = (option) => {
    const autoplay = swiperRef.current?.swiper?.autoplay;
    if (autoplay) option === 'stop' ? autoplay.stop() : autoplay.start()
  };

  const handleMouseEvents = (isMouseOver) => {
    setIsMouseOver(isMouseOver);
    handleMouse(isMouseOver ? 'stop' : 'start');
  }

  const lengthSlide = (num) => Math.floor(num);

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
            0: { slidesPerView: lengthSlide(slideItem.length / slideItem.length) },
            640: { slidesPerView: lengthSlide(slideItem.length / 5) },
            768: { slidesPerView: lengthSlide(slideItem.length / 3) },
            1024: { slidesPerView: lengthSlide(slideItem.length / 2) },
          }}
          modules={[Autoplay]}
        >
          {slideItem.map(({ img, alt, text }, index) => (
            <SwiperSlide className="slide" key={index}
              onMouseEnter={() => handleMouseEvents(true)}
              onMouseLeave={() => handleMouseEvents(false)}>
              <img src={img} alt={alt} />
              {text.map((p) => <p key={p}>{p}</p>)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default AreasAtuacao;