const Title = () => {
    return (
        <div className="home">
            <div className="background_image" style={{ backgroundImage: "url(images/blog_page.jpg)" }}></div>
            <div className="overlay"></div>
            <div className="home_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="home_content">
                                <div className="home_title">Blog</div>
                                <div className="home_subtitle">Pilates, Yoga, Fitness, Spinning & many more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;