import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as exerciseService from '../../../services/exerciseService';

import Content from "../Content";
import Title from "../Title";
import ErrorPage from '../../Common/ErrorPage';

const ExerciseDetails = ({
    match
}) => {
    const history = useHistory();

    const [exercise, setExercise] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        let id = match.params.id;

        exerciseService.findExercise(id)
            .then(exercise => {
                exercise === undefined
                    ? setError(true)
                    : setExercise(exercise);
            })
            .catch(error => history.push('/404'));

        setExercise({});
    }, [history, match.params.id]);

    if (error) {
        return <ErrorPage/>
    }

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