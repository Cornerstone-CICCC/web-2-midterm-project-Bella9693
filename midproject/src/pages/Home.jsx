import React, { useState } from "react";
import Movie from "../components/Movie";
import { dummy } from "../dummy/movieDummy";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Home = () => {
  return (
    <div className="home-newmovie">
      <Swiper
        autoHeight={true}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {dummy.results.map((item) => (
          <SwiperSlide key={item.id}>
            <Movie poster_path={item.backdrop_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
