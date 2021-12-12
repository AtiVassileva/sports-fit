import { useAuth } from '../../../hooks/useAuth';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as blogService from '../../../services/blogService';
import * as categoryService from '../../../services/categoryService';

const CreateArticleForm = () => {
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
        let { title, imageUrl, categoryId, content } = Object.fromEntries(formData);

        let author = currentUser.email;

        let today = new Date();
        let date = today.getDate() + '/' + (today.getMonth() + 1) 
        + '/' + today.getFullYear();

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
                                onSubmit={submitHandler}
                            >
                                <input type="text"
                                    name="title"
                                    placeholder="Title" />
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
                                    name="content"
                                    placeholder="Content">
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

export default CreateArticleForm;