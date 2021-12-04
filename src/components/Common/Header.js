import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <NavLink to="/">
                                <img src="/img/logo.png" alt="" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="nav-menu">
                            <ul>
                                <li>
                                    <NavLink to="/diets">Diets</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/create-diet">New Diet</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/exercises">Exercises</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/create-exercise">New Exercise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/create-article">New Article</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="top-option">
                            <div className="to-social">
                                <NavLink to="/login">Login
                                </NavLink>
                                <NavLink to="/register">Register
                                </NavLink>
                                
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