import Post from "./Post";
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";
import * as blogService from "../../../services/blogService";

const Main = () => {

    const [articles, setArticles] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const articlesPerPage = 2;
    const pagesVisited = pageNumber * articlesPerPage;

    const displayArticles =
        articles
            .slice(pagesVisited, pagesVisited + articlesPerPage)
            .map(x => <Post key={x.id} article={x} />);

    const pageCount = Math.ceil(articles.length / articlesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        blogService.getAllArticles()
            .then(articles => setArticles(articles));
    }, []);

    return (
        <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        {displayArticles}
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"blog-pagination"}
                            disabledClassName={"disabled-btn"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;