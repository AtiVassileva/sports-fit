import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';

import { successfullyEditedArticleMessage, invalidRequestMessage } from '../../../utils/notificationConstants';

import { useNotificationContext, types } from '../../../contexts/NotificationContext';

import * as validator from '../../../utils/validator';
import * as blogService from '../../../services/blogService';

const EditArticleForm = ({
    id,
}) => {
    const history = useHistory();
    const { addNotification } = useNotificationContext();

    const [currentArticle, setCurrentArticle] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        blogService.findArticle(id)
            .then(article => {
                setCurrentArticle(article);
            });
    }, [id]);

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
    };

    const onContentChangeHandler = (e) => {
        let error = validator.validateContent(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, content: error }))
            : setErrors(state => ({ ...state, content: false }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (Object.values(errors).includes(x => x !== false)) {
            return;
        }

        let formData = new FormData(e.currentTarget);
        let { title, imageUrl, content } = Object.fromEntries(formData);

        if (!title || !imageUrl || !content) {
            return;
        }

        blogService.editArticle(id, title, imageUrl, content)
            .then(res => {
                addNotification(successfullyEditedArticleMessage, types.success);
                history.push(`/blog/details/${id}`);
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
                            Edit article
                        </h3>
                        <br />
                        <form
                            method="post"
                            onSubmit={onSubmitHandler}
                        >
                            <input type="text"
                                name="title"
                                placeholder="Title"
                                defaultValue={currentArticle.title}
                                onChange={onTitleChangeHandler}
                            />
                            <Alert variant="danger"
                                show={Boolean(errors.title)}>
                                {errors.title}
                            </Alert>
                            <input type="url"
                                name="imageUrl"
                                placeholder="Image URL"
                                defaultValue={currentArticle.imageUrl}
                                onChange={onImageUrlChangeHandler}
                            />
                            <Alert variant="danger"
                                show={Boolean(errors.imageUrl)}>
                                {errors.imageUrl}
                            </Alert>
                            <textarea
                                name="content"
                                placeholder="Content"
                                defaultValue={currentArticle.content}
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

export default EditArticleForm;