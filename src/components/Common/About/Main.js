import Item from "./Item";

const Main = () => {
    return (
        <section class="aboutus-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 p-0">
                        <div class="about-video set-bg" style={{ backgroundImage: `url("img/about-us.jpg")` }}>
                            <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" class="play-btn video-popup"><i
                                class="fa fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6 p-0">
                        <div class="about-text">
                            <div class="section-title">
                                <span>About Us</span>
                                <h2>Who are we?</h2>
                            </div>
                            <div class="at-desc">
                                <p>
                                    We are qualified professionals and we can help you transform your body and get rid of your bad habits.
                                    Here are some fields we are experts in:
                                </p>
                            </div>
                            <div class="about-bar">
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