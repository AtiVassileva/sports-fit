import ReactPaginate from 'react-paginate';
import Diet from "./Diet";
import { useState, useEffect } from "react";
import * as dietService from "../../../services/dietService";

const Main = () => {

    const [diets, setDiets] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);

    const dietsPerPage = 3;
    const pagesVisited = pageNumber * dietsPerPage;

    const displayDiets =
        diets
            .slice(pagesVisited, pagesVisited + dietsPerPage)
            .map(x => <Diet key={x.id} diet={x} />);

    const pageCount = Math.ceil(diets.length / dietsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        dietService.getAllDiets()
            .then(diets => setDiets(diets));
    }, []);

    return (
        <section className="services-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Feeling fluffy and want to lose weight?</span>
                            <h2>CHECK OUT OUR DIETS AND BOOST YOUR CONFIDENCE</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {displayDiets}
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"blog-pagination"}
                    disabledClassName={"disabled-btn"}
                />
            </div>
        </section>
    );
}

export default Main;