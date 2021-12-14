import { useHistory, NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import * as authService from '../../services/authService';

const Header = () => {
    const history = useHistory();
    const currentUser = useAuth();

    const onLogoutHandler = async () => {
        try {
            await authService.logout();
            history.push('/');
        } catch (error) {
            alert(error.message);
        }
    }

    const loggedInUserNav =
        (<ul>
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
        );

        const guestNav = (
            <ul>
            <li>
                <NavLink to="/diets">Diets</NavLink>
            </li>
            <li>
                <NavLink to="/exercises">Exercises</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
        </ul>
        );

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
                            {currentUser
                                ? loggedInUserNav
                                : guestNav
                            }
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="top-option">
                            <div className="to-social">
                                {currentUser ?
                                    <>
                                        <NavLink to="/">Welcome, {currentUser.email}!
                                        </NavLink>
                                        <button
                                            className="btn btn-default"
                                            style={{ color: "white" }}
                                            onClick={onLogoutHandler}>
                                            Logout
                                        </button>
                                    </> :
                                    <>
                                        <NavLink to="/login">Login
                                        </NavLink>
                                        <NavLink to="/register">Register
                                        </NavLink>
                                    </>

                                }

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