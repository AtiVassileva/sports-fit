import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";
import * as exerciseService from "../../../services/exerciseService";
import Exercise from "./Exercise";

const Main = () => {

    const [exercises, setExercises] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);

    const exercisesPerPage = 2;
    const pagesVisited = pageNumber * exercisesPerPage;

    const displayExercises =
        exercises
            .slice(pagesVisited, pagesVisited + exercisesPerPage)
            .map(x => <Exercise key={x.id} exercise={x} />);

    const pageCount = Math.ceil(exercises.length / exercisesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        exerciseService.getAllExercises()
            .then(exercises => setExercises(exercises));
    }, []);

    return (
        <section className="services-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Workout time</span>
                            <h2>CHECK OUT OUR EXERCISES</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {displayExercises}
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