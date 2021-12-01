import db from '../../../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { useState, useEffect } from "react";
import * as blogService from '../../../services/blogService';

const CreateArticleForm = () => {

    const [categories, setCategories] = useState([]);

    useEffect(
        () =>
            onSnapshot(collection(db, 'Categories'),
                (snapshot) =>
                    setCategories(snapshot.docs.map((doc) =>
                        ({ ...doc.data(), id: doc.id })))
                , []));

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, imageUrl, categoryId, content } = Object.fromEntries(formData);

        blogService.createNewArticle(title, imageUrl, content, categoryId);
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