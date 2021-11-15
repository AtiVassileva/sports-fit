const Blog = () => {
    return (
        <div className="blog">
            <div className="blog_overlay"></div>
            <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/blog.jpg" data-speed="0.8"></div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className=" d-flex flex-row align-items-start justify-content-start">
                            <div className="section_title_container">
                                <div className="section_subtitle">welcome to sportfit</div>
                                <div className="section_title">The Blog</div>
                            </div>
                            <div className="all_posts_link ml-auto"><a href="#">View all blog posts</a></div>
                        </div>
                    </div>
                </div>
                <div className="row blog_row">

                    <div className="col-lg-4 blog_col">
                        <div className="blog_post">
                            <div className="blog_post_image"><img src="images/blog_1.jpg" alt="" /></div>
                            <div className="blog_post_title"><a href="#">Tips for the perfect body</a></div>
                            <div className="blog_post_date"><a href="#">june 29, 2018</a></div>
                            <div className="blog_post_text">
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Odio vestibulum est mattis effic iturut.</p>
                            </div>
                            <div className="blog_post_link"><a href="#">Read More</a></div>
                        </div>
                    </div>

                    <div className="col-lg-4 blog_col">
                        <div className="blog_post">
                            <div className="blog_post_image"><img src="images/blog_2.jpg" alt="" /></div>
                            <div className="blog_post_title"><a href="#">Tips for the perfect body</a></div>
                            <div className="blog_post_date"><a href="#">june 29, 2018</a></div>
                            <div className="blog_post_text">
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Odio vestibulum est mattis effic iturut.</p>
                            </div>
                            <div className="blog_post_link"><a href="#">Read More</a></div>
                        </div>
                    </div>

                    <div className="col-lg-4 blog_col">
                        <div className="blog_post">
                            <div className="blog_post_image"><img src="images/blog_3.jpg" alt="" /></div>
                            <div className="blog_post_title"><a href="#">Video: Pilates 4 Begginers</a></div>
                            <div className="blog_post_date"><a href="#">june 29, 2018</a></div>
                            <div className="blog_post_text">
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Odio vestibulum est mattis effic iturut.</p>
                            </div>
                            <div className="blog_post_link"><a href="#">Read More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;