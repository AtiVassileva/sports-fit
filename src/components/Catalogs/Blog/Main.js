import Post from "./Post";
import Pagination from "../Pagination";
import Categories from "./Categories";
import { useState, useEffect } from "react";
import * as blogService from "../../../services/blogService";

const Main = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let articles = blogService.getAllArticles();
        
        setTimeout(() => {
            setArticles(articles);
        }, 500);
    }, []);

    return (
        <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0">
                        {articles
                            .map(x =>
                                <Post
                                    key={x.id}
                                    article={x}
                                />
                            )
                        }

                        <Pagination appSection="blog" />
                    </div>
                    <Categories />
                </div>
            </div>
        </section>
    );
}

export default Main;