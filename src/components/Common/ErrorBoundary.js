import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.error) {
            return (
                <section className="section-404">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-404">
                                    <h1>404</h1>
                                    <h3>Opps! Page Not Found!</h3>
                                    <p>Sorry but the page you are looking for does not exist or has been removed.</p>
                                    <Link to="/">
                                        <i className="fa fa-home"></i>
                                        Go back home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;