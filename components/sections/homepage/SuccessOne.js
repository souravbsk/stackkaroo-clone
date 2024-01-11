import Atropos from "atropos/react";

export default function SuccessOne() {
  return (
    <>
      <section className="layout-pt-md layout-pb-sm">
        <div className="container">
          <div className="row y-gap-48 justify-between items-center">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div>
                <div className="atropos -no-shadow js-atropos wow animate__animated animate__zoomIn">
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner overflow-visible d-flex justify-center">
                        <div className="relative z-2">
                          <Atropos data-atropos-offset={-5}>
                            <img
                            className="successImg"
                              src="/img/StackkarooImg/iPhone-4.png"
                              alt="phone"
                            />
                          </Atropos>
                        </div>

                        <div className="absolute-full-center">
                          <Atropos data-atropos-offset={-5}>
                            <img
                            className="successImgBG"
                              src="/img/home-1/phones/circle.png"
                              alt="phone"
                            />
                          </Atropos>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
              <div className="sectionHeading animated">
                <div className="sectionHeading__subtitle wow animate__animated animate__fadeInUp">
                  <span>An excellent partner</span>
                </div>
                <h2 className="sectionHeading__title sm:text-center wow animate__animated animate__fadeInUp">
                Paving the way to success with innovation
                </h2>
              </div>
              <div className="row y-gap-60 pt-60 sm:pt-32">
                <div className="sm:text-center col-12 wow animate__animated animate__fadeInUp">
                  <div className="d-flex sm:direction-column sm:items-center">
                    <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                      <img src="/img/home-1/success/mail.png" width={50} alt="icon" />
                    </div>
                    <div className="sm:mt-20">
                      <h4 className="text-xl fw-600 lh-1">
                        Streamlined mail administration{" "}
                      </h4>
                      <p className="mt-12">
                        Stay on top of vital conversations effortlessly with our
                        comprehensive mail management feature, streamlining your
                        inbox.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="sm:text-center col-12 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="d-flex sm:direction-column sm:items-center">
                    <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                      <img
                        src="/img/home-1/success/tracking.png"
                        width={50}
                        alt="icon"
                      />
                    </div>
                    <div className="sm:mt-20">
                      <h4 className="text-xl fw-600 lh-1">
                      Enhanced customers tracking
                      </h4>
                      <p className="mt-12">
                      Monitor and analyze customer interactions, gain valuable insights into your customer's preferences, and tailor your app for optimal engagement. 
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="sm:text-center col-12 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="d-flex sm:direction-column sm:items-center">
                    <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                      <img src="/img/home-1/success/analytics.png" width={50} alt="icon" />
                    </div>
                    <div className="sm:mt-20">
                      <h4 className="text-xl fw-600 lh-1">
                      Comprehensive analytics 
                      </h4>
                      <p className="mt-12">
                      Use our advanced reporting feature with comprehensive data analysis to become India's <strong>best e-commerce website development company</strong>. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
