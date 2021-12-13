import Post from "./Post";
import Pagination from "../Pagination";
import { useState, useEffect } from "react";
import * as blogService from "../../../services/blogService";

const Main = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        blogService.getAllArticles()
        .then(articles => setArticles(articles));
    }, []);

    return (
        <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0">
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
                </div>
            </div>
        </section>
    );
}

export default Main;