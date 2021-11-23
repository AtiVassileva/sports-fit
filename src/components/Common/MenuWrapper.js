import { Link } from 'react-router-dom';

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/classes">Classes</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
            <div className="canvas-social">
                <Link to="#"><i className="fa fa-facebook"></i></Link>
                <Link to="#"><i className="fa fa-twitter"></i></Link>
                <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                <Link to="#"><i className="fa fa-instagram"></i></Link>
            </div>
        </div>
    );
}

export default MenuWrapper;