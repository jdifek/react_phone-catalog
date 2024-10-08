import React from 'react';

import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './pagination.scss';

export const HomeCarousel = () => {
  return (
    <>
      <h1 className="carousel-home--text">Welcome to Nice Gadgets store!</h1>

      <div className="carousel--slider">
        <img
          className="carousel--slider--first-button"
          src="./img/Buttons_Slider button - Default (right) (1).svg"
          alt="button"
        />
        <Swiper
          modules={[Pagination, A11y, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: '.carousel--slider--first-button',
            nextEl: '.carousel--slider--second-button',
          }}
          simulateTouch={false}
          allowTouchMove={false}
        >
          <SwiperSlide>
            <img
              className="carousel--slider__first"
              src="./img/slider-first-photo.png"
              alt="Menu"
            />
            <img
              className="carousel--slider-banner"
              src="./img/Banner.png"
              alt="Menu"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="carousel--slider__second"
              src="./img/slider-second-photo.webp"
              alt="Menu"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="carousel--slider__third"
              src="./img/slider-third-photo.jpg"
              alt="Menu"
            />
          </SwiperSlide>
        </Swiper>
        <img
          className="carousel--slider--second-button"
          src="./img/Buttons_Slider button - Default (right) (2).svg"
          alt="button"
        />
      </div>
    </>
  );
};
