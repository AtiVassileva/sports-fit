import PricingPlan from "./PricingPlan";

const Pricing = () => {
    return (
        <section className="pricing-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Our Plan</span>
                            <h2>Choose your pricing plan</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <PricingPlan/>
                    <PricingPlan/>
                    <PricingPlan/>
                </div>
            </div>
        </section>
    );
}

export default Pricing;