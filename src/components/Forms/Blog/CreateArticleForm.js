import { useAuth } from '../../../hooks/useAuth';

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';

import { getCurrentDate } from '../../../utils/dateGetter';
import * as validator from '../../../utils/validator';

import * as blogService from '../../../services/blogService';
import * as categoryService from '../../../services/categoryService';

const CreateArticleForm = () => {
    const currentUser = useAuth();
    const history = useHistory();

    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({})

    useEffect(() => {
        categoryService.getAllCategories()
            .then(categories => setCategories(categories));
    }, []);

    const onTitleChangeHandler = (e) => {
        let error = validator.validateTitle(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, title: error }))
            : setErrors(state => ({ ...state, title: false }));
    };

    const onImageUrlChangeHandler = (e) => {
        let error = validator.validateImageUrl(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, imageUrl: error }))
            : setErrors(state => ({ ...state, imageUrl: false }));
    }

    const onContentChangeHandler = (e) => {
        let error = validator.validateContent(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, content: error }))
            : setErrors(state => ({ ...state, content: false }));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (errors !== {}) {
            return;
        }

        let formData = new FormData(e.currentTarget);
        let { title, imageUrl, categoryId, content } = Object.fromEntries(formData);

        let author = currentUser.email;
        let date = getCurrentDate();

        blogService.createNewArticle(title, imageUrl, content, categoryId, author, date)
            .then(res => history.push(`/blog/details/${res.id}`));
    }

    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="leave-comment">
                            <h3
                                style={{ color: "white" }}>
                                New article
                            </h3>
                            <br />
                            <form action="/create-article"
                                method="post"
                                onSubmit={onSubmitHandler}
                            >
                                <input type="text"
                                    name="title"
                                    placeholder="Title"
                                    onChange={onTitleChangeHandler}
                                />
                                <Alert variant="danger"
                                    show={Boolean(errors.title)}>
                                    {errors.title}
                                </Alert>
                                <input type="url"
                                    name="imageUrl"
                                    placeholder="Image URL"
                                    onChange={onImageUrlChangeHandler}
                                />
                                <Alert variant="danger"
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
                                    name="content"
                                    placeholder="Content"
                                    onChange={onContentChangeHandler}
                                >
                                </textarea>
                                <Alert variant="danger"
                                    show={Boolean(errors.content)}>
                                    {errors.content}
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

export default CreateArticleForm;