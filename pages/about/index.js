import ClientLogo from "@/components/elements/ClientLogo";
import Layout from "@/components/layout/Layout";
import ProjectSliderOne from "@/components/slider/ProjectSliderOne";
import TeamSliderOne from "@/components/slider/TeamSliderOne";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import * as Icon from "react-feather";

export default function About5() {
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
        <title>Top web development companies in India 2023 | Stackkaroo</title>
        <meta name="description" content="Top web development companies in India are you looking for? Get custom web app development services, custom web application development services and so on." />
        <meta name="keywords" content="top 10 web development companies in india, top web development companies in india, custom web development services, custom web app development services, custom web application development services, top software development companies in india, top 10 software development companies in Agartala , best wordpress developer in Tripura, low cost web design in Agartala, freelance web designer in Tripura, top 10 software development companies in Odisha , best wordpress developer in Cuttack, low cost web design in Odisha, freelance web designer in Cuttack, low cost web design in Inda, Top Web Development Company in India, top 10 web development companies in india" />
        <meta name="Stackkaroo" content="Top web development companies in India" />
      </Head>
      <Layout
        headerLayout={1}
        footerLayout={6}
        navColor="text-white" // text-white, "" (blank is default dark)
        logo="logo-flat" // logo, logo-flat, logo-5
      >
        <div>
          <section className="page-header -image -  about-img">
            <div className="page-header__bg overlay-black-50 z-index--1">
              <img
                className="initial-img"
                src="/img/StackkarooImg/AboutUs/aboutus-banner.png"
                alt="Page header"
              />
            </div>
            <div className="container">
              <div className="page-header__content">
                <div className="row justify-between items-center md:justify-center md:text-center">
                  <div className="col-lg-6 col-md-10">
                    <h1 className="page-header__title lh-14 text-white">
                      Let Us Introduce Ourselves
                    </h1>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-10">
                    <div className="px-20">
                      <p className="page-header__text text-white opac-80">
                        We take pride in being one of the{" "}
                        <b>top 10 web development companies in India.</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* clients */}
          <section className="layout-pt-md layout-pb-sm">
            <div className="container">
              <div className="row justify-center">
                <div className="col ">
                  <p className="text-lg text-dark-1">
                    Stackkaroo is one of the top web development companies in
                    India that focuses on providing custom web application
                    development services to their clients. Since the beginning
                    of its foundation, Stackkaroo has worked hard to serve its
                    clients the best custom web app development services. Today
                    Stackkaroo stands among the top software development
                    companies in India with some eminent partners who have
                    trusted Stakkaroo in its initial days and encouraged it to
                    come such a long way.
                  </p>
                  <br />
                  <p className="text-lg text-dark-1">
                    As a top web development company in India, we offer the
                    entire stack of services required to build our clients'
                    applications, website and therefore, their businesses. Our
                    custom web development services include mobile application
                    development, software prototyping, software testing,
                    maintenance and support, cloud consulting, DevOps
                    automation, quality assurance testing, system integration,
                    and UI/UX design service. We also assure our clients with
                    SEO and Digital marketing services.{" "}
                  </p>
                  <br></br>
                  <p className="text-lg text-dark-1">
                    Dealing with complex and obscure projects has always been
                    our forte. We understand that starting a business is a
                    daunting task in itself. A client may have an ambiguous
                    vision about technical complications. Our specialized team
                    brings out a clear concept and presents the best outcome
                    through their skills.{" "}
                  </p>
                  <br></br>
                  <p className="text-lg text-dark-1">
                    The client's feedback is our motivation, and the client's
                    success is our success. If any of our clients feel that we
                    are failing to meet their expectations, we take it as a
                    constructive lesson and work hard to satisfy them.
                    Thankfully, our clients have helped us to grow from scratch.{" "}
                  </p>
                </div>
              </div>

              {/* <div className="row y-gap-32 justify-between items-center mt-24">
                <div className="col-lg-auto col-md-auto col-4">
                  <div className="d-flex justify-center items-center px-4">
                    <img
                   className="clientLogo"
                      
                      src="/img/clients/img1.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="col-lg-auto col-md-auto col-4">
                  <div className="d-flex justify-center items-center px-4">
                    <img
                     className="clientLogo"
                      src="/img/clients/img2.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="col-lg-auto col-md-auto col-4">
                  <div className="d-flex justify-center items-center px-4">
                    <img
                    className="clientLogo"
                     src="/img/clients/img3.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="col-lg-auto col-md-auto col-4">
                  <div className="d-flex justify-center items-center px-4">
                    <img
                     className="clientLogo"
                      src="/img/clients/img4.png"
                      alt="clients image"
                    />
                  </div>
                </div>
                <div className="col-lg-auto col-md-auto col-4">
                  <div className="d-flex justify-center items-center px-4">
                    <img
                      className="clientLogo"
                       src="/img/clients/img5.png"
                      alt="clients image"
                    />
                  </div>
                </div>
        
              </div> */}
            </div>
          </section>
          <section className="layout-pt-md layout-pb-sm" >
            <div className="container">
              <p className="text-xl text-dark-1  text-center">
                Trusted by the worlds best
              </p>
              <ClientLogo></ClientLogo>

            </div>
          </section>
          <section className="layout-pt-md layout-pb-sm">
            <div className="container">
              <div className="row y-gap-48 justify-between items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="atropos -no-shadow js-atropos">
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner">
                          <div className="image-group -type-2">
                            <img
                              data-atropos-offset={-5}
                              src="/img/about-1/about/pattern.png"
                              alt="image"
                            />
                            <img
                              data-atropos-offset={0}
                              className="shadow-card rounded-8"
                              src="/img/StackkarooImg/AboutUs/it-soluation1.png"
                              alt="image"
                            />
                            <img
                              data-atropos-offset={5}
                              className="shadow-card rounded-8 it-solution-second-img"
                              src="/img/StackkarooImg/serviceimg/ui/img2.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="wow animate__animated animate__fadeIn">
                    <div className="sectionHeading ">
                      <h2 className="sectionHeading__title">
                        What Makes Our Team Unique
                      </h2>
                      <p className="sectionHeading__text mt-20">
                        At Stackkaroo, we do not just provide web development
                        services; we solve problems for our dear clients. We
                        serve what we promise. Transparency, communication,
                        client superiority and timeline- we never compromise
                        with these four things. <br />
                        Stackkaroo is not just a company; we are a family. We
                        value our employees just like we value our clients.
                        Stackkaroo promotes healthy work culture and a positive
                        environment. We respect the importance of work-life
                        balance for every employee.
                      </p>
                    </div>
                  </div>
                  <div className="mt-24 y-gap-20">
                    <div className="d-flex items-center">
                      <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                        <Icon.Check className="icon size-14 text-black" />
                      </div>
                      <h5 className="text-lg fw-600">Diverse Expertise</h5>
                    </div>
                    <div className="d-flex items-center">
                      <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                        <Icon.Check className="icon size-14 text-black" />
                      </div>
                      <h5 className="text-lg fw-600"> Collaborative Culture</h5>
                    </div>
                    <div className="d-flex items-center">
                      <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                        <Icon.Check className="icon size-14 text-black" />
                      </div>
                      <h5 className="text-lg fw-600">Adaptability</h5>
                    </div>
                    <div className="d-flex items-center">
                      <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                        <Icon.Check className="icon size-14 text-black" />
                      </div>
                      <h5 className="text-lg fw-600">Customer-Centric Focus</h5>
                    </div>
                    <div className="d-flex items-center">
                      <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                        <Icon.Check className="icon size-14 text-black" />
                      </div>
                      <h5 className="text-lg fw-600">
                        Innovation and Creativity
                      </h5>
                    </div>
                    <div className="d-flex items-center">
                      <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                        <Icon.Check className="icon size-14 text-black" />
                      </div>
                      <h5 className="text-lg fw-600">
                        Positive and Supportive Environment
                      </h5>
                    </div>
                  </div>
                  <div className="wow animate__animated animate__fadeIn">
                    <Link
                      href="/contact"
                      className="button -md -dark text-white rounded-8 mt-40"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* numbers */}
          {/* <section className="layout-pt-lg layout-pb-lg section-bg-color">
            <div className="section-bg-color__item rounded-8">
              <div
                className="rounded-8 bg-image js-lazy"
                style={{ backgroundImage: 'url("/img/about-5/blue/bg.png")' }}
              />
            </div>
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="sectionHeading -light">
                    <h2 className="sectionHeading__title">
                      Forming strong and trusted connections with our clients
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row y-gap-48 pt-60">
                <div className="col-lg-3 col-6">
                  <div className="text-center">
                    <div className="text-50 text-white fw-700">28k</div>
                    <h5 className="text-white text-lg">Projects</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="text-center">
                    <div className="text-50 text-white fw-700">100+</div>
                    <h5 className="text-white text-lg">Locations</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="text-center">
                    <div className="text-50 text-white fw-700">120%</div>
                    <h5 className="text-white text-lg">Growth</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="text-center">
                    <div className="text-50 text-white fw-700">22k</div>
                    <h5 className="text-white text-lg">Customers</h5>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="layout-pt-md layout-pb-sm">
            <div className="container">
              <div className="row y-gap-16 justify-between items-center">
                <div className="col-md-6">
                  <div className="sectionHeading ">
                    <h2 className="sectionHeading__title">Our Services</h2>
                  </div>
                </div>
                <div className="col-md-auto">
                  <Link
                    href="/contact"
                    className="button -simple text-accent text-16 fw-600"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
              <div
                className="sectionSlider relative pt-60 md:pt-40 js-sectionSlider"
                data-cursor-slider="slider"
                data-gap={30}
                data-slider-col="base-3 lg-3 md-2 sm-1"
                data-scrollbar
              >
                <ProjectSliderOne />
              </div>
            </div>
          </section>
          <section className="layout-pt-md layout-pb-sm">
            <div className="container-fluid px-0 md:container md:px-20">
              <div className="row x-gap-60 y-gap-48 ">
                <div className="col-xl-6 col-lg-5">
                  <div>
                    <img
                      className="initial-img border  rounded-8"
                      src="/img/StackkarooImg/serviceimg/seo/img2.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-xl-6  col-lg-5">
                  <div className="sectionHeading ">
                    <h2 className="sectionHeading__title sm:text-2xl text-3xl">
                      Digital Marketing
                    </h2>
                    <p className="sectionHeading__text mt-20">
                      Work, Location, Clients, Experience
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-12 text-2xl">FAQ</h4>
                    <div className="accordion -bordered mt-20 js-accordion">
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
                          <button className="text-lg text-left md:text-base fw-600 text-black">
                            1. What are the minimum days taken to finish a
                            project?
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
                              A. As we work from scratch to create a masterpiece,
                              please trust us with only 14 days of your valuable
                              time. .
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
                          <button className="text-lg text-left md:text-base fw-600 text-black">
                            2. What does the cheapest package include?
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
                              A. We believe in helping. Therefore, our cheapest
                              package includes all the essential services required
                              to create a website or application. You can always
                              negotiate your budget with us.
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
                            3. When is the right time to contact us?
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
                              A. We do not have any right time. Feel free to send
                              your queries anytime. Email us whenever you want;
                              our email service is open 24 hours. You can call us
                              directly on business days at business hours..
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
                            4. Who do we work with?
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
                              A. We are glad to tell you that we work with every
                              business type. Be it a hospital or a restaurant
                              business. Our team has an array of business models
                              to discuss with you.
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
                            5. Do we care about the environment?
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
                              A. We do not have any right time. Feel free to send
                              your queries anytime. Email us whenever you want;
                              our email service is open 24 hours. You can call us
                              directly on business days at business hours..
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team */}
          <section className="layout-pt-md layout-pb-sm">
            <div className="container">
              <div className="row justify-center">
                <div className="col text-center">
                  <div className="sectionHeading ">
                    <div className="sectionHeading__subtitle">
                      <span>team</span>
                    </div>
                    <h2 className="sectionHeading__title">Our Dynamic Team</h2>
                  </div>
                </div>
              </div>
              <div
                className="sectionSlider overflow-hidden pt-12 js-sectionSlider"
                data-cursor-slider="slider"
                data-gap={30}
                data-slider-col="base-4 lg-3 md-2 sm-1"
                data-pagination
              >
                <div >
                  <TeamSliderOne />
                </div>
                {/* <div className="pagination -slider mt-60 js-pagination" /> */}
              </div>
            </div>
          </section>
          <section className="layout-pt-sm">
            <div className="container">
              <div className="row  justify-between items-center">
                <div className="accordion -bordered  js-accordion">
                  <div
                    className={
                      active.key == 6
                        ? "accordion__item is-active"
                        : "accordion__item"
                    }
                    onClick={() => handleToggle(6)}
                  >
                    <div className="accordion__button text-black">
                      <div className="accordion__icon">
                        <Icon.Plus className="icon" />
                        <Icon.Minus className="icon" />
                      </div>
                      <button className="text-lg md:text-base fw-600 text-black">
                        Our Strength
                      </button>
                    </div>
                    <div
                      className="accordion__content"
                      style={
                        active.key == 6 ? { maxHeight: 1000 } : { maxHeight: 0 }
                      }
                    >
                      <div className="accordion__content__inner">
                        <p>
                          A company cannot grow without its employees and
                          clients. Our strength is our skilled employees and
                          satisfied clients. Positive attitude, compassion,
                          reliability and trust is our strength. We have the
                          best Wordpress developer in Tripura at our Tripura
                          office. If you look at our Odisha office, you will
                          find the best WordPress developer in Cuttack working
                          with us.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      active.key == 7
                        ? "accordion__item is-active"
                        : "accordion__item"
                    }
                    onClick={() => handleToggle(7)}
                  >
                    <div className="accordion__button text-black">
                      <div className="accordion__icon">
                        <Icon.Plus className="icon" />
                        <Icon.Minus className="icon" />
                      </div>
                      <button className="text-lg md:text-base fw-600 text-black">
                        Our Mission
                      </button>
                    </div>
                    <div
                      className="accordion__content"
                      style={
                        active.key == 7 ? { maxHeight: 1000 } : { maxHeight: 0 }
                      }
                    >
                      <div className="accordion__content__inner">
                        <p>
                          To satisfy our clients is our only mission. Our team
                          works does not only work hard but also works smartly.
                          Our innovative approach toward every client ensures
                          that their application stands out in the crowd. We aim
                          to provide only the best of our efforts to give the
                          best results. We offer the best technical business
                          models keeping the client's priority at the top. We
                          intend to reach out to every client beyond the
                          boundary of the high budget. Hence, we offer low cost
                          web design in India.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      active.key == 8
                        ? "accordion__item is-active"
                        : "accordion__item"
                    }
                    onClick={() => handleToggle(8)}
                  >
                    <div className="accordion__button text-black">
                      <div className="accordion__icon">
                        <Icon.Plus className="icon" />
                        <Icon.Minus className="icon" />
                      </div>
                      <button className="text-lg md:text-base fw-600 text-black">
                        Our Vision
                      </button>
                    </div>
                    <div
                      className="accordion__content"
                      style={
                        active.key == 8 ? { maxHeight: 1000 } : { maxHeight: 0 }
                      }
                    >
                      <div className="accordion__content__inner">
                        <p>
                          We visualize only the success of our clients. We
                          believe that we can succeed at our work only if our
                          client succeeds in their businesses. Our vision is to
                          help our clients grow their businesses at every level
                          and maintain the safety of their websites and
                          applications. As one of the top 10 software
                          development companies in Odisha, we upgrade our skills
                          with the latest technologies to do our best.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      active.key == 9
                        ? "accordion__item is-active"
                        : "accordion__item"
                    }
                    onClick={() => handleToggle(9)}
                  >
                    <div className="accordion__button text-black">
                      <div className="accordion__icon">
                        <Icon.Plus className="icon" />
                        <Icon.Minus className="icon" />
                      </div>
                      <button className="text-lg md:text-base fw-600 text-black">
                        Our Core Values
                      </button>
                    </div>
                    <div
                      className="accordion__content"
                      style={
                        active.key == 9 ? { maxHeight: 1000 } : { maxHeight: 0 }
                      }
                    >
                      <div className="accordion__content__inner">
                        <p>
                          We value our clients' projects as our projects. We do
                          our best to make each project successful. Our team
                          works tirelessly and passionately to understand our
                          client's core message and intentions. We value the
                          criteria of our clients and try to reach the maximum
                          target audience. Our flexible business models help
                          businesspeople to prosper in their businesses. We
                          believe that a business model is crucial to initiate a
                          successful business. Money is a significant factor
                          here. Therefore, we offer low cost web design in
                          Agartala so that every businessperson can reach out to
                          us. We provide the same low cost web design in Odisha
                          for small business owners.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
