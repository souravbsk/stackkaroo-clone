/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import * as Icon from "react-feather";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Head from 'next/head';
import { Swiper, SwiperSlide } from "swiper/react";
import ClientOne from "@/components/sections/homepage/ClientOne";
SwiperCore.use([Autoplay, Navigation, Pagination]);
function uiuxDesign() {
  const [active, setActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (active.key === key) {
      setActive({
        status: false,
      });
    } else {
      setActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>

      <Head>
        <title>Best ui ux design company in india 2023 | Stackkaroo</title>
        <meta name="description" content="Best ui ux design company in india are you looking for? Get ui ux design company in india, best ui ux design company in india and so on." />
        <meta name="keywords" content="Best ui ux design company in india, ui/ux design company in india,
ui ux design company in india,
best ui ux design company in india,
who best ui ux design company in india,
will ui ux design company in india,
is ui ux design company in india,
where ui ux design company in india,
how many best ui ux design company in india,
creative ui ux design company in india,
which best ui ux design company in india,
when ui ux design company in india,
how much best ui ux design company in india,
can ui ux design company in india,
ui & ux design company in india,
without ui ux design company in india,
how ui ux design company in india,
near ui ux design company in india,
what ui ux design company in india,
where best ui ux design company in india,
are ui ux design company in india" />
        <meta name="Stackkaroo" content="Best ui ux design company in india" />
      </Head>
      <Layout>
        <section className="page-header -base -">
          <div className="page-header__bg">
            <img
              className="initial-img"
              src="/img/page-header/bg-light.png"
              alt="Page header"
            />
          </div>
          <div className="page-header__content">
            <div className="row justify-center text-center mt-12">
              <div className="col-lg-9 col-md-10">
                <div>
                  <h1 className="page-header__title portfolio-heading ">
                    Best UI UX design company <br />  in India
                  </h1>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-10">
                <div className="px-20">
                  <p className="page-header__text mt-24">
                    The best UI UX design company in India: Delivering
                    Exceptional User Experiences{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row justify-center">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="row">
                  <div className="col-12 mb-40">
                    <img
                      src="/img/StackkarooImg/serviceimg/ui/banner.png"
                      alt="image"
                      className="initial-img serviceBanner"
                    />
                    <p className="mt-30">
                      The best UI UX design company in India is necessary for
                      all businesses to elevate their digital products and
                      create engaging user experiences. Stackkaroo is a premier
                      UI/UX design company offering unparalleled services to
                      transform your digital products and offer remarkable user
                      experiences. With our team of highly skilled designers and
                      a track record of excellence, we are the top choice for
                      businesses across various industries. We understand the
                      importance of creating visually captivating interfaces
                      that leave a lasting impression on users. Our designers
                      blend creativity, innovation, and technical expertise to
                      ensure your online presence stays ahead of the
                      competition. Our UI UX designing company in India focus on
                      user-centric design principles, and we create interfaces
                      that meet your customer’s needs and exceed their
                      expectations. From startups to established enterprises, we
                      offer our UI/UX design services to all businesses based on
                      their requirement. So choose our leading UI & UX design
                      company in India, Stackkaroo, and let us elevate your
                      digital products for delightful experiences.
                    </p>
                    {/* <div className="pt-30 y-gap-20">
                                    <div className="d-flex items-center">
                                        <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                            <Icon.Check className="icon size-14 text-black" />
                                        </div>
                                        <h5 className="text-lg fw-600">Installation Guide</h5>
                                    </div>
                                    <div className="d-flex items-center">
                                        <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                            <Icon.Check className="icon size-14 text-black" />
                                        </div>
                                        <h5 className="text-lg fw-600">Easy setup process</h5>
                                    </div>
                                    <div className="d-flex items-center">
                                        <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                            <Icon.Check className="icon size-14 text-black" />
                                        </div>
                                        <h5 className="text-lg fw-600">Live call support</h5>
                                    </div>
                                    <div className="d-flex items-center">
                                        <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                            <Icon.Check className="icon size-14 text-black" />
                                        </div>
                                        <h5 className="text-lg fw-600">Start a private group video call</h5>
                                    </div>
                                </div> */}
                  </div>
                  <div className="col-md-6">
                    <img
                      src="/img/StackkarooImg/serviceimg/app/img1.png"
                      alt="image"
                      className="initial-img"
                    />
                  </div>
                  <div className="col-md-6 sm:mt-30">
                    <img
                      src="/img/StackkarooImg/serviceimg/app/img2.png"
                      alt="image"
                      className="initial-img"
                    />
                  </div>
                  <h4 className="text-2xl mt-20 fw-600">Why choose us? </h4>
                  <div className="col-12 mt-20">
                    <div>
                      <h4 className="text-xl fw-600">
                        UI/UX design company in India with unparalleled
                        expertise
                      </h4>
                      <p className="mt-20">
                        The best UI UX design companies in India are what all
                        businesses try to look for when they need UI & UX design
                        services. Since UI UX design services are essential for
                        enhancing user experience, it has become a primary
                        requirement for businesses. Stackkaroo is a UI/UX design
                        company in India with unparalleled expertise in
                        developing visually stunning and fully functional user
                        interfaces. Partnering with our design company will
                        connect you with a team of skilled and creative
                        designers who excel in design principles and
                        user-centered strategies. With expertise in this field,
                        our professionals will help you ensure an exceptional
                        user experience from the project. We will efficiently
                        develop your project with high-quality results and
                        reduced time-to-market by employing proven
                        methodologies. Our nearby UI UX design company in India
                        will have a deep understanding of user-centered designs
                        and best practices. Thus, they focus on effectively
                        comprehending users' needs and preferences. By
                        incorporating usability testing, user flow mapping, and
                        responsive design, our designers create interfaces that
                        target respective audiences and provide positive user
                        experiences.
                      </p>
                    </div>
                    <div className="mt-20">
                      <h4 className="text-xl fw-600">
                        A comprehensive range of services: What UI UX design
                        companies in India can offer?{" "}
                      </h4>
                      <p className="mt-20">
                        If you are wondering who the best UI UX design company
                        in India is, look no further than our all-in-one
                        designing company, Stackkaroo. With a focus on quality,
                        we offer the best UI & UX design services that support
                        all modern businesses. Our services include branding,
                        user experience consulting, mobile app design, and
                        responsive web design. By combining creativity and the
                        latest technologies, we deliver stylish solutions that
                        provide a satisfying user experience. When it comes to
                        UI UX designing companies in India, Stackkaroo stays at
                        the top with its expertise and cutting-edge
                        technologies. We understand the value of corporate
                        branding and offer exceptional graphic designs that
                        showcase your brand's visual identity. Our expert
                        designers also provide wireframing services to determine
                        the structure of your website design. Whether you need a
                        complete interface overhaul or assistance in designing a
                        new product, our team is ready to help you. Thus, your
                        business can transform its digital presence by choosing
                        our UI UX design services.
                      </p>
                    </div>
                    <div className="mt-20">
                      <h4 className="text-xl fw-600">
                        Cutting-edge tools and technologies
                      </h4>
                      <p className="mt-20">
                        Choosing the best UI/UX design company in India can be a
                        game changer for your digital product. A leading UI/UX
                        development company utilizes industry-leading tools and
                        technologies to ensure precise design execution and
                        comprehensive testing. We at Stackkaroo will offer a
                        seamless collaboration process, enhancing the overall
                        user experience. With the ability to create wireframes,
                        interactive prototypes, and mockups using advanced
                        tools, our UI UX design company in India can bring your
                        vision to life. Working with experienced designers and
                        developers with advanced tools and technologies can make
                        the designing process effortless. Their attention to
                        detail in design execution, typography, color schemes,
                        and aligned elements will provide visually cohesive and
                        appealing user interfaces. Through usability tests, user
                        feedback sessions, and A/B testing, we will gather
                        valuable insights for validating design decisions and
                        ensuring optimal user experience. So if you are
                        wondering where to find a skilled UI/UX design company
                        in India with advanced tools and technologies, we,
                        Stackkaroo, are here to meet your expectations.
                      </p>
                    </div>
                    <div className="mt-20">
                      <h4 className="text-xl fw-600">
                        The best UI UX design company in India: Benefits
                      </h4>
                      <p className="mt-20">
                        Stackkaroo, a creative UI UX design company in India,
                        offers several benefits to data-driven platforms.
                        Starting with loading time optimization for decreasing
                        bounce rates and increasing performance, our experts at
                        Stackkaroo will provide efficient services until you
                        achieve your business goal. Furthermore, they will
                        enhance readability, making complex data easily
                        understandable for the users. A well-designed platform
                        quickly promotes customer loyalty by grabbing their
                        attention, building interest, and driving conversations.
                        Additionally, our data-first approach improves data
                        modeling, enabling more effective testing. So without a
                        reliable UI/UX design company in India, you will risk
                        missing out on the benefits that an effective design
                        could bring to your platform. Don't settle for less;
                        choose our service from Stackkaroo to design your
                        digital platforms with full potential. Staying ahead of
                        trends and anticipating the future needs of users will
                        help your business to stay at the top for a long time.
                        Overall, with its customized and efficient services,
                        Stackkaroo holds the top position among UI/UX design
                        companies in India.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mt-30 fw-600">FaQs</h4>
                    <div className="accordion -simple md:mt-24 js-accordion">
                      <div
                        className={
                          active.key == 1
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(1)}
                      >
                        <div className="accordion__button text-black">
                          <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                          </div>
                          <button className=" text-left text-lg md:text-base fw-600 text-black">
                            Which is the best UI/UX design company in India?
                          </button>
                        </div>
                        <div
                          className="accordion__content"
                          style={
                            active.key == 1
                              ? { maxHeight: 1000 }
                              : { maxHeight: 0 }
                          }
                        >
                          <div className="accordion__content__inner">
                            <p>
                              Stackkaroo is one the best UI/UX design company in
                              India and is committed to delivering exceptional
                              design services. Our team of skilled designers
                              creates captivating interfaces that provide an
                              excellent user experience. We focus on blending
                              aesthetics and functionality to meet your design
                              requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active.key == 2
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(2)}
                      >
                        <div className="accordion__button text-black">
                          <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                          </div>
                          <button className=" text-left text-lg md:text-base fw-600 text-black">
                            How much does it cost to hire the best UI/UX design
                            company in India?
                          </button>
                        </div>
                        <div
                          className="accordion__content"
                          style={
                            active.key == 2
                              ? { maxHeight: 1000 }
                              : { maxHeight: 0 }
                          }
                        >
                          <div className="accordion__content__inner">
                            <p>
                              The cost of hiring UI/UX design companies in India
                              varies between service providers. Stackkaroo
                              offers the best UI UX design services at a
                              reasonable price without hidden charges.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active.key == 3
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(3)}
                      >
                        <div className="accordion__button text-black">
                          <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                          </div>
                          <button className=" text-left text-lg md:text-base fw-600 text-black">
                            How many best UI/UX design companies are there in
                            India?
                          </button>
                        </div>
                        <div
                          className="accordion__content"
                          style={
                            active.key == 3
                              ? { maxHeight: 1000 }
                              : { maxHeight: 0 }
                          }
                        >
                          <div className="accordion__content__inner">
                            <p>
                              In India, you can find several UI/UX design
                              companies, but choosing a company that aligns with
                              your requirements is essential. Our UI UX design
                              services with customized solutions are a good
                              choice for everyone.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active.key == 4
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(4)}
                      >
                        <div className="accordion__button text-black">
                          <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                          </div>
                          <button className=" text-left text-lg md:text-base fw-600 text-black">
                            How are UI UX design companies in India helpful for
                            businesses?
                          </button>
                        </div>
                        <div
                          className="accordion__content"
                          style={
                            active.key == 4
                              ? { maxHeight: 1000 }
                              : { maxHeight: 0 }
                          }
                        >
                          <div className="accordion__content__inner">
                            <p>
                              UI/UX design companies in India are essential for
                              businesses in offering expert designs, increased
                              conversions, a competitive edge, cost efficiency,
                              and ongoing support.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active.key == 5
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(5)}
                      >
                        <div className="accordion__button text-black">
                          <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                          </div>
                          <button className="text-left text-lg md:text-base fw-600 text-black">
                            How does a UI UX design company in India helps
                            business stay updated?
                          </button>
                        </div>
                        <div
                          className="accordion__content"
                          style={
                            active.key == 5
                              ? { maxHeight: 1000 }
                              : { maxHeight: 0 }
                          }
                        >
                          <div className="accordion__content__inner">
                            <p>
                              UI/UX design companies help businesses stay
                              updated by following industry trends, conducting
                              user research, adopting iterative design
                              processes, implementing responsive designs, and
                              utilizing emerging technologies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 ">
                    <div className="mt-30">
                      <h4 className="text-xl fw-600">Conclusion </h4>
                      <p className="mt-20">
                        Stackkaroo is a top choice when looking for the best UI/UX design company in India. With unmatched expertise, a comprehensive range of services, advanced tools, and numerous benefits, we are dedicated to delivering exceptional user experiences. Choose Stackkaroo and elevate your digital products with our creative and efficient UI/UX design services in India.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 layout-pt-lg">
                    <GetInTouch></GetInTouch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layout-pt-lg layout-pb-BG section-bg-color">
          <div className="section-bg-color__item -wide bg-accent-light" />
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionHeading ">
                  <div className="sectionHeading__subtitle">
                    <span>Exclusive solutions just for you</span>
                  </div>
                  <h2 className="sectionHeading__title">You may also like</h2>
                </div>
              </div>
            </div>
            <div className="row y-gap-32 pt-60 sm:pt-40">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // loop={true}
                pagination={
                  { clickable: true }
                }
                // paginationOptions={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  breakpoints: {

                    320: {
                      autoplay: true,

                    },

                    575: {
                      autoplay: true,
                    },

                    900: {
                      autoplay: false,

                    },
                    1030: {
                      autoplay: false,
                    },
                    1199: {
                      autoplay: false,
                    },
                    1350: {
                      autoplay: false,
                    },

                  },
                }}

                navigation={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  575: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    autoplay: false,
                  },
                  1030: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    autoplay: false,
                  },
                  1199: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    autoplay: false,
                  },
                  1350: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    autoplay: false,
                  },
                }}
                className="swiper-wrapper serviceSlider pt-5"
              >
                <SwiperSlide className="swiper-slide">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-yellow-light">
                      <img
                        width={35}
                        height={35}
                        src="/img/StackkarooImg/service/soft.png"
                        alt="icon"
                      />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">
                      Software development
                    </h4>
                    <p className="mt-10">
                      There is no one universal solution in online marketing
                    </p>
                    <Link
                      href="/services/software-development"
                      className="button -simple text-accent fw-600 underline mt-12"
                    >
                      Discover Now
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-red-light">
                      <img
                        width={35}
                        height={35}
                        src="/img/StackkarooImg/service/web.png"
                        alt="icon" />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">Website development</h4>
                    <p className="mt-10">
                      There is no one universal solution in online marketing
                    </p>
                    <Link
                      href="/services/website-development"
                      className="button -simple text-accent fw-600 underline mt-12"
                    >
                      Discover Now
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                      <img
                        width={35}
                        height={35}
                        src="/img/StackkarooImg/service/app.png"
                        alt="icon" />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">App development</h4>
                    <p className="mt-10">
                      There is no one universal solution in online marketing
                    </p>
                    <Link
                      href="/services/app-development"
                      className="button -simple text-accent fw-600 underline mt-12"
                    >
                      Discover Now
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                      <img
                        width={35}
                        height={35}
                        src="/img/StackkarooImg/service/mail.png"
                        alt="icon" />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">Digital Marketing</h4>
                    <p className="mt-10">
                      Digital marketing services in India are something ...
                    </p>
                    <Link
                      href="/services/digital-marketing"
                      className="button -simple text-accent fw-600 underline mt-12"
                    >
                      Discover Now
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                      <img
                        width={35}
                        height={35}
                        src="/img/StackkarooImg/service/seo.png"
                        alt="icon" />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">SEO</h4>
                    <p className="mt-10">
                      SEO Website Optimization has to be one of the top ...
                    </p>
                    <Link
                      href="/services/seo"
                      className="button -simple text-accent fw-600 underline mt-12"
                    >
                      Discover Now
                    </Link>
                  </div>
                </SwiperSlide>

              </Swiper>


            </div>
          </div>
        </section>
        {/* clients */}
        <section className="layout-pt-sm sm:pt-0">
          <ClientOne />
        </section>
      </Layout>
    </>
  );
}

export default uiuxDesign;
