import ClientLogo from "@/components/elements/ClientLogo";

export default function ClientOne({ title, layoutPt, layoutPb, mt }) {
    return (
        <>
            <section className="sm:mt-80">
                <div className="container">

                    <div className="row justify-center">
                        <div className="col text-center">
                            <p className="text-lg text-dark-1 wow animate__animated animate__fadeInUp">Our Trusted Clients from the World</p>
                        </div>
                    </div>
                    {/* <div className={`row y-gap-32 justify-between sm:justify-start items-center mt-${mt ? mt : "64"}  wow animate__animated animate__fadeInUp`}>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4" style={{ width: '100%' }}>
                                <img className="w-1/1" src="/img/clients/plankaroo.png" alt="Plankaroo" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4" style={{ width: '100%' }}>
                                <img className="w-1/1" src="/img/clients/scale capital.png" alt="Scale Capital" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4" style={{ width: '100%' }}>
                                <img className="w-1/1" src="/img/clients/jharkhand govt.png" alt="Jharkhand Sarkar" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4" style={{ width: '100%' }}>
                                <img className="w-1/1" src="/img/clients/aartisto.png" alt="Aartisto technologies" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4" style={{ width: '100%' }}>
                                <img className="w-1/1" src="/img/clients/civil works.png" alt="Civil works" />
                            </div>
                        </div>
                        
                    </div> */}
                    <ClientLogo></ClientLogo>
                </div>
            </section>
        </>
    )
}