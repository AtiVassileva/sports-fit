import Benefit from "./Benefit";

const Benefits = () => {
    return (
        <section className="choseus-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Why chose us?</span>
                            <h2>PUSH YOUR LIMITS FORWARD</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Benefit />
                    <Benefit />
                    <Benefit />
                    <Benefit />
                </div>
            </div>
        </section>
    );
}

export default Benefits;