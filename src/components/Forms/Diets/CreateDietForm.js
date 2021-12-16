import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';

import { useAuth } from '../../../hooks/useAuth';

import * as validator from '../../../utils/validator';
import * as dietService from '../../../services/dietService';
import { getCurrentDate } from '../../../utils/dateGetter';

const CreateDietForm = () => {
    const currentUser = useAuth();
    const history = useHistory();

    const [errors, setErrors] = useState({});

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

        console.log(errors);
        if (Object.values(errors).includes(x => x !== false)
        || errors === {}) {
            return;
        }

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, description } = Object.fromEntries(formData);

        if (!name || !imageUrl || !description) {
            return;
        }
        
        let author = currentUser.email;
        let date = getCurrentDate();

        dietService.createNewDiet(name, imageUrl, description, author, date)
            .then(res => history.push(`/diets/details/${res.id}`));
    }

    return (
        <div>
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="leave-comment">
                                <h3
                                    style={{ color: "white" }}>
                                    New diet
                                </h3>
                                <br />
                                <form action="/create-diet" method="post"
                                    onSubmit={onSubmitHandler}>
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
        </div>
    );
}

export default CreateDietForm;