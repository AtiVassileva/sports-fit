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
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="comment-option">
                                            <h5 className="co-title">Comment</h5>
                                            <div className="co-item">
                                                <div className="co-widget">
                                                    <a href="#"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#"><i className="fa fa-share-square-o"></i></a>
                                                </div>
                                                <div className="co-pic">
                                                    <img src="/img/blog/details/comment-1.jpg" alt="" />
                                                    <h5>Brandon Kelley</h5>
                                                </div>
                                                <div className="co-text">
                                                    <p>Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetur,
                                                        adipisci velit dolore.</p>
                                                </div>
                                            </div>
                                            <div className="co-item reply-comment">
                                                <div className="co-widget">
                                                    <a href="#"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#"><i className="fa fa-share-square-o"></i></a>
                                                </div>
                                                <div className="co-pic">
                                                    <img src="/img/blog/details/comment-2.jpg" alt="" />
                                                    <h5>Brandon Kelley</h5>
                                                </div>
                                                <div className="co-text">
                                                    <p>Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetur,
                                                        adipisci velit dolore.</p>
                                                </div>
                                            </div>
                                            <div className="co-item">
                                                <div className="co-widget">
                                                    <a href="#"><i className="fa fa-heart-o"></i></a>
                                                    <a href="#"><i className="fa fa-share-square-o"></i></a>
                                                </div>
                                                <div className="co-pic">
                                                    <img src="/img/blog/details/comment-3.jpg" alt="" />
                                                    <h5>Brandon Kelley</h5>
                                                </div>
                                                <div className="co-text">
                                                    <p>Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetur,
                                                        adipisci velit dolore.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="leave-comment">
                                            <h5>Leave a comment</h5>
                                            <form action="#">
                                                <input type="text" placeholder="Name" />
                                                <input type="text" placeholder="Email" />
                                                <input type="text" placeholder="Website" />
                                                <textarea placeholder="Comment">

                                                </textarea>
                                                <button type="submit">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Content;