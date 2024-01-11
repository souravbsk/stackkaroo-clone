import { useState } from "react";
import * as Icon from "react-feather";

export default function AccordionOne() {
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
      <div className="accordion -simple md:mt-24 js-accordion faq-text-left">
        <div
          className={
            active.key == 1 ? "accordion__item is-active" : "accordion__item"
          }
          onClick={() => handleToggle(1)}
        >
          <div className="accordion__button text-black ">
            <div className="accordion__icon">
              <Icon.Plus className="icon" />
              <Icon.Minus className="icon" />
            </div>
            <button className="text-lg faq-text-left md:text-base fw-600 text-black">
              {" "}
              1. What does the Stackkaroo package include?
            </button>
          </div>
          <div
            className="accordion__content"
            style={active.key == 1 ? { maxHeight: 1000 } : { maxHeight: 0 }}
          >
            <div className="accordion__content__inner">
              <p>
                When you choose our affordable services for{" "}
                <b>web building in India</b>, our comprehensive package includes
                SASS files for seamless styling, fully commented JS files, HTML
                variations, and PSD mockups to ensure a cohesive and engaging
                mobile experience.
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            active.key == 2 ? "accordion__item is-active" : "accordion__item"
          }
          onClick={() => handleToggle(2)}
        >
          <div className="accordion__button text-black ">
            <div className="accordion__icon">
              <Icon.Plus className="icon" />
              <Icon.Minus className="icon" />
            </div>
            <button className="text-lg faq-text-left md:text-base fw-600 text-black">
              2. How does the Stackkaroo trial work?
            </button>
          </div>
          <div
            className="accordion__content"
            style={active.key == 2 ? { maxHeight: 1000 } : { maxHeight: 0 }}
          >
            <div className="accordion__content__inner">
              <p>
                We are pleased to offer a 14-day trial for our{" "}
                <b>website development services in India</b> with access to the
                full range of features and functionalities. It allows you to
                fully explore and evaluate our capabilities to make an informed
                decision.
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            active.key == 3 ? "accordion__item is-active" : "accordion__item"
          }
          onClick={() => handleToggle(3)}
        >
          <div className="accordion__button text-black ">
            <div className="accordion__icon">
              <Icon.Plus className="icon" />
              <Icon.Minus className="icon" />
            </div>
            <button className="text-lg faq-text-left md:text-base fw-600 text-black">
              3. How can I make payment for the Stackkaroo package?
            </button>
          </div>
          <div
            className="accordion__content"
            style={active.key == 3 ? { maxHeight: 1000 } : { maxHeight: 0 }}
          >
            <div className="accordion__content__inner">
              <p>
                We offer convenient payment options for our services for{" "}
                <b>website development services in India</b>, including online
                transactions, bank transfers, or digital wallets. We aim to
                ensure your convenience and peace of mind in utilizing our
                services as well as making payments.
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            active.key == 4 ? "accordion__item is-active" : "accordion__item"
          }
          onClick={() => handleToggle(4)}
        >
          <div className="accordion__button text-black ">
            <div className="accordion__icon">
              <Icon.Plus className="icon" />
              <Icon.Minus className="icon" />
            </div>
            <button className="text-lg faq-text-left md:text-base fw-600 text-black">
              4. Can I suggest a new features for Stackkaroo?
            </button>
          </div>
          <div
            className="accordion__content"
            style={active.key == 4 ? { maxHeight: 1000 } : { maxHeight: 0 }}
          >
            <div className="accordion__content__inner">
              <p>
                Absolutely! We value our customer’s input and are always open to
                suggestions for enhancing our services for{" "}
                <b>website design companies in Jaipur, India.</b> We believe in
                a collaborative approach and welcome your ideas with new
                features or improvements.
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            active.key == 5 ? "accordion__item is-active" : "accordion__item"
          }
          onClick={() => handleToggle(5)}
        >
          <div className="accordion__button text-black ">
            <div className="accordion__icon">
              <Icon.Plus className="icon" />
              <Icon.Minus className="icon" />
            </div>
            <button className="text-lg faq-text-left md:text-base fw-600 text-black">
              5. How can this service help affordable web development companies
              in India?
            </button>
          </div>
          <div
            className="accordion__content"
            style={active.key == 5 ? { maxHeight: 1000 } : { maxHeight: 0 }}
          >
            <div className="accordion__content__inner">
              <p>
                Our affordable web development services will provide a
                professional and visually appealing website. With our quick and
                efficient service, your business can rank in the{" "}
                <b>top 10 web design companies in India list.</b>
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            active.key == 6 ? "accordion__item is-active" : "accordion__item"
          }
          onClick={() => handleToggle(6)}
        >
          <div className="accordion__button text-black ">
            <div className="accordion__icon">
              <Icon.Plus className="icon" />
              <Icon.Minus className="icon" />
            </div>
            <button className="text-lg faq-text-left md:text-base fw-600 text-black">
              6. Is Stackkaroo suitable for both startups and established
              business?
            </button>
          </div>
          <div
            className="accordion__content"
            style={active.key == 6 ? { maxHeight: 1000 } : { maxHeight: 0 }}
          >
            <div className="accordion__content__inner">
              <p>
                Stackkaroo is designed to meet the requirements of both startup
                and established businesses. Its premium features and flexible
                design make it suitable for various industries,{" "}
                <b>including affordable web development companies in India.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
