import GetInTouch from '@/components/GetInTouch/GetInTouch';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import * as Icon from 'react-feather';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Head from 'next/head';

import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay, Navigation, Pagination]);
export default function ServicesSingle() {
    return (
        <>
            <Layout>
                <section className="page-header -base -">
                    <div className="page-header__bg">
                        <img className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                    </div>
                    <div className="page-header__content">
                        <div className="row justify-center text-center">
                            <div className="col-lg-9 col-md-10">
                                <div>
                                    <h1 className="page-header__title text-3xl lh-12">Best IT sector in India for empowering digital transformation with exceptional website design service </h1>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-9 col-md-10">
                                <div className="px-20">
                                    <p className="page-header__text">With we want to optimize the customization process so your team can save time when building websites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="layout-pt-lg layout-pb-lg">
                    <div className="container">
                        <div className="row justify-center">
                            <div className="col-xl-8 col-lg-9 col-md-11">
                                <div className="row">
                                    <div className="col-12 mb-40">
                                        <img src="/img/services/4/1.jpg" alt="image" className="initial-img" />
                                        <p className="mt-30">
                                        Best IT sector in India, Stackkaroo offers top-notch website and software development solutions and an extensive range of UI/UX design services. With years of experience, we have built strong relationships with numerous businesses. Our tailored web solutions are guaranteed to meet the unique requirements of different businesses. We understand that your website serves as an important hub for your online marketing strategy, and our customized solutions will help you reach higher goals. At Stackkaroo, we continuously research and observe customer needs to provide futuristic solutions that generate more conversions. As a renowned web design and custom software development company in India, Stackkaroo offers a comprehensive range of services, including UI/UX design, custom software development, mobile app development, and responsive website development. Our team of experts is dedicated to providing cutting-edge solutions that empower your digital transformation journey. Our wide range of web and app development solutions ensures that your online presence remains ahead of the competition. Choose Stackkaroo as your trusted IT partner, and experience exceptional services that meet your immediate needs and future-proof your business. 
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
                                        <img src="/img/services/4/2.jpg" alt="image" className="initial-img" />
                                    </div>
                                    <div className="col-md-6 sm:mt-30">
                                        <img src="/img/services/4/3.jpg" alt="image" className="initial-img" />
                                    </div>
                                    <h3 className='text-2xl mt-20'>Our services: Best IT sector in India </h3>
                                    <div className="col-12 mt-20">
                                        <div>
                                            <h4 className="text-xl fw-600">UI/UX design for enhancing user experience </h4>
                                            <p className="mt-20">
                                            At Stackkaroo, the best IT sector in India, we recognize the significance of good design in achieving digital success. Our team understands the needs of modern businesses and enterprises, and we specialize in delivering our customers unique, appealing, and pleasant designs. As one of the best UI/UX design companies in India, we offer a comprehensive range of services encompassing branding, user experience consulting, responsive web design, and many others. Our experts at Stackkaroo employ proven design, product validation, and prototyping approaches. With our UI UX design services, we aim to create applications that users truly enjoy interacting with. We seamlessly integrate into the software development process, collaborating closely with the development team to ensure the most convenient and intuitive digital products. Our UX and UI services cater to Web, iOS, and Android platforms. From complex B2B solutions to consumer apps, our expertise spans diverse businesses. We are also experienced in designing solutions for modern technologies like VR and AR. 
                                                </p>
                                        </div>
                                        <div className="mt-30">
                                            <h4 className="text-xl fw-600">Custom software and app development for your business </h4>
                                            <p className="mt-20">
                                            We understand that each business will have unique requirements and goals and require different software or apps. That is why we offer our clients custom software and app development services to meet their personalized business needs. As a leading custom mobile app development company in India, we are experienced in developing software and apps for numerous services, including e-commerce, healthcare, fantasy, etc. We will assist you in selecting the right technology stack, ensuring you make informed decisions before starting the project. Our custom software application development solutions will clearly understand your business and include key features in software and apps for better performance. We follow a full-cycle development process, from market research and business analysis to development, deployment, and post-launch maintenance. With experience from many IT projects across various industries, Stackkaroo stands as the best IT sector in India for delivering powerful software solutions for businesses of any size. We prioritize effective communication, risk management and security, and our quality-first approach ensures tangible business value. In addition to custom software development, we also offer custom web development solutions that accelerate workflows, boost revenues, and optimize business operations. Our team devises an in-depth development process, including software implementation and deployment plans, to deliver an enhanced user experience for end-users. We also specialize in developing reliable APIs that enable flexible integrations and customization of existing software products.
                                                </p>
                                        </div>
                                        <div className="mt-30">
                                            <h4 className="text-xl fw-600">
                                            Responsive website development for optimizing user accessibility 
                                                </h4>
                                            <p className="mt-20">
                                            You rely on Stackkaroo for the best responsive website development services in India. In this era of evolving technologies, people visit websites on different devices like mobiles, PCs, and tabs. Thus, it is an important requirement for all businesses to have a website that adapts to different devices and screen sizes perfectly. With our expert web development service, your website will look visually appealing and load quickly at work at its full potential. We understand the need to create a website that leaves a lasting impression on visitors. Since our web developers have expertise working with various business organizations, they can easily identify your business needs and develop a website accordingly. By choosing our responsive web development service, we guarantee it will work perfectly, providing an optimized browsing experience. Whether you need to upgrade your existing site to a responsive design or create and brand-new responsive website, we can have you covered. With Stackkaroo, the best IT sector in India, you can easily reach a wider audience by ensuring your website is accessible to everyone in your target audience. 
                                                </p>
                                        </div>
                                        <div className="mt-30">
                                            <h4 className="text-xl fw-600">
                                            What makes Stackkaroo unique? 
                                                </h4>
                                            <p className="mt-20">
                                            Stackkaroo stands out as the best IT sector in India, offering unmatched expertise and a team committed to your success. Partnering with us ensures a seamless and hassle-free experience with our easy setup process. Our live call support provides real-time assistance, addressing any queries or concerns you may have. Additionally, our private group video calls facilitate collaboration, streamlining communication and enhancing productivity. What sets us apart is our ability to deliver impressive results. We combine innovative solutions with industry best practices, ensuring exceptional outcomes for your business. Our personalized approach considers your unique needs, tailoring our services for maximum results. At Stackkaroo, we boast an experienced team of professionals who stay updated with the latest technologies and trends. This extensive expertise enables us to provide advanced solutions catering to your requirements. What truly makes Stackkaroo unique is our commitment to customer satisfaction. We are a trusted web and custom software development company in India with positive ratings in Google reviews. We create stunning websites and guide you on website maintenance to ensure long-term success. When you choose Stackkaroo, you gain access to a team that excels in responsive website development. Our creative and engaging web designs capture attention and provide an intuitive browsing experience. We also focus on user experience, optimizing navigation and performance on any device. 
                                                </p>
                                        </div>
                                        <div className="mt-30">
                                            <h4 className="text-xl fw-600">
                                            Get in Touch                                                 </h4>
                                            <p className="mt-20">
                                            Ready to embark on a transformative digital journey with Stackkaroo? Contact us today by simply providing your name, email, and a message with your requirements. We will reply promptly to describe our services and how they can benefit your business. 
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
                <section className="layout-pt-lg layout-pb-lg section-bg-color">
                    <div className="section-bg-color__item -wide bg-accent-light" />
                    <div className="container">
                        <div className="row justify-center text-center">
                            <div className="col-auto">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Services</span>
                                    </div>
                                    <h2 className="sectionHeading__title">You may also like</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row y-gap-32 pt-60 sm:pt-40">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                pagination={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".swiper-button-prev-style-3",
                  nextEl: ".swiper-button-next-style-3",
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
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  991: {
                    slidesPerView: 4,
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
                className="swiper-wrapper pt-5"
              >
                <SwiperSlide className="swiper-slide">
                  <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-yellow-light">
                      <img
                        src="/img/about-4/solutions/ui-design.svg"
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
                    <div className="size-80 rounded-full d-flex justify-center items-center bg-yellow-light">
                      <img
                        src="/img/about-4/solutions/ui-design.svg"
                        alt="icon"
                      />
                    </div>
                    <h4 className="text-xl fw-600 mt-20">
                      Website development
                    </h4>
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
                  <div className="size-80 rounded-full d-flex justify-center items-center bg-red-light">
                    <img src="/img/about-4/solutions/animate.svg" alt="icon" />
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
                    <img src="/img/about-4/solutions/seo.svg" alt="icon" />
                  </div>
                  <h4 className="text-xl fw-600 mt-20">UI/UX design</h4>
                  <p className="mt-10">
                    There is no one universal solution in online marketing
                  </p>
                  <Link
                    href="/services/uiux-design"
                    className="button -simple text-accent fw-600 underline mt-12"
                  >
                    Discover Now
                  </Link>
                </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                  <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                    <img src="/img/about-4/solutions/seo.svg" alt="icon" />
                  </div>
                  <h4 className="text-xl fw-600 mt-20">Digital Marketing</h4>
                  <p className="mt-10">
                    There is no one universal solution in online marketing
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
                    <img src="/img/about-4/solutions/seo.svg" alt="icon" />
                  </div>
                  <h4 className="text-xl fw-600 mt-20">SEO</h4>
                  <p className="mt-10">
                    There is no one universal solution in online marketing
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
                <section className="layout-pt-lg layout-pb-lg">
                    <div className="container">
                        <div className="row justify-center">
                            <div className="col text-center">
                                <p className="text-lg text-dark-1">Trusted by the world best</p>
                            </div>
                        </div>
                        <div className="row y-gap-32 justify-between items-center mt-64">
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <img className="w-1/1" src="/img/clients/1.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <img className="w-1/1" src="/img/clients/2.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <img className="w-1/1" src="/img/clients/3.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <img className="w-1/1" src="/img/clients/4.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <img className="w-1/1" src="/img/clients/5.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <img className="w-1/1" src="/img/clients/6.svg" alt="clients image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}