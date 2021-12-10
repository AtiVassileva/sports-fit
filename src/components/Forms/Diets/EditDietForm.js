import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import * as dietService from '../../../services/dietService';

const EditDietForm = ({
    id
}) => {
    const history = useHistory();
    const [currentDiet, setCurrentDiet] = useState({});

    useEffect(() => {
        dietService.findDiet(id)
            .then(diet => {
                setCurrentDiet(diet);
            });
    })

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, description } = Object.fromEntries(formData);

        dietService.editDiet(id, name, imageUrl, description);
        history.push(`/diets/details/${id}`);
    }

    return (
        <div>
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="leave-comment">
                                <form method="post"
                                    onSubmit={submitHandler}>
                                    <input type="text"
                                        name="name"
                                        placeholder="Name"
                                        defaultValue={currentDiet.name} />
                                    <input type="url"
                                        name="imageUrl"
                                        placeholder="Image URL"
                                        defaultValue={currentDiet.imageUrl} />
                                    <textarea
                                        name="description"
                                        placeholder="Description"
                                        defaultValue={currentDiet.description}>
                                    </textarea>
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