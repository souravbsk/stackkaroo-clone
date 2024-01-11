import Layout from "@/components/layout/Layout";
import AboutOne from "@/components/sections/homepage/AboutOne";
import AppOne from "@/components/sections/homepage/AppOne";
import BenefitsOne from "@/components/sections/homepage/BenefitsOne";
import ClientOne from "@/components/sections/homepage/ClientOne";
import FaqOne from "@/components/sections/homepage/FaqOne";
import FeatureOne from "@/components/sections/homepage/FeatureOne";
import HeroOne from "@/components/sections/homepage/HeroOne";
import SuccessOne from "@/components/sections/homepage/SuccessOne";
import Head from "next/head";

export default function Home1() {
  return (
    <>
      <Head>
        <title>
          Best affordable web development company in india 2023 | Stackkaroo
        </title>
        <meta
          name="description"
          content="affordable web development company in india are you looking for? Get best Web development services, App development services, Digital marketing, Seo and so on."
        />
        <meta
          name="keywords"
          content="website development services in india, website development in india, website building india, top website development company in india, best ecommerce website development company in india, best website development services india, affordable web development company in india, web development company ranking india, website design company jaipur india, top 10 web design company in india list"
        />
        <meta
          name="Stackkaroo"
          content="Best affordable web development company in india"
        />
      </Head>
      <Layout
        headerLayout={1}
        footerLayout={1}
        logo="logo" // logo, logo-flat, logo-5
        verticalLine // if vertical line true, show vertical line show
      >
        <HeroOne bgPath="home-1/masthead" />
        <ClientOne />
        <AboutOne />
        <BenefitsOne />
        <SuccessOne />
        <FeatureOne />
        <AppOne />
        <FaqOne />
      </Layout>
    </>
  );
}
