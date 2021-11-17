import Article from './Article';

const RecentArticles = () => {
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
                            <div className="all_posts_link ml-auto"><a href="/blog">View all blog posts</a></div>
                        </div>
                    </div>
                </div>
                <div className="row blog_row">
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
            </div>
        </div>
    );
}

export default RecentArticles;