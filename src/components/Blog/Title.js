import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <section class="breadcrumb-section set-bg" style={{ backgroundImage: "url('img/breadcrumb-bg.jpg')"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="breadcrumb-text">
                            <h2>Our Blog</h2>
                            <div class="bt-option">
                                <Link to="/">Home</Link>
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Title;