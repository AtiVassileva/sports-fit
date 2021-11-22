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
                            <h2>New {formType}</h2>
                            <div class="bt-option">
                                <a href="/">Home</a>
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