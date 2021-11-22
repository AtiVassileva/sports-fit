const Header = () => {
    
    const onHeaderClick = (e) => {
        e.preventDefault();
    }
    
    return (
        <header onClick={onHeaderClick}
        className="header-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="./index.html">
                                    <img src="/img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="nav-menu">
                                <ul>
                                    <li className="active"><a href="/">Home</a></li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/classes">Classes</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="top-option">
                                <div className="to-social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas-open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
    );
}

export default Header;