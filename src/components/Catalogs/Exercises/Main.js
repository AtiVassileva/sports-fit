import Pagination from "../Pagination";
import { useState, useEffect } from "react";
import * as exerciseService from "../../../services/exerciseService";
import Exercise from "./Exercise";

const Main = () => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        let exercises = exerciseService.getAllExercises();

        setTimeout(() => {
            setExercises(exercises);
        }, 500);
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
                    {exercises.map(x =>
                        <Exercise
                            key={x.id}
                            exercise={x}
                        />
                    )}
                </div>
                <Pagination appSection="exercises" />
            </div>
        </section>
    );
}

export default Main;