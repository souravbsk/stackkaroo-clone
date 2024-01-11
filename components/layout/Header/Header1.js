import Logo from "./Logo";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import * as Icon from "react-feather";
import Link from "next/link";

export default function Header({
  navColor,
  logo,
  scroll,
  navToggled,
  navHandle,
}) {
  return (
    <>
      <header
        className={`header js-header mobilepx-0 ${scroll ? "is-sticky" : ""} ${
          navToggled ? "menu-open" : ""
        }`}
      >
        <div className="header__bar  js-header-bar ">
          <div className="row container mx-auto px-0 justify-between items-center">
            <div className="col-2">
              <Logo logo={logo} />
            </div>
            <Menu scroll={scroll} navColor={navColor} />
            <MenuMobile navToggled={navToggled} />

            <div className="col-auto">
              <div className="header__right">
                <div className="md:d-none">
                  <Link
                    href="/contact"
                    className={`${
                      !scroll && navColor
                    } button -sm -outline-light-dark sm:d-none`}
                  >
                    Contact
                  </Link>

                  {/* <Link href="/login" className="button -sm -outline-light-dark sm:d-none">Join</Link>
                                    <Link href="/contact/contact-1" className="button -sm -dark text-white ml-12">Get the App</Link> */}
                </div>
                <div
                  className={`header__menu justify-center items-center relative d-none md:d-flex`}
                  onClick={navHandle}
                >
                  <button
                    type="button"
                    className={` d-flex items-center justify-center js-nav-open ${
                      navToggled ? "pointer-events-none opac-0" : "opac-1"
                    }`}
                    onClick={navHandle}
                  >
                    <Icon.Menu className={`${ !scroll && navColor} size-32 str-width-1`} />
                  </button>
                  <button
                    type="button"
                    className={` d-flex items-center justify-center absolute-y-center right-0  js-nav-close ${
                      navToggled ? "pointer-events-none opac-1" : "opac-0"
                    }`}
                  >
                    
                    <Icon.X className="text-black size-32 str-width-1 ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}