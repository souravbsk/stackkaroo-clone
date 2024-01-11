import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function TeamSliderOne() {
  const data = [
    { img: "1" },
    { img: "2" },
    { img: "3" },
    { img: "4" },
    { img: "5" },
    { img: "6" },
  ];
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
      
        pagination={true}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1.25,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1.25,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper teamSlider pt-5"
      >
        <SwiperSlide className="swiper-slide">
          <div className="wow animate__animated animate__fadeIn">
            <div className="ratio ratio-27:33">
              <img
                className="absolute-full-center object-fit-cover rounded-8"
                src="/img/StackkarooImg/team/img1.jpg"
                alt="Image"
              />
            </div>
            <div className="mt-20">
              <h4 className="text-xl fw-600">Sourav Gupta</h4>
              <p className="mt-4">Founder</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="wow animate__animated animate__fadeIn">
            <div className="ratio ratio-27:33">
              <img
                className="absolute-full-center object-fit-cover rounded-8"
                src="/img/StackkarooImg/team/img7.jpg"
                alt="Image"
              />
            </div>
            <div className="mt-20">
              <h4 className="text-xl fw-600">Chandan mishra </h4>
              <p className="mt-4">
            Co-founder
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="wow animate__animated animate__fadeIn">
            <div className="ratio ratio-27:33">
              <img
                className="absolute-full-center object-fit-cover rounded-8"
                src="/img/StackkarooImg/team/img2.png"
                alt="Image"
              />
            </div>
            <div className="mt-20">
              <h4 className="text-xl fw-600">Rabin karmakar</h4>
              <p className="mt-4">Team Leader and MERN Stack developer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="wow animate__animated animate__fadeIn">
            <div className="ratio ratio-27:33">
              <img
                className="absolute-full-center object-fit-cover rounded-8"
                src="/img/StackkarooImg/team/img6.JPEG"
                alt="Image"
              />
            </div>
            <div className="mt-20">
              <h4 className="text-xl fw-600">Muzammil Khan</h4>
              <p className="mt-4">MERN Stack Developer</p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="swiper-slide">
          <div className="wow animate__animated animate__fadeIn">
            <div className="ratio ratio-27:33">
              <img
                className="absolute-full-center object-fit-cover rounded-8"
                src="/img/StackkarooImg/team/img4.jpg"
                alt="Image"
              />
            </div>
            <div className="mt-20">
              <h4 className="text-xl fw-600">Sourav Basak</h4>
              <p className="mt-4">MERN Stack Developer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="wow animate__animated animate__fadeIn">
            <div className="ratio ratio-27:33">
              <img
                className="absolute-full-center object-fit-cover rounded-8"
                src="/img/StackkarooImg/team/img5.JPEG"
                alt="Image"
              />
            </div>
            <div className="mt-20">
              <h4 className="text-xl fw-600">Om tiwari</h4>
              <p className="mt-4">Business development executive </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
