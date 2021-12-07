import Item from "./Item";

const Main = () => {
    return (
        <section className="aboutus-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <div className="about-video set-bg" style={{ backgroundImage: `url("img/about-us.jpg")` }}>
                            <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i
                                className="fa fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="about-text">
                            <div className="section-title">
                                <span>About Us</span>
                                <h2>Who are we?</h2>
                            </div>
                            <div className="at-desc">
                                <p>
                                    We are qualified professionals and we can help you transform your body and get rid of your bad habits.
                                    Here are some fields we are experts in:
                                </p>
                            </div>
                            <div className="about-bar">
                                <Item name="Fitness" />
                                <Item name="Healthy eating" />
                                <Item name="Body building" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;