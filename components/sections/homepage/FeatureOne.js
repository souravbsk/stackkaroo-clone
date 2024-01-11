import FeatureTabOne from "@/components/elements/FeatureTabOne";

export default function FeatureOne() {
    return (
        <>
            <section className="layout-pt-md layout-pb-BG section-bg-color">
                <div className="section-bg-color__item -wide" />
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionHeading ">
                                <div className="sectionHeading__subtitle">
                                    <span>Unique capabilities that sets us apart </span>
                                </div>
                                <h2 className="sectionHeading__title">Empowering your journey with Powerful features and exceptional design </h2>
                            </div>
                        </div>
                    </div>
                    <FeatureTabOne />
                </div>
            </section>
        </>
    )
}