import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import * as validator from '../../../utils/validator';
import * as dietService from '../../../services/dietService';

const EditDietForm = ({
    id
}) => {
    const history = useHistory();

    const [currentDiet, setCurrentDiet] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dietService.findDiet(id)
            .then(diet => {
                setCurrentDiet(diet);
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

        dietService.editDiet(id, name, imageUrl, description)
        .then(history.push(`/diets/details/${id}`));
    }

    return (
        <div>
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="leave-comment">
                                <form 
                                action={`/diets/edit/${id}`}
                                method="post"
                                    onSubmit={onSubmitHandler}>
                                    <input type="text"
                                        name="name"
                                        placeholder="Name"
                                        defaultValue={currentDiet.name}
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
                                        defaultValue={currentDiet.imageUrl}
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
                                        defaultValue={currentDiet.description}
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
        </div>
    );
}

export default EditDietForm;