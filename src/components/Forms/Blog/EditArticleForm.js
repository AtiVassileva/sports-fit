import { useState, useEffect } from "react";
import * as blogService from '../../../services/blogService';

const EditArticleForm = ({
    id
}) => {

    const [currentArticle, setCurrentArticle] = useState({});

    useEffect(() => {
        blogService.findArticle(id)
            .then(article => {
                setCurrentArticle(article);
            })
    })

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, imageUrl, content } = Object.fromEntries(formData);

        blogService.editArticle(id, title, imageUrl, content);
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
                                onSubmit={submitHandler}
                            >
                                <input type="text"
                                    name="title"
                                    placeholder="Title" 
                                    defaultValue={currentArticle.title}
                                    />
                                <input type="url"
                                    name="imageUrl"
                                    placeholder="Image URL"
                                    defaultValue={currentArticle.imageUrl} 
                                    />
                                <textarea
                                    name="content"
                                    placeholder="Content"
                                    defaultValue={currentArticle.content}
                                    >
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

export default EditArticleForm;