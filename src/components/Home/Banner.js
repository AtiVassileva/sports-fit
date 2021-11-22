const Banner = () => {
    return (
        <section className="banner-section set-bg" style={{ backgroundImage: "url('img/banner-bg.jpg')" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="bs-text">
                            <h2>register now to get more deals</h2>
                            <div className="bt-tips">Where health, beauty and fitness meet.</div>
                            <a href="/register" className="primary-btn  btn-normal">Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;