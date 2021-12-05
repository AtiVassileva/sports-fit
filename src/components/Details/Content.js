import CommentSection from "./Blog/Comments/CommentSection";

const Content = ({
    content
}) => {
    return (
        <section className="blog-details-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0 m-auto">
                        <div className="blog-details-text">
                            <div className="blog-details-title">
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <CommentSection />
                </div>
            </div>
        </section>
    );
}

export default Content;