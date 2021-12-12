const Title = ({
    author,
    imageUrl,
    title, 
    date
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
                                <li>By: {author}</li>
                                <li>{date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Title;