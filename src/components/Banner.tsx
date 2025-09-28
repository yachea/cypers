import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Banner() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        pagination={{ type: 'fraction', clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src="/images/event_banner1.png" alt="이벤트배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/eventbanner2.png" alt="이벤트배너2" />
        </SwiperSlide>

        <div className="swiper-button-next">
          <img src="/images/right-arrow.png" alt="오른쪽화살표" />
        </div>
        <div className="swiper-button-prev">
          <img src="/images/left-arrow.png" alt="왼쪽화살표" />
        </div>
      </Swiper>

      <div className="wrap-img">
        <img src="/images/gamestart.png" alt="게임시작" />
      </div>
    </div>
  );
}

export default Banner;
