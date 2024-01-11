import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import Footer6 from "./Footer/Footer6";
import Header1 from "./Header/Header1";
export default function Layout({
  headerLayout = 1,
  footerLayout,
  children,
  bgColor,
  navColor,
  logo,
  verticalLine,
}) {
  const [scroll, setScroll] = useState(0);
  const [navToggled, setNavToggled] = useState(false);
  const navHandle = () => setNavToggled(!navToggled);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 90;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <div className="barba-container bgGlobal">
        <main className="main-content allContent ">
          <Header1
            navColor={navColor}
            scroll={scroll}
            logo={logo}
            navToggled={navToggled}
            navHandle={navHandle}
          />
          {/* className="lines -vertical-lines" */}
          {verticalLine && (
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div className="content-wrapper   js-content-wrapper">{children}</div>
          <FloatingWhatsApp
            phoneNumber="+917085548881"
            accountName="Stackkaroo"
            notification
            chatMessage="Welcome to stackkaroo 🙂 Are you looking for any services?"
            avatar="favicon.ico"
          />
          {/* for global footer use footer type 6   */}
          <Footer6 />
        </main>
      </div>
    </>
  );
}
