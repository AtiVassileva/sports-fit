import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="banner-section set-bg" style={{ backgroundImage: "url('img/banner-bg.jpg')" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="bs-text">
                            <h2>register now to get more deals</h2>
                            <div className="bt-tips">Where health, beauty and fitness meet.</div>
                            <Link to="/register" className="primary-btn  btn-normal">Sign Up
                            </Link>                            
                            <Link to="/login" className="primary-btn  btn-normal">Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;