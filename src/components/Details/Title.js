const Title = ({
    imageUrl,
    title
}) => {
    return (
        <section className="blog-details-hero set-bg"
            style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0 m-auto">
                        <div className="bh-text">
                            <h3>{title}</h3>
                            <ul>
                                <li>by Admin</li>
                                <li>Aug,15, 2019</li>
                                <li>20 Comment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Title;