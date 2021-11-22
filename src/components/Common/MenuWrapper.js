const MenuWrapper = () => {
    return (
        <div className="offcanvas-menu-wrapper">
            <div className="canvas-close">
                <i className="fa fa-close"></i>
            </div>
            <div className="canvas-search search-switch">
                <i className="fa fa-search"></i>
            </div>
            <nav className="canvas-menu mobile-menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/classes">Classes</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
            <div className="canvas-social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-youtube-play"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
        </div>
    );
}

export default MenuWrapper;