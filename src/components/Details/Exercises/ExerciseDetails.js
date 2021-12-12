import { useState, useEffect } from 'react';
import * as exerciseService from '../../../services/exerciseService';
import Content from "../Content";
import Title from "../Title";

const ExerciseDetails = ({
    match
}) => {

    const [exercise, setExercise] = useState({});

    useEffect(() => {
        let id = match.params.id;

        exerciseService.findExercise(id)
        .then(exercise => {
            setExercise(exercise);
        });
    }, [match.params.id]);


    return (
        <div>
            <Title 
                author={exercise.author}
                imageUrl={exercise.imageUrl}
                title={exercise.name}
                date={exercise.date}
            />
            <Content
            author={exercise.author}
            content={exercise.description}
            path="/exercises"
            id={match.params.id}
            />
        </div>
    );
}

export default ExerciseDetails;