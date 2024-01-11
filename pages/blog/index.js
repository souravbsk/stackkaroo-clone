import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function BlogList4() {
  return (
    <>
      <Head>
        <title>Blog || Stackkaroo</title>
      </Head>
      <Layout>
        <section className="page-header -base -dark">
          <div className="page-header__bg">
            <img
              className="initial-img"
              src="/img/page-header/bg-dark.png"
              alt="Page header"
            />
          </div>
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-lg-9 col-md-10">
                <div>
                  <h1 className="page-header__title lh-14 text-white">Blog </h1>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-9 col-md-10">
                                <div className="px-20">
                                    <p className="page-header__text text-white opac-80">With we want to optimize the customization process so your team can save time when building websites.</p>
                                </div>
                            </div> */}
            </div>
          </div>
        </section>
        <section className="layout-pt-lg ">
          <div className="container">
            {/* <BlogStyleOne /> */}
            <h1 className="text-center sm:text-3xl text-5xl ">
              Coming Soon....
            </h1>
          </div>
        </section>
        {/* <section className="layout-pt-lg layout-pb-lg">
                    <div className="container">
                        <BlogStyleOne />
                       
                        <div className="row justify-center pt-60 sm:pt-40">
                            <div className="col-auto">
                                <button className="button -md -light-accent -uppercase text-accent" data-loadmore-trigger=".js-loadmore-content">Load More</button>
                            </div>
                        </div>
                    </div>
                </section> */}
      </Layout>
    </>
  );
}
