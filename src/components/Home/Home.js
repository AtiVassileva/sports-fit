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
                                <div className="home_title">Get fit with us</div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;