const Home = () => {
    return (
        <div className="home">
            <div className="background_image" style={{ backgroundImage: "url(images/index.jpg)" }}></div>
            <div className="overlay"></div>
            <div className="home_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="home_content text-center">
                                <div className="video_link">
                                    <a className="vimeo video_button d-flex flex-column align-items-center justify-content-center" href="https://player.vimeo.com/video/99340873?autoplay=1&loop=1&title=0&autopause=0">
                                        <div className="video_link_content d-flex flex-row align-items-center justify-content-start">
                                            <div className="video_icon d-flex flex-column align-items-center justify-content-center"><i className="fa fa-play" aria-hidden="true"></i></div>
                                            <span className="video_text">See Workout Video</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="home_title">Get fit with us</div>
                                <div className="home_subtitle">Pilates, Yoga, Fitness, Spinning & many more</div>
                                <div className="button home_button ml-auto mr-auto"><a href="#">Join Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Home;