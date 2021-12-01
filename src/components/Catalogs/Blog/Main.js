import Post from "./Post";
import Pagination from "../Pagination";
import Categories from "./Categories";
import { useState, useEffect } from "react";
import * as blogService from "../../../services/blogService";

const Main = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let allArticles = blogService.getAllArticles();
        setArticles(allArticles);
        console.log(articles);
    }, []);

    return (
        <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0">
                        { blogService.getAllArticles().map(x =>
                            <div>{x.title}</div>
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