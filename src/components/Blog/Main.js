import Post from './Post';

const Main = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section_title_container">
                            <div className="section_subtitle">welcome to sportfit</div>
                            <div className="section_title">Blog</div>
                        </div>
                    </div>
                </div>
                <div className="row blog_row">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="button blog_button ml-auto mr-auto"><a href="#">Load More</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;