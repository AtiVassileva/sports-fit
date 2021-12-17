import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';

import { successfullyEditedExerciseMessage, invalidRequestMessage } 
from '../../../utils/notificationConstants';
import * as validator from '../../../utils/validator';

import { useNotificationContext, types } from '../../../contexts/NotificationContext';

import * as exerciseService from '../../../services/exerciseService';

const EditExerciseForm = ({
    id
}) => {
    const history = useHistory();

    const { addNotification } = useNotificationContext();

    const [errors, setErrors] = useState({});
    const [currentExercise, setCurrentExercise] = useState({});

    useEffect(() => {
        exerciseService.findExercise(id)
            .then(exercise => {
                setCurrentExercise(exercise);
            });
    }, [id]);

    const onNameChangeHandler = (e) => {
        let error = validator.validateName(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, name: error }))
            : setErrors(state => ({ ...state, name: false }));
    };

    const onImageUrlChangeHandler = (e) => {
        let error = validator.validateImageUrl(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, imageUrl: error }))
            : setErrors(state => ({ ...state, imageUrl: false }));
    };

    const onDescriptionChangeHandler = (e) => {
        let error = validator.validateDescription(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, description: error }))
            : setErrors(state => ({ ...state, description: false }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (Object.values(errors).includes(x => x !== false)) {
            return;
        }

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, description } = Object.fromEntries(formData);

        if (!name || !imageUrl || !description) {
            return;
        }

        // // dietService.editDiet(id, name, imageUrl, description)
        // // .then(res => {
        // //     addNotification(successfullyEditedDietMessage, types.success);
        // //     history.push(`/diets/details/${id}`);
        // // })
        // .catch(error => addNotification(invalidRequestMessage));

        exerciseService.editExercise(id, name, imageUrl, description)
        .then(res => {
            addNotification(successfullyEditedExerciseMessage, types.success);
            history.push(`/exercises/details/${id}`);
        })
        .catch(error => addNotification(invalidRequestMessage));
    }

    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="leave-comment">
                            <h3
                                style={{ color: "white" }}>
                                Edit exercise
                            </h3>
                            <br />
                            <form
                                method="post"
                                onSubmit={onSubmitHandler}
                            >
                                <input type="text"
                                    name="name"
                                    placeholder="Name"
                                    defaultValue={currentExercise.name}
                                    onChange={onNameChangeHandler}
                                />
                                <Alert
                                    variant="danger"
                                    show={Boolean(errors.name)}>
                                    {errors.name}
                                </Alert>
                                <input type="url"
                                    name="imageUrl"
                                    placeholder="Image URL"
                                    defaultValue={currentExercise.imageUrl}
                                    onChange={onImageUrlChangeHandler}
                                />
                                <Alert
                                    variant="danger"
                                    show={Boolean(errors.imageUrl)}>
                                    {errors.imageUrl}
                                </Alert>
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    defaultValue={currentExercise.description}
                                    onChange={onDescriptionChangeHandler}
                                >
                                </textarea>
                                <Alert
                                    variant="danger"
                                    show={Boolean(errors.description)}>
                                    {errors.description}
                                </Alert>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditExerciseForm;