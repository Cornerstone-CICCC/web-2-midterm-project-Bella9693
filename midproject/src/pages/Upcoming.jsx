import React, { useRef, useState } from "react";
import { comingdummy } from "../dummy/comingDummy";
import Coming from "../components/Coming";

// Swiper import
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Upcoming = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(20);
  const prependNumber = useRef(1);
  const [slides, setSlides] = useState(
    Array.from({ length: 20 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <div className="upcoming">
      <div className="upcoming-wrapper">
        <h2>Upcoming Releases</h2>
        <div className="comingmovies card-container"></div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={setSwiperRef}
        spaceBetween={10} // 슬라이드 간격
        centeredSlides={false} // 중앙 정렬 해제
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1250: { slidesPerView: 7 }, // 1250px 이상
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          600: { slidesPerView: 3 },
          0: { slidesPerView: 2 },
        }}
      >
        {comingdummy.results.map((item) => (
          <SwiperSlide key={item.id}>
            <Coming
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              release_date={item.release_date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Upcoming;
