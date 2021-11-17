const Header = () => {
    
    const onHeaderClick = (e) => {
        e.preventDefault();
    }
    
    return (
        <header onClick={onHeaderClick}
        className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header_content d-flex flex-row align-items-center justify-content-start trans_400">
                            <a>
                                <div className="logo d-flex flex-row align-items-center justify-content-start"><img src="images/dot.png" alt="" /><div>Sport<span>fit</span></div></div>
                            </a>
                            <nav className="main_nav">
                                <ul className="d-flex flex-row align-items-center justify-content-start">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="services.html">Classes & Services</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="phone d-flex flex-row align-items-center justify-content-start ml-auto">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <div>652-345 3222 11</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;