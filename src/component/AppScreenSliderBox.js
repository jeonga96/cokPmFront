import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PromotionAppScreenSliderBox() {
  const [click, setClick] = useState("");
  const [addItem, setAddItem] = useState("");
  const data = [
    {
      link: "../assets/imgs/promotion_appScreen_slide1.jpg",
      text: "견적의뢰서 작성",
    },
    {
      link: "../assets/imgs/promotion_appScreen_slide2.gif",
      text: "견적서 받기",
    },
    {
      link: "../assets/imgs/promotion_appScreen_slide3.gif",
      text: "이용자 리뷰",
    },
    {
      link: "../assets/imgs/promotion_appScreen_slide4.gif",
      text: "긴급/당일/예약 분류",
    },
    {
      link: "../assets/imgs/promotion_appScreen_slide5.gif",
      text: "위치기반 업체 추천",
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
        공사에 대한 고민을 함께합니다.
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
            data.map((item, key) => (
              <SwiperSlide onClick={(e) => onClick(item, e)} key={key}>
                <img src={item.link} alt={item.text} />
                <span className="font_content3">{item.text}</span>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
