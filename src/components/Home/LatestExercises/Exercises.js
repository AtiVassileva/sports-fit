import { useState, useEffect } from 'react';
import Exercise from './Exercise';
import * as exerciseService from '../../../services/exerciseService';

const Exercises = () => {

    const [latestExercises, setLatestExercises] = [];

    useEffect(() => {
        exerciseService.getLatestExercises()
            .then(res => console.log(res));
    })
    return (
        <section className="classes-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Exercises</span>
                            <h2>WHAT WE CAN OFFER</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Exercise />
                    <Exercise />
                    <Exercise />
                </div>
            </div>
        </section>
    );
}

export default Exercises;