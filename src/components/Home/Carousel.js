import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <section className="hero-section">
            <div className="hs-slider owl-carousel">
                <div className="hs-item set-bg" style={{ backgroundImage: "url('img/hero/hero-1.jpg')" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6">
                                <div className="hi-text">
                                    <span>Shape your body</span>
                                    <h1>Be <strong>strong</strong> traning hard</h1>
                                    <Link to="#" className="primary-btn">Get info</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hs-item set-bg" style={{ backgroundImage: "url('img/hero/hero-2.jpg')" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6">
                                <div className="hi-text">
                                    <span>Shape your body</span>
                                    <h1>Be <strong>strong</strong> traning hard</h1>
                                    <Link to="#" className="primary-btn">Get info</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;