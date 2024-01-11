/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useRouter } from 'next/router';


    export default function Menu({ navColor,scroll }) {

      function isActive(route) {
        const router = useRouter()
        const { pathname } = router
        return pathname === route
      }

    return (
      <>
        <div className="menu js-menu h-36">
          <div className="menu__container">
            <div className="mobile__back js-nav-list-back pointer-events-none">
              <Link href="#" className='nav-link active'>Home</Link>
            </div>
            <ul className="nav js-navList">
              <li className={`${!scroll && navColor} ${isActive('/') ? 'active-nav' : ''} menu-item-has-children`}>
                <Link  href="/">Home</Link>
              </li>
              <li className={`${!scroll && navColor} ${isActive('/about') ? 'active-nav' : ''} menu-item-has-children`}>
              <Link href="/about">About</Link>
              </li>
              <li className={`${!scroll && navColor}
               ${isActive('/services/software-development') ? 'active-nav' : ''}
               ${isActive('/services/website-development') ? 'active-nav' : ''}
               ${isActive('/services/app-development') ? 'active-nav' : ''}
               ${isActive('/services/uiux-design') ? 'active-nav' : ''}
               ${isActive('/services/digital-marketing') ? 'active-nav' : ''}
               ${isActive('/services/seo') ? 'active-nav' : ''}
               menu-item-has-children`}>

                <Link href="#">Service</Link>
                <ul className="nav__submenu">
                  <li className="nav__submenu_item">
                    <Link href="/services/software-development">Software development</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/services/website-development">Website development</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/services/app-development">App development</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/services/uiux-design">UI/UX design</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/services/digital-marketing">Digital Marketing</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/services/seo">SEO</Link>
                  </li>

                  {/* extra pages start
                  <li className="nav__submenu_item">
                    <Link href="/contact/contact-4">Contact</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/terms">Terms &amp; conditions</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/login">Login</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/register">Register</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/invoice">Invoice</Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/ui-elements">UI Elements</Link>
                  </li>
                  extra pages end  */}
                </ul>
              </li>
              <li
                className={`${!scroll && navColor} ${isActive('/portfolio') ? 'active-nav' : ''} menu-item-has-children`}
              >
                <Link href="/portfolio">Portfolio</Link>
                {/* <ul className="nav__submenu d-none md:d-block">
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-1">
                      List Style v1
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-2">
                      List Style v2
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-3">
                      List Style v3
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-4">
                      List Style v4
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-5">
                      List Style v5
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-6">
                      List Style v6
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-7">
                      List Style v7
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-8">
                      List Style v8
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-9">
                      List Style v9
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-list-10">
                      List Style v10
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-hover-effects">
                      All Hover Effects
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-single-1">
                      Single Style v1
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-single-2">
                      Single Style v2
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-single-3">
                      Single Style v3
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-single-4">
                      Single Style v4
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-single-5">
                      Single Style v5
                    </Link>
                  </li>
                  <li className="nav__submenu_item">
                    <Link href="/portfolio/portfolio-single-6">
                      Single Style v6
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className={`${!scroll && navColor} ${isActive('/blog') ? 'active-nav' : ''} menu-item-has-children`}>
                <Link href="/blog">Blog</Link>
              </li>
              {/* <li className={`${navColor}`}>
                <Link href="/contact/contact-4">Contact</Link>
              </li> */}
            </ul>
          </div>
          <div className="mobile__footer js-mobile-footer">
            <div className="mobile__copyright">
              <p>© Copyright 2023. Sassio - NextJS</p>
            </div>
            <div className="mobile__socials">
              <Link href="/#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </Link>
              <Link href="/#">
                <i className="fa fa-twitter" aria-hidden="true" />
              </Link>
              <Link href="/#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </Link>
              <Link href="/#">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}
