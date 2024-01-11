import Atropos from "atropos/react";
import Link from "next/link";
import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroOne({ bgPath, textWhite }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log();
  }, []);

  return (
    <>
      <section className="masthead -type-1 overflow-hidden  mt-72">
        <div className="masthead__bg wow animate__animated animate__fadeIn overflow-hidden relative">
          <div
            className="masthead  absolute-full-center"
            id="js-masthead-1-particles"
          >
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                fpsLimit: 120,
                fullScreen: { enable: false },
                interactivity: {
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: ["#00ff96", "#0044EB", "#1A3454"],
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 500,
                    },
                    value: 40,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
          </div>
          <img src={`../img/${bgPath}/bg.png`} alt="bg" />
          <img
            className="wow animate__animated animate__fadeInUp"
            src="/img/home-1/masthead/rect.svg"
            alt="bg"
          />
        </div>
        <div className="container  heroContainer">
          <div className="row">
            <div className="col-xl-7 col-sm-12 col-md-6 col-lg-6">
              <div className="masthead__content relative z-2">
                <div className="masthead__subtitle wow animate__animated animate__fadeInUp">
                  <span className="text-center">
                    Affordable web development company in india
                  </span>
                </div>
                <h1
                  className={`masthead__title stackkarooHeadingTitle wow animate__animated animate__fadeInUp ${textWhite}`}
                >
                  Quality web development <br></br> at affordable rates.<br></br>
                  <span
                    className={`${
                      textWhite ? textWhite : "text-accent"
                    } wow animate__animated animate__fadeInUp`}
                  >
                    Choose us for your digital journey
                  </span>
                </h1>
                <p
                  className={`masthead__text wow animate__animated animate__fadeInUp ${textWhite}`}
                >
                  stackkaroo framework, an ideal choice for an affordable web
                  development company in India, <br /> Effectively helps users
                  showcase their apps with its beautiful design and rich core
                  functionality.
                </p>
                <div className="masthead__buttons row y-gap-10 pt-32 md:pt-20">
                  <Link href="/contact">
                    <div className="col-auto text-white wow animate__animated animate__fadeInUp">
                      <div className="button -sm -dark text-white ">
                        <div>Contact Us</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-sm-12 col-md-6 col-lg-6">
              {/* <div className="masthead__image relative z-1"> */}
                <Atropos shadow={false} data-atropos-offset={-5}>
                  <img src="/img/StackkarooImg/heroimg.png" className="HeroImg" alt="phone" />
                  <img src="/img/StackkarooImg/iphone-1.png" className="HeroImgMobile" alt="phone" />
                </Atropos>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
