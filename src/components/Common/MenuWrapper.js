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
                    <li><Link to="/diets">Diets</Link></li>
                    <li><Link to="/exercises">Exercises</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
        </div>
    );
}

export default MenuWrapper;