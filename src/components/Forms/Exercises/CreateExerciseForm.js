import {useAuth} from '../../../hooks/useAuth';

import { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

import {getCurrentDate} from '../../../utils/dateGetter';
import * as exerciseService from '../../../services/exerciseService';
import * as categoryService from '../../../services/categoryService';

const CreateExerciseForm = () => {
    const currentUser = useAuth();
    const history = useHistory();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoryService.getAllCategories()
        .then(categories => setCategories(categories));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, categoryId, description } = Object.fromEntries(formData);

        let author = currentUser.email;
        let date = getCurrentDate();
        
        exerciseService
        .createNewExercise(name, imageUrl, categoryId, 
            description, author, date)
        .then(res => history.push(`/exercises/details/${res.id}`));
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
                                onSubmit={submitHandler}
                            >
                                <input type="text"
                                    name="name"
                                    placeholder="Name" />
                                <input type="url"
                                    name="imageUrl"
                                    placeholder="Image URL" />
                                <select className="form-select"
                                    name="categoryId"
                                    aria-label="Default select example">
                                    <option defaultValue>Choose a category</option>
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
                                    placeholder="Description">
                                </textarea>
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