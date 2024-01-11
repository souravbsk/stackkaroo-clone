import { Autoplay, Pagination } from 'swiper';
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination,Autoplay])

export default function ScreenshotsSlider() {
    return (
        <>
            <Swiper
                spaceBetween={150}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    900:{
                        slidesPerView: 1,
                        spaceBetween: 40, 
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                pagination={{
                    clickable: true,
                    el: '.js-pagination'
                }}
            >
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <img className='appSsimg' src="/img/StackkarooImg/AppScreenShot/appss1.png" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <img className='appSsimg' src="/img/StackkarooImg/AppScreenShot/appss2.png" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <img className='appSsimg' src="/img/StackkarooImg/AppScreenShot/appss3.png" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <img className='appSsimg' src="/img/StackkarooImg/AppScreenShot/appss4.png" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <img className='appSsimg' src="/img/StackkarooImg/AppScreenShot/appss5.png" alt="phone image" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="phone-slider-image">
                        <img src="/img/home-1/appScreens/iPhone-3.jpg" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <img src="/img/home-1/appScreens/iPhone-1.jpg" alt="phone image" />
                    </div>
                </SwiperSlide> */}

            </Swiper>
            <div className="pagination -slider -white  js-pagination"></div>
        </>
    )
}