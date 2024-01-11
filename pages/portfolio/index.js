import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import * as Icon from "react-feather";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const PortfolioFilterOne = dynamic(
  () => import("@/components/portfolio/PortfolioFilterOne"),
  {
    ssr: false,
  }
);

export default function Portfolio1() {
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
    {/* reuse  */}
      <Head>
        <title>Portfolio || Stackkaroo</title>
      </Head>
      <Layout footerLayout={11}>
        <div>
        <section className="page-header -base -">
          <div className="page-header__bg">
            <img
              className="initial-img "
              src="/img/page-header/bg-light.png" z
              alt="Page header"
            />
          </div>
          <div className="page-header__content px-2">
            <div className="row justify-center text-center mt-12">
              <div className="col-lg-9 col-md-10">
                <div>
                <h1 className="page-header__title lh-14 text-3xl portfolio-heading sm:text-xl ">
                        Stackkaroo: Where businesses transform their digital
                        presence
                      </h1>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-10">
                <div className=" mt-10">
                <p className="page-header__text">
                        Welcome to Stackkaroo, where we revolutionize businesses
                        with our innovative digital solutions. As one of the
                        best web design and developer companies in India with a
                        team of professional app and website enthusiasts, we are
                        committed to delivering exceptional services. At
                        Stackkaroo, we take pride in our diverse portfolio of
                        successful projects in the realms of digital marketing,
                        web design and development, e-commerce solutions, and
                        web applications.
                      </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* <section className="page-header -text -">
            <div className="container">
              <div className="page-header__content">
                <div className="row justify-center text-center">
                  <div className="col-xl-8 col-lg-9 col-md-10">
                    <div>
                      <h1 className="page-header__title lh-14 text-3xl">
                        Stackkaroo: Where businesses transform their digital
                        presence
                      </h1>
                    </div>
                  </div>
                  <div className="" />
                  <div className="col-xl-9 mt-12  col-lg-9 col-md-10">
                    <div className="px-20">
                      <p className="page-header__text">
                        Welcome to Stackkaroo, where we revolutionize businesses
                        with our innovative digital solutions. As one of the
                        best web design and developer companies in India with a
                        team of professional app and website enthusiasts, we are
                        committed to delivering exceptional services. At
                        Stackkaroo, we take pride in our diverse portfolio of
                        successful projects in the realms of digital marketing,
                        web design and development, e-commerce solutions, and
                        web applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="container mt-60">
            <div>
            <h2 className="text-2xl">
            Our Portfolio 
            </h2>
            <p>Our extensive portfolio is a testament to our expertise and the successful outcomes we have delivered for clients across various industries. We have developed complex applications and websites for clients worldwide, showcasing our ability to tackle diverse challenges and deliver exceptional solutions.</p>
            </div>
            <div className="mt-20">
            <h2 className="text-2xl">
            Domain Expertise 
            </h2>
            <p>At Stackkaroo, our professional designers and developers have experience in various domains, including travel and hospitality, social networking, education, banking and finance, e-commerce, fantasy – gaming, and more. So regardless of your industry, whether a startup or an established enterprise, we can offer personalized and affordable solutions. </p>
            </div>
          </section>
          
        

          <section className="layout-pt-md layout-pb-sm">
            <h3 className="text-center sm:text-xxl text-3xl sm:mb-40 mb-60">Our Portfolio</h3>
            <div className="section-filter">
              <div className="container">
                <PortfolioFilterOne />
              </div>
            </div>
          </section>
          <section className="layout-pt-md layout-pb-sm">
            <div className="container">
              <div>
                <h1 className="page-header__title lh-14 sm:text-xxl text-center sm:mb-40 mb-60 text-3xl">
                  Our expertise
                </h1>
                <div className="accordion -bordered  js-accordion">
                
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
                      <button className="text-lg text-left md:text-base fw-600 text-black">
                        Web design and development
                      </button>
                    </div>
                    <div
                      className="accordion__content"
                      style={
                        active.key == 2 ? { maxHeight: 1000 } : { maxHeight: 0 }
                      }
                    >
                      <div className="accordion__content__inner">
                        <p>
                          We specialize in building responsive websites that
                          seamlessly adapt to various devices, ensuring optimal
                          user experiences across platforms. Stackkroo’s
                          innovative and customized approach to web designing
                          ensures your business' digital growth and success.
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
                      <button className="text-lg text-left md:text-base fw-600 text-black">
                        Custom app and software development
                      </button>
                    </div>
                    <div
                      className="accordion__content"
                      style={
                        active.key == 3 ? { maxHeight: 1000 } : { maxHeight: 0 }
                      }
                    >
                      <div className="accordion__content__inner">
                        <p>
                          You can expect nothing less other than the best from
                          our skilled team of app and software developers with
                          years of experience in this field. We can offer
                          personalized software solutions guaranteed to meet all
                          your unique business requirements.
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
                      <button className="text-lg text-left md:text-base fw-600 text-black">
                        SEO services
                      </button>
                    </div>
                    <div
                      className="accordion__content"
                      style={
                        active.key == 4 ? { maxHeight: 1000 } : { maxHeight: 0 }
                      }
                    >
                      <div className="accordion__content__inner">
                        <p>
                          Our SEO experts utilize proven strategies to improve
                          your website's search engine rankings and organic
                          traffic and drive valuable leads. We conduct effective
                          keyword research and optimize the website's content to
                          boost your business's online visibility.
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
                      <button className="text-lg text-left md:text-base fw-600 text-black">
                        Digital Marketing
                      </button>
                    </div>
                    <div
                      className="accordion__content"
                      style={
                        active.key == 5 ? { maxHeight: 1000 } : { maxHeight: 0 }
                      }
                    >
                      <div className="accordion__content__inner">
                        <p>
                          Our digital marketing service in India will ensure
                          your business’ growth by utilizing the expertise in
                          developing custom strategies for social media
                          marketing, content marketing, email marketing, and PPC
                          advertising. We will enhance your brand's visibility,
                          improve conversions, and foster user engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-md">
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionHeading ">
                    <h2 className="sectionHeading__title">
                      We help startups launch and succeed very fast
                    </h2>
                    <p className="sectionHeading__text mt-20">
                      We appreciate your trust greatly! Our clients choose us
                      and our products
                      <br className="md:d-none" /> because they know we are the
                      best.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="button -md -accent text-white mt-40 md:mt-30"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </section>
         
          {/* <div className="svg-shape">
                        <svg width={1920} height={60} viewBox="0 0 1920 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 30C0 13.4315 13.4315 0 30 0H1890C1906.57 0 1920 13.4315 1920 30V60H0V30Z" fill="#1A3454" />
                        </svg>
                    </div> */}
        </div>
      </Layout>
    </>
  );
}
