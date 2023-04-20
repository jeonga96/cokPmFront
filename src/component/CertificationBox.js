import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CertificationBox() {
  const [click, setClick] = useState("");
  const [addItem, setAddItem] = useState("");
  const data = [
    {
      id: 1,
      link: "../assets/imgs/certificationBox_1.jpg",
      text: (
        <span>
          <span>벤처기업</span>
          <span>확인서</span>
        </span>
      ),
    },
    {
      id: 2,
      link: "../assets/imgs/certificationBox_2.jpg",
      text: (
        <span>
          <span>AI특허증</span>
        </span>
      ),
    },
    {
      id: 3,
      link: "../assets/imgs/certificationBox_3.jpg",

      text: (
        <span>
          <span>네트워크 시스템</span>
          <span>방어 특허증</span>
        </span>
      ),
    },
    {
      id: 4,
      link: "../assets/imgs/certificationBox_6.jpg",
      text: (
        <span>
          <span>국가 유공자</span>
          <span>표창 기업</span>
        </span>
      ),
    },
    {
      id: 5,
      link: "../assets/imgs/certificationBox_4.jpg",

      text: (
        <span>
          <span>이노비즈</span>
          <span>기업확인서</span>
        </span>
      ),
    },
    {
      id: 6,
      link: "../assets/imgs/certificationBox_5.jpg",
      text: (
        <span>
          <span>우수기업</span>
          <span>확인서</span>
        </span>
      ),
    },
  ];

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const onClick = (item, e) => {
    setAddItem(item);
    setClick(e.target.src);
  };

  return (
    <div className="PromotionAppScreenSliderBox box">
      {/* 이미지 확대 */}
      {click !== undefined && click !== "" && addItem !== "" && (
        <button
          onClick={() => {
            setAddItem("");
            setClick("");
          }}
          className={
            addItem.link.includes(click.slice(-5)) ? "zoomImg" : "noneImg"
          }
        >
          <img src={addItem.link} alt={addItem.text} />
        </button>
      )}

      <span
        className="font_content1 color_coral_text"
        style={{ textAline: "center", display: "block" }}
      >
        공사콕 인증서
      </span>
      <div className="PromotionAppScreenSliderContainer">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={3}
          pagination={{
            type: "fraction",
          }}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          loopadditionalslides={1}
        >
          {data &&
            data.map((item) => (
              <SwiperSlide onClick={(e) => onClick(item, e)} key={item.id}>
                <img src={item.link} alt={item.text} />
                <span className="font_content3 sliderText">{item.text}</span>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
