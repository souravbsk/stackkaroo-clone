import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import * as Icon from "react-feather";
import { useMemo, useRef, useState } from "react";
import Head from "next/head";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import toast, { Toaster } from "react-hot-toast";

const LeafletMap = dynamic(() => import("@/components/elements/LeafletMap"), {
  ssr: false,
});

export default function Contact4() {
  const [value, setValue] = useState();
  const [isDisabled, setDisabled] = useState(false);
  const form = useRef();
  const handleSubmitFormData = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            e.target.reset();
            setValue("");
            toast.success("message successfully sent");
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChangedCheckBoxValue = (e) => {
    setDisabled(e.target.checked);
  };

  //avoid blinking

  const memoizedMap = useMemo(
    () => <LeafletMap center={[23.83382, 91.282417]} zoom={13} />,
    []
  );

  return (
    <>
      <Head>
        <title>Best website development agency Agartala 2023 | Stackkaroo</title>
        <meta name="description" content="Best website development agency Agartala are you looking for? Get low cost web design in Agartala, software development company in Cuttack, software companies in Agartala, it software companies in Odisha, and so on." />
        <meta name="keywords" content="Best website development agency Agartala, website development agency india, website development agency Agartala, website development agency Tripura, website development agency Odisha, website development agency Cuttack, best software development services in Agartala ,custom offshore software development services,top software development companies in Tripura,
top 10 software development companies in Odisha,
software development company in Cuttack,
software companies in Agartala,
it software companies in Odisha,
startup software companies in Tripura,
all software company in India,
software development services" />
        <meta name="Stackkaroo" content="Best website development agency Agartala" />
      </Head>
      <Layout>
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
                    Let’s Discuss Your Project

                  </h1>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-10">
                <div className=" mt-10">
                  <p className="page-header__text">
                    Are you looking for a website development agency Agartala?
                    Are you looking for a website development agency Tripura?
                    Wait, you must be looking for a website development agency
                    Odisha. All right, we got you. You are looking for a
                    website development agency India. Yes, we understand that
                    you are looking for custom offshore software development
                    services to design your website under an affordable
                    budget.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-sm layout-pb-sm">
          <div className="container">
            <p>
              Hello visitor. We are the team of Stackkaroo. With our trustworthy
              solutions, we proudly stand among the top 10 software development
              companies in Odisha. Stackkaroo is also among the best startup
              software companies in Tripura. We provide the entire stack of
              services that you expect from all software company in India. Our
              software development services include custom software development,
              web application development, mobile application development, cloud
              consulting, DevOps automation, software prototyping, quality
              assurance testing, system integration, UI/UX design service,
              software testing and maintenance services. We also provide SEO and
              Digital marketing services to our clients. Our innovative approach
              to every project has made us one of the best software development
              services in Agartala. Our motto is to give our best to give you
              the best.
            </p>
            <p>
              Do you have any queries about us? Do you need help with your
              website development process? Feel free to discuss it with us.
              Leave your message here in the box. We will connect with you soon.
              You can also ring our website development agency Cuttack. We are
              eager to hear from you. As one of the top software development
              companies in Tripura, we will be pleased to get your call at our
              Tripura office.
            </p>
          </div>
        </section>
        <section className="layout-pt-md">
          <div className="container-fluid px-0">
            <div className="row map-form g-0">
              <div className="col-xl-8 col-lg-6 col-md-5">{memoizedMap}</div>
              <div className="col-xl-4 col-lg-6 col-md-7">
                <div className="bg-light-4 py-60 px-60 sm:px-0">
                  <div className="sm:container mx-auto">
                    <div className="sectionHeading ">
                      <div className="sectionHeading__subtitle">
                        <span>message</span>
                      </div>
                      <h2 className="sectionHeading__title">
                        Tell us about yourself
                      </h2>
                    </div>
                    <form
                      ref={form}
                      onSubmit={handleSubmitFormData}
                      className="contact-form row y-gap-40 pt-60 sm:pt-40"
                    >
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            name="subject"
                            placeholder="Your Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <PhoneInput
                            placeholder="phone number"
                            value={value}
                            name="phone"
                            required
                            onChange={setValue}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            rows={4}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <div className="form-checkbox">
                            <div className="checkbox">
                              <input
                                onChange={handleChangedCheckBoxValue}
                                type="checkbox"
                              />
                              <div className="checkbox__mark">
                                <Icon.Check className="checkbox__icon" />
                              </div>
                            </div>
                            <label htmlFor="items">
                              I am bound by the terms of the Service I accept
                              Privacy Policy.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <button
                            disabled={!isDisabled}
                            type="submit"
                            className={`${!isDisabled && "disabled-color"
                              } button -md -accent -uppercase text-white`}
                          >
                            Send Your Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layout-pt-md ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="d-flex direction-column text-center px-48 py-48 md:px-32 md:py-48 bg-white rounded-16 | t-base h:shadow-card">
                  <div>
                    <img
                      width={45}
                      className="contactIcon"
                      src="/img/StackkarooImg/contact/location.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-xl fw-600 mt-24">Location</h3>
                  <div className="mt-16">
                    {" "}
                    {/* Change <p> to <div> */}
                    Office 1 location - 6, IGM Hospital Lane, Agartala, Tripura
                    -799001
                    <hr />
                    Office 2 location - Jatioarilo, Rahania, Mahanga, Cuttack -
                    754204
                  </div>{" "}
                  {/* Change </p> to </div> */}
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="d-flex direction-column text-center px-48 py-48 md:px-32 md:py-48 bg-white rounded-16 | t-base h:shadow-card">
                  <div>
                    <img
                      width={45}
                      className="contactIcon"
                      src="/img/StackkarooImg/contact/hour.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-xl fw-600 mt-24">Hours</h3>
                  <p className="mt-16">
                    Mon to Fri: 9:30 am to 7:30 pm
                    <br />
                    Sat: 9:30 am to 02 pm
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="d-flex direction-column text-center px-48 py-48 md:px-32 md:py-48 bg-white rounded-16 | t-base h:shadow-card">
                  <div>
                    <img
                      width={45}
                      className="contactIcon"
                      src="/img/StackkarooImg/contact/phone.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-xl fw-600 mt-24">Contact</h3>

                  <p className="text-16">Agartala, Tripura Office</p>
                  <p className="text-16 fw-600 ">+91 7085548881</p>

                  <hr />

                  <p className="text-16">Odisha, Cuttack Office</p>
                  <p className="text-16 fw-600 ">+91 7401588425</p>
                  <p className="text-16 fw-600 mt-4">info@stackkaroo.com</p>
                </div>
              </div>
            </div>
          </div>
          <Toaster />
        </section>
      </Layout>
    </>
  );
}
