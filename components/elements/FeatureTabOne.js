import { useState } from "react";

export default function AccordionOne() {
  const [active, setActive] = useState(1);

  const handleOnClick = (index) => {
    setActive(index);
  };
  return (
    <>
      <div className="tabs -button-bg-white pt-60 js-tabs">
        <div className="row y-gap-48 items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="tabs__controls js-tabs-controls">
              <div className=" wow animate__animated animate__fadeInUp">
                <div
                  className={`tabs__button rounded-8 js-tabs-button ${
                    active == 1 ? "is-active" : ""
                  }`}
                  onClick={() => handleOnClick(1)}
                >
                  <div className="d-flex rounded-8 featureTab py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                    <div className="d-flex justify-center items-center flex-grow  sm:mr-0 mr-32">
                      <img src="/img/home-1/features/web-design.png" className="featureIcon" alt="icon" />
                    </div>
                    <div>
                      <h4 className="text-xl fw-600 lh-1">
                        Effortless theme customization{" "}
                      </h4>
                      <p className="mt-12">
                        Choose from various captivating themes and effortlessly
                        personalize your app to align with your brand identity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" wow animate__animated animate__fadeInUp"
                data-wow-delay="0.2s"
              >
                <div
                  className={`tabs__button rounded-8 js-tabs-button ${
                    active == 2 ? "is-active" : ""
                  }`}
                  onClick={() => handleOnClick(2)}
                >
                  <div className="d-flex rounded-8 featureTab py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                    <div className="d-flex justify-center items-center flex-grow  sm:mr-0 mr-32 ">
                      <img src="/img/home-1/features/vector.png" className="featureIcon" alt="icon" />
                    </div>
                    <div>
                      <h4 className="text-xl fw-600 lh-1">
                        Quick and powerful design{" "}
                      </h4>
                      <p className="mt-12">
                        Ready-to-use, powerful design options allow you to
                        create visually stunning interfaces that captivate users
                        and leave a lasting impression.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" wow animate__animated animate__fadeInUp"
                data-wow-delay="0.4s"
              >
                <div
                  className={`tabs__button rounded-8 js-tabs-button ${
                    active == 3 ? "is-active" : ""
                  }`}
                  onClick={() => handleOnClick(3)}
                >
                  <div className="d-flex rounded-8 featureTab py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                    <div className="d-flex justify-center items-center flex-grow  sm:mr-0 mr-32">
                      <img src="/img/home-1/features/tablecontent.png" className="featureIcon" alt="icon" />
                    </div>
                    <div>
                      <h4 className="text-xl fw-600 lh-1">
                        Stand out with unique content.
                      </h4>
                      <p className="mt-12">
                        Let your app shine with creative and distinctive content
                        and style that captures your audience’s attraction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6">
            <div className="tabs__content js-tabs-content">
              <div
                className={`tabs__pane -tab-item-1  ${
                  active == 1 ? "is-active" : ""
                }`}
              >
                <div className="atropos -no-shadow js-atropos">
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner overflow-visible d-flex justify-end md:justify-center">
                        <img
                          className="initial-img featureImg"
                          src="/img/StackkarooImg/iphone-3.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tabs__pane -tab-item-2  ${
                  active == 2 ? "is-active" : ""
                }`}
              >
                <div className="atropos -no-shadow js-atropos">
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner overflow-visible d-flex justify-end md:justify-center">
                        <img
                          className="initial-img featureImg"
                          src="/img/StackkarooImg/iphone-6.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tabs__pane -tab-item-3  ${
                  active == 3 ? "is-active" : ""
                }`}
              >
                <div className="atropos -no-shadow js-atropos">
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner overflow-visible d-flex justify-end md:justify-center">
                        <img
                          className="initial-img featureImg"
                          src="/img/StackkarooImg/iphone-7.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
