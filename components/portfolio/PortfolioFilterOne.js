import Isotope from "isotope-layout";
import Link from "next/link";
import * as Icon from 'react-feather';
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilterOne() {
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".works-row", {
                itemSelector: ".masonry__item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry__item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 0);
    }, []);
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key);
    },
        []
    );

    const activeBtn = (value) => (value === filterKey ? "active" : "");

    return (
        <>
            <div className="row justify-center">
                <div className="col-auto">
                    <div className="filter-button-group">
                        <button className={`button text-base mr-20 ${activeBtn("*")}`} onClick={handleFilterKeyChange("*")} data-filter="*">All
                            Projects</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("e_commerce")}data-filter=".e_commerce">Software development</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("digital_design")} data-filter=".digital_design">Website
                        development</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("web_design")} data-filter=".branding">App development</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("branding")} data-filter=".web_design">UI/UX design</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("branding")} data-filter=".web_design">Digital Marketing</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("branding")} data-filter=".web_design">SEO</button>
                    </div>
                </div>
            </div>
            <p className="text-center sm:text-xl text-3xl mt-60">we are uploading...</p>
            <div className="works-row masonry -col-3 -gap-32 pt-60 masonryportfolioHide md:pt-40 js-masonry js-masonry-no-filter">
                <div className="masonry__sizer"></div>

                <div className="masonry__item -no-ratio  e_commerce">
                    {/* <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/1.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link data-barba href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a data-barba href="#" className="decoration-none text-sm">#marketing</a>
                                <a data-barba href="#" className="decoration-none text-sm">#design</a>
                                <a data-barba href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Billboard</h4>
                        </div>
                    </div> */}
                    
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    {/* <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/2.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link data-barba href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a data-barba href="#" className="decoration-none text-sm">#marketing</a>
                                <a data-barba href="#" className="decoration-none text-sm">#design</a>
                                <a data-barba href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Creative Science</h4>
                        </div>
                    </div> */}
                      
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    {/* <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/3.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link data-barba href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a data-barba href="#" className="decoration-none text-sm">#marketing</a>
                                <a data-barba href="#" className="decoration-none text-sm">#design</a>
                                <a data-barba href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Air Plane</h4>
                        </div>
                    </div> */}
                      
                </div>
                <div className="masonry__item -no-ratio  e_commerce branding">
                    {/* <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/10.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link data-barba href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a data-barba href="#" className="decoration-none text-sm">#marketing</a>
                                <a data-barba href="#" className="decoration-none text-sm">#design</a>
                                <a data-barba href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Lewis Baker</h4>
                        </div>
                    </div> */}
                      
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    {/* <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/11.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link data-barba href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a data-barba href="#" className="decoration-none text-sm">#marketing</a>
                                <a data-barba href="#" className="decoration-none text-sm">#design</a>
                                <a data-barba href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">AG. Avent</h4>
                        </div>
                    </div> */}
                      
                </div>
                <div className="masonry__item -no-ratio  web_design e_commerce branding">
                    {/* <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/14.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link data-barba href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a data-barba href="#" className="decoration-none text-sm">#marketing</a>
                                <a data-barba href="#" className="decoration-none text-sm">#design</a>
                                <a data-barba href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Fortune Art</h4>
                        </div>
                    </div> */}
                      
                </div>
                <div className="masonry__item -no-ratio  e_commerce">
                    {/* <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/12.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link data-barba href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a data-barba href="#" className="decoration-none text-sm">#marketing</a>
                                <a data-barba href="#" className="decoration-none text-sm">#design</a>
                                <a data-barba href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Virtual Payment</h4>
                        </div>
                    </div> */}
                      
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    {/* <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/13.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link data-barba href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a data-barba href="#" className="decoration-none text-sm">#marketing</a>
                                <a data-barba href="#" className="decoration-none text-sm">#design</a>
                                <a data-barba href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Good Food</h4>
                        </div>
                    </div> */}
                      
                </div>
                <div className="masonry__item -no-ratio  digital_design web_design branding">
                    {/* <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/15.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link data-barba href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a data-barba href="#" className="decoration-none text-sm">#marketing</a>
                                <a data-barba href="#" className="decoration-none text-sm">#design</a>
                                <a data-barba href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Enterprice Silver</h4>
                        </div>
                    </div> */}
                      
                </div>
            </div>
        </>
    );
};