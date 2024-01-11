import Link from "next/link";
import * as Icon from "react-feather";

export default function Footer6() {
  return (
    <>
      <footer className="footer -type-3">
        <div className="footer__top">
          <div className="container">
            {/* <div className="row y-gap-48 justify-content-between">
              <div className="col-lg-4 col-sm-6">
                <div className="footer__item">
                  <div className="footer__logo ">
                    <img src="/img/general/logo-dark.svg" alt="logo" />
                  </div>
                  <div className="y-gap-32 pt-30">
                    <div>
                      <div className="text-lg opac-50">
                        Toll Free Customer Care
                      </div>
                      <div className="text-xl fw-600">+91 7085548881</div>
                      <div className="text-xl fw-600">+91 7401588425</div>
                    </div>
                    <div>
                      <div className="text-lg opac-50">Need live support?</div>
                      <div className="text-xl fw-600">hi@sassio.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="footer__item">
                  <h3 className="text-xl lh-1 fw-600">Links</h3>
                  <div className="footer__content y-gap-10 mt-40">
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="/">
                        Home
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="/about/about-5">
                        About
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link
                        className="decoration-none"
                        href="/portfolio/portfolio-list-1"
                      >
                        Portfolio
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link
                        className="decoration-none"
                        href="/blog/blog-list-4"
                      >
                        Blog
                      </Link>
                    </div>

                    <div className="footer__content__item">
                      <Link
                        className="decoration-none"
                        href="/contact/contact-4"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer__item">
                  <h3 className="footer__title text-xl lh-1 fw-600">Legal</h3>
                  <div className="footer__content y-gap-10 mt-40">
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="terms">
                        Terms of use
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="terms">
                        Terms &amp; conditions
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="terms">
                        Privacy policy
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="terms">
                        Coolie policy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="y-gap-48">
                  <div className="footer__socials">
                    <h3 className="text-xl lh-1 fw-600">Follow Us</h3>
                    <div className="socials mt-40">
                      <div>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="footer__title text-xl lh-1 fw-600">
                      Subscribe
                    </h3>
                    <div className="footer__content mt-24">
                      <div className="footer__newsletter form-newsletter -simple">
                        <form action="POST">
                          <div className="form-group">
                            <input
                              className="rounded-200 bg-light-4"
                              placeholder="Your Email"
                              type="email"
                            />
                            <button
                              className="button -red-2 text-white ml-10"
                              type="submit"
                            >
                              <Icon.ArrowRight className="icon size-20" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="footerPrimary">
            <div className="footer__logo footerLogoImg ">
              <img src="/img/general/logo-dark.svg" alt="logo" />
            </div>
            <div className="footer-address-number">
              <div className="text-xl fw-600"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building-fill" viewBox="0 0 16 16">
  <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H3Zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/>
</svg>  Agartala, Tripura Office</span>   +91 7085548881</div>
              <div className="text-xl fw-600"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building-fill" viewBox="0 0 16 16">
  <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H3Zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/>
</svg> Odisha, Cuttack Office</span>    +91 7401588425</div>
            </div>
            <div className="socials footer-social mt-30">
              <div>
               <Link target="_blank" href="https://www.facebook.com/stackkaroo">
                  <i className="fa fa-facebook" aria-hidden="true" />
               </Link>
              </div>
              <div>
                <Link target="_blank" href="https://www.instagram.com/stackkaroo/">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </Link>
              </div>
              <div>
                <Link target="_blank" href="https://www.linkedin.com/company/stackkaroo/">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </Link>
              </div>
            </div>
           
           
            <div className="servicefooteritem mt-30">
              <ul className="nav serviceLinkUl js-navList">
                <li className={` menu-item-has-children`}>
                  <Link href="/services/software-development">Software development</Link>
                </li>
                <li className={` menu-item-has-children`}>
                <Link href="/services/website-development">Website development</Link>
                </li>
                <li className={` menu-item-has-children`}>
                <Link href="/services/app-development">App development</Link>
                </li>
                <li className={` menu-item-has-children`}>
                <Link href="/services/uiux-design">UI/UX design</Link>
                </li>
                <li className={` menu-item-has-children`}>
                <Link href="/services/digital-marketing">Digital Marketing</Link>
                </li>
                <li className={` menu-item-has-children`}>
                <Link href="/services/seo">SEO</Link>
                </li>
                
              </ul>
            </div>
            <div className="servicefooteritem">
              <ul className="nav serviceLinkUl js-navList">
                
                <li className={` menu-item-has-children`}>
                  <Link href="/terms-of-use"> Terms of use</Link>
                </li>
                <li className={` menu-item-has-children`}>
                  <Link href="/terms-and-condition">Terms &amp; conditions</Link>
                </li>
                <li className={` menu-item-has-children`}>
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
                {/* <li className={` menu-item-has-children`}>
                  <Link href="/about/about-5">  Coolie policy</Link>
                </li> */}
              </ul>
            </div>
            </div>

            <div className="row justify-center py-30 ">
              <div className="col-auto">
                <div className="footer__bottom_text">
                  © Copyright 2023. Stackkaroo.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <footer className="footer -type-3">
        <div className="footer__top">
          <div className="container">
            <div className="row y-gap-48 justify-content-between">
              <div className="col-lg-4 col-sm-6">
                <div className="footer__item">
                  <div className="footer__logo ">
                    <img src="/img/general/logo-dark.svg" alt="logo" />
                  </div>
                  <div className="y-gap-32 pt-30">
                    <div>
                      <div className="text-lg opac-50">
                        Toll Free Customer Care
                      </div>
                      <div className="text-xl fw-600">+91 7085548881</div>
                      <div className="text-xl fw-600">+91 7401588425</div>
                    </div>
                    <div>
                      <div className="text-lg opac-50">Need live support?</div>
                      <div className="text-xl fw-600">hi@sassio.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="footer__item">
                  <h3 className="text-xl lh-1 fw-600">Links</h3>
                  <div className="footer__content y-gap-10 mt-40">
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="/">
                        Home
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="/about/about-5">
                        About
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link
                        className="decoration-none"
                        href="/portfolio/portfolio-list-1"
                      >
                        Portfolio
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link
                        className="decoration-none"
                        href="/blog/blog-list-4"
                      >
                        Blog
                      </Link>
                    </div>

                    <div className="footer__content__item">
                      <Link
                        className="decoration-none"
                        href="/contact/contact-4"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer__item">
                  <h3 className="footer__title text-xl lh-1 fw-600">Legal</h3>
                  <div className="footer__content y-gap-10 mt-40">
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="terms">
                        Terms of use
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="terms">
                        Terms &amp; conditions
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="terms">
                        Privacy policy
                      </Link>
                    </div>
                    <div className="footer__content__item">
                      <Link className="decoration-none" href="terms">
                        Coolie policy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="y-gap-48">
                  <div className="footer__socials">
                    <h3 className="text-xl lh-1 fw-600">Follow Us</h3>
                    <div className="socials mt-40">
                      <div>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="footer__title text-xl lh-1 fw-600">
                      Subscribe
                    </h3>
                    <div className="footer__content mt-24">
                      <div className="footer__newsletter form-newsletter -simple">
                        <form action="POST">
                          <div className="form-group">
                            <input
                              className="rounded-200 bg-light-4"
                              placeholder="Your Email"
                              type="email"
                            />
                            <button
                              className="button -red-2 text-white ml-10"
                              type="submit"
                            >
                              <Icon.ArrowRight className="icon size-20" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="servicefooteritem ">
            <ul className="nav serviceLinkUl js-navList">
            <li className={` menu-item-has-children`}>
                    <Link href="/">Software development</Link>
                  </li>
                  <li className={` menu-item-has-children`}>
                    <Link href="/">Website development</Link>
                  </li>
                  <li className={` menu-item-has-children`}>
                    <Link href="/">App development</Link>
                  </li>
                  <li className={` menu-item-has-children`}>
                    <Link href="/">UI/UX design</Link>
                  </li>
                  <li className={` menu-item-has-children`}>
                    <Link href="/">Digital Marketing</Link>
                  </li>
                  <li className={` menu-item-has-children`}>
                    <Link href="/">SEO</Link>
                  </li>
              <li className={` menu-item-has-children`}>
              <Link href="/about/about-5">About</Link>
              </li>
              </ul>
            </div>
            
            <div className="row justify-center py-30 ">
              <div className="col-auto">
                <div className="footer__bottom_text">
                  © Copyright 2023. Stackkaroo.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}
// mt-40
