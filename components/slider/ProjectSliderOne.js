import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Icon from "react-feather";

export default function ProjectSliderOne() {
  const data = [
    {
      title: "App Development",
      img: "1.jpg",
      desc: "",
    },
    {
      title: "",
      img: "2.jpg",
      desc: " ",
    },
    {
      title: "",
      img: "3.jpg",
      desc: " ",
    },
    {
      title: "UI/UX Design",
      img: "4.jpg",
      desc: "",
    },
    {
      title: "SEO",
      img: "1.jpg",
      desc: "",
    },
    {
      title: "",
      img: "2.jpg",
      desc: "",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          prevEl: ".js-prev",
          nextEl: ".js-next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper z-1"
      >
          <SwiperSlide className="swiper-slide aboutService">
            <div className="atropos -no-shadow js-atropos">
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <div className="relative w-1/1">
                      
                        <div
                          className="ratio ratio-3:4 aboutServiceBG bg-image rounded-8 js-lazy"
                          style={{
                            backgroundImage: `url(/img/StackkarooImg/serviceimg/app/banner.png)`,
                          }}
                        />
                        <div className="absolute-full-center gradient-content rounded-8" />
                    
                      <div className="absolute-full-center aboutService-content d-flex items-end py-30 px-30 pr-48">
                        <div data-atropos-offset={6} className="services">
                          <h4 className="text-2xl projectslide-text fw-600 sm:text-2xxl text-white services-head">
                          App Development
                          </h4>
                          <p className="text-white mt-8 services-desc">
                          Trust our team to get the best application for your new business to reach more viewers. Our skilled developers ensure the perfect ready-to-navigate application to increase your business. The enhanced features make users easy to understand your application and message.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide aboutService">
            <div className="atropos -no-shadow js-atropos">
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <div className="relative w-1/1">
                      
                        <div
                          className="ratio ratio-3:4 aboutServiceBG bg-image rounded-8 js-lazy"
                          style={{
                            backgroundImage: `url(/img/StackkarooImg/serviceimg/soft/banner.png)`,
                          }}
                        />

                        <div className="absolute-full-center gradient-content rounded-8" />
                    
                      <div className="absolute-full-center aboutService-content d-flex items-end py-30 px-30 pr-48">
                        <div data-atropos-offset={6} className="services">
                          <h4 className="text-2xl projectslide-text fw-600 sm:text-2xxl text-white services-head">
                          Software Development
                          </h4>
                          <p className="text-white mt-8 services-desc">
                          You can rest your worries at our doorstep, and we will brush them off with our top-notch software development services. We make sure that your software is market-ready and never face any unfortunate disaster. We are among the top 10 software development companies in Agartala.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide aboutService">
            <div className="atropos -no-shadow js-atropos">
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <div className="relative w-1/1">
                      
                        <div
                          className="ratio ratio-3:4 aboutServiceBG bg-image rounded-8 js-lazy"
                          style={{
                            backgroundImage: `url(/img/StackkarooImg/serviceimg/web/banner.png)`,
                          }}
                        />

                        <div className="absolute-full-center gradient-content rounded-8" />
                    
                      <div className="absolute-full-center aboutService-content d-flex items-end py-30 px-30 pr-48">
                        <div data-atropos-offset={6} className="services">
                          <h4 className="text-2xl projectslide-text fw-600 sm:text-2xxl text-white services-head">
                          Web Development
                          </h4>
                          <p className="text-white mt-8 services-desc">
                          With our top-notch cloud consulting services, DevOps automation, quality assurance testing, and system integration, we do not have to worry about your website. Attractive features and pleasing layouts are our thing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide aboutService">
            <div className="atropos -no-shadow js-atropos">
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <div className="relative w-1/1">
                      
                        <div
                          className="ratio ratio-3:4 aboutServiceBG bg-image rounded-8 js-lazy"
                          style={{
                            backgroundImage: `url(/img/StackkarooImg/serviceimg/ui/banner.png)`,
                          }}
                        />

                        <div className="absolute-full-center gradient-content rounded-8" />
                    
                      <div className="absolute-full-center aboutService-content d-flex items-end py-30 px-30 pr-48">
                        <div data-atropos-offset={6} className="services">
                          <h4 className="text-2xl projectslide-text fw-600 sm:text-2xxl text-white services-head">
                          UI/UX Design
                          </h4>
                          <p className="text-white mt-8 services-desc">
                          Oh, are you worried about the design? Dear client, our team has one of the best designers in the town. Yes, and they are upgraded with the latest skills. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide aboutService">
            <div className="atropos -no-shadow js-atropos">
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <div className="relative w-1/1">
                      
                        <div
                          className="ratio ratio-3:4 aboutServiceBG bg-image rounded-8 js-lazy"
                          style={{
                            backgroundImage: `url(/img/StackkarooImg/serviceimg/seo/banner.png)`,
                          }}
                        />

                        <div className="absolute-full-center gradient-content rounded-8" />
                    
                      <div className="absolute-full-center aboutService-content d-flex items-end py-30 px-30 pr-48">
                        <div data-atropos-offset={6} className="services">
                          <h4 className="text-2xl projectslide-text fw-600 sm:text-2xxl text-white services-head">
                          SEO
                          </h4>
                          <p className="text-white mt-8 services-desc">
                          With our best SEO team, you can be assured that your website appears on the first page of the search results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide aboutService">
            <div className="atropos -no-shadow js-atropos">
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <div className="relative w-1/1">
                      
                        <div
                          className="ratio ratio-3:4 aboutServiceBG bg-image rounded-8 js-lazy"
                          style={{
                            backgroundImage: `url(/img/StackkarooImg/serviceimg/digital/banner.png)`,
                          }}
                        />

                        <div className="absolute-full-center gradient-content rounded-8" />
                    
                      <div className="absolute-full-center aboutService-content d-flex items-end py-30 px-30 pr-48">
                        <div data-atropos-offset={6} className="services">
                          <h4 className="text-2xl projectslide-text fw-600 sm:text-2xxl text-white services-head">
                          Digital Marketing
                          </h4>
                          <p className="text-white mt-8 services-desc">
                          We ensure our clients that they will reach their target audience. Our digital marketing team does everything you need to market your business successfully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
      <div className="nav -slider slider-button z-5 px-30 sm:justify-center  justify-end md:pt-60 sm:pt-40">
        <div className="nav__item -left js-prev">
          <Icon.ArrowLeft className="icon" />
        </div>
        <div className="nav__item -right ml-20 js-next">
          <Icon.ArrowRight className="icon" />
        </div>
      </div>
      {/* <div className="scrollbar -slider mt-60 md:mt-40 js-scrollbar" /> */}
  </>
  );
}
