import { Link } from 'react-router-dom';

const Title = ({
    formType
}) => {
    return (
        <section className="breadcrumb-section set-bg"
        style={{ backgroundImage: "url('img/hero/hero-2.jpg')"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb-text">
                            <h2>{formType}</h2>
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