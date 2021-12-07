import { Link } from 'react-router-dom';

const Title = () => {
    return (<section className="breadcrumb-section set-bg"
        style={{ backgroundImage: `url("img/breadcrumb-bg.jpg")` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb-text">
                        <h2>About us</h2>
                        <div className="bt-option">
                            <Link to="/">Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Title;