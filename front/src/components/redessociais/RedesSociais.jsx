import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import UnderlineSimbol from "../../assets/underline-simbol.svg";
import "./RedesSociais.css";

function RedesSociais() {
  const swiperRef = React.useRef(null);
  const [feedlist, setFeedList] = React.useState([]);
  const token = import.meta.env.VITE_INSTA_TOKEN;
  const fields = "media_url,media_type,permalink,timestamp";
  //const URL = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

  /*async function getInstaFeed() {
    const response = await fetch(URL);
    const resolve = await response.json();
    setFeedList(resolve.data);
  }*/

  React.useEffect(() => {
    getInstaFeed();
  }, []);

  const feedSort = feedlist
    .slice()
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return (
    <section className="redes-sociais" id="redessociais">
      <div className="container">
        <hgroup className="group-title">
          <h2 className="sub-title">
            {" "}
            <BiLeftArrow /> Redes Sociais <BiRightArrow />
            <img
              className="underline-img"
              src={UnderlineSimbol}
              alt="underline-img"
            />
          </h2>
          <h3>Nosso escritório nas redes sociais</h3>
        </hgroup>
        <Swiper
          ref={swiperRef}
          navigation
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
        >
          {feedSort.map(({ id, media_url, media_type, permalink }) => (
            <SwiperSlide className="slide" key={id}>
              <a href={permalink} target="_blank" rel="noopener noreferrer">
                {media_type === "IMAGE" || media_type === "CAROUSEL_ALBUM" ? (
                  <img src={media_url} />
                ) : (
                  <video src={media_url}></video>
                )}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default RedesSociais;
