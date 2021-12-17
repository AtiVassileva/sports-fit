import { useAuth } from '../../../hooks/useAuth';

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';

import { getCurrentDate } from '../../../utils/dateGetter';
import * as validator from '../../../utils/validator';
import { successfullyAddedExerciseMessage, invalidRequestMessage } 
from '../../../utils/notificationConstants';

import { useNotificationContext, types } from '../../../contexts/NotificationContext';

import * as exerciseService from '../../../services/exerciseService';
import * as categoryService from '../../../services/categoryService';

const CreateExerciseForm = () => {
    const currentUser = useAuth();
    const history = useHistory();

    const { addNotification } = useNotificationContext();

    const [errors, setErrors] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoryService.getAllCategories()
            .then(categories => setCategories(categories));
    }, []);

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
        let { name, imageUrl, categoryId, description } = Object.fromEntries(formData);

        if (!name || !imageUrl || !description) {
            return;
        }

        let author = currentUser.email;
        let date = getCurrentDate();

        exerciseService
            .createNewExercise(name, imageUrl, categoryId,
                description, author, date)
            .then(res => {
                addNotification(successfullyAddedExerciseMessage, types.success);
                history.push(`/exercises/details/${res.id}`);
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
                                New exercise
                            </h3>
                            <br />
                            <form action="/create-article"
                                method="post"
                                onSubmit={onSubmitHandler}
                            >
                                <input type="text"
                                    name="name"
                                    placeholder="Name"
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
                                    onChange={onImageUrlChangeHandler}
                                />
                                <Alert
                                    variant="danger"
                                    show={Boolean(errors.imageUrl)}>
                                    {errors.imageUrl}
                                </Alert>
                                <label style={{ color: "white" }}>Choose a category: &nbsp;</label>
                                <select className="form-select"
                                    name="categoryId"
                                    aria-label="Default select example">
                                    {categories
                                        .map(x =>
                                            <option
                                                key={x.id}
                                                value={x.id}>
                                                {x.name}
                                            </option>
                                        )}
                                </select>
                                <br />
                                <br />
                                <textarea
                                    name="description"
                                    placeholder="Description"
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

export default CreateExerciseForm;