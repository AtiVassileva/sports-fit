import Post from "./Post";
import Pagination from "../Pagination";
import Categories from "./Categories";

const Main = () => {
    return (
        <section class="blog-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 p-0">
                        <Post
                            imageUrl="img/blog/blog-1.jpg"
                            title="Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
                            author="By Admin"
                            date="Aug,15, 2019"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                            labore et dolore magna aliqua accumsan lacus facilisis."
                        />
                        <Post
                            imageUrl="img/blog/blog-2.jpg"
                            title="Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
                            author="By Admin"
                            date="Aug,15, 2019"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                            labore et dolore magna aliqua accumsan lacus facilisis."
                        />
                        <Post
                            imageUrl="img/blog/blog-3.jpg"
                            title="Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
                            author="By Admin"
                            date="Aug,15, 2019"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                            labore et dolore magna aliqua accumsan lacus facilisis."
                        />
                        <Post
                            imageUrl="img/blog/blog-4.jpg"
                            title="Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
                            author="By Admin"
                            date="Aug,15, 2019"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                            labore et dolore magna aliqua accumsan lacus facilisis."
                        />
                        <Post
                            imageUrl="img/blog/blog-5.jpg"
                            title="Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
                            author="By Admin"
                            date="Aug,15, 2019"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                            labore et dolore magna aliqua accumsan lacus facilisis."
                        />
                        
                        <Pagination appSection="blog"/>
                    </div>
                    <Categories/>
                </div>
            </div>
        </section>
    );
}

export default Main;