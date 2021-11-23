import { Link } from 'react-router-dom';

const Title = ({
    formType
}) => {
    return (
        <section class="breadcrumb-section set-bg"
        style={{ backgroundImage: "url('img/hero/hero-2.jpg')"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="breadcrumb-text">
                            <h2>{formType}</h2>
                            <div class="bt-option">
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