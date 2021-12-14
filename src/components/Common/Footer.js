import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Footer = () => {
    const currentUser = useAuth();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="fs-about">
                            <div className="fa-logo">
                                <Link to="/"><img src="img/logo.png" alt="" />
                                </Link>
                            </div>
                            <p>" You can train the same voice that says give up <br /> to say keep going."</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="fs-widget">
                            <h4>Useful links</h4>
                            <ul>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/diets">Diets</Link></li>
                                <li><Link to="/exercises">Exercises</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="fs-widget">
                            <h4>Support</h4>
                            <ul>
                                {!currentUser
                                    ?
                                    <>
                                        <li>
                                            <Link to="/register">Register</Link>
                                        </li>
                                        <li>
                                            <Link to="/login">Login</Link>
                                        </li>
                                    </>
                                    : 
                                    <>
                                    </>
                            }
                                <li>
                                    <Link to="/about">About us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="copyright-text">
                            <p>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;