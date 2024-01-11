import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const ClientLogo = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper clientLogoSlider logo-slide mt-24 z-1"
      >
        <SwiperSlide >

          <div className="  ">
            <div className="d-flex justify-center items-center px-4">
              <img
                className="clientLogo"

                src="/img/clients/img1.png"
                alt="clients image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="  ">
            <div className="d-flex justify-center items-center px-4">
              <img
                className="clientLogo"
                src="/img/clients/img6.png"
                alt="clients image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="  ">
            <div className="d-flex justify-center items-center px-4">
              <img
                className="clientLogo"
                src="/img/clients/img3.png"
                alt="clients image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="  ">
            <div className="d-flex justify-center items-center px-4">
              <img
                className="clientLogo"
                src="/img/clients/txg (2).png"
                alt="clients image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="  ">
            <div className="d-flex justify-center items-center px-4">
              <img
                className="clientLogo"
                src="/img/clients/img5.png"
                alt="clients image"
              />
            </div>
          </div>
        </SwiperSlide>




      </Swiper>
    </>
  );
};

export default ClientLogo;