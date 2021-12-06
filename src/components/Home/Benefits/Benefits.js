import Benefit from "./Benefit";

const Benefits = () => {
    return (
        <section className="choseus-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <br/>
                        <div className="section-title">
                            <span>Why chose us?</span>
                            <h2>PUSH YOUR LIMITS FORWARD</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Benefit 
                        title="Unique to your needs"
                        spanClass="flaticon-014-heart-beat"
                        text="Your health is in good hands. Guaranteed with our name."
                    />
                    <Benefit 
                        title="Healthy & efficient diets"
                        spanClass="flaticon-033-juice"
                        text="Start eating healthy now and you will be amazed by the results."
                    />
                    <Benefit 
                        title="Tested exercises"
                        spanClass="flaticon-002-dumbell"
                        text="Tired of being the skinny one or the fluffly one? Start working out now!"
                    />
                    <Benefit 
                        title="Guaranteed success"
                        spanClass="flaticon-034-stationary-bike"
                        text="Everything depends on your own will. Nothing is impossible after all."
                    />
                </div>
            </div>
        </section>
    );
}

export default Benefits;