import React from 'react';

function Banner() {
  return (
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="http://www.grinmydesign.com/cypers/images/event_banner1.png"
              alt="이벤트배너"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="http://www.grinmydesign.com/cypers/images/eventbanner2.png"
              alt="이벤트배너2"
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next">
          <img src="http://www.grinmydesign.com/cypers/images/right-arrow.png" alt="오른쪽화살표" />
        </div>
        <div className="swiper-button-prev">
          <img src="http://www.grinmydesign.com/cypers/images/left-arrow.png" alt="왼쪽화살표" />
        </div>
        <div className="wrap-img">
          <img src="http://www.grinmydesign.com/cypers/images/gamestart.png" alt="게임시작" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
