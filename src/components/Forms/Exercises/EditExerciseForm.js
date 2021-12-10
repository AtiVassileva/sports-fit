import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as exerciseService from '../../../services/exerciseService';

const EditExerciseForm = ({
    id
}) => {
    const history = useHistory();
    const [currentExercise, setCurrentExercise] = useState({});

    useEffect(() => {
        exerciseService.findExercise(id)
            .then(exercise => {
                setCurrentExercise(exercise);
            });
    })

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, description } = Object.fromEntries(formData);

        exerciseService.editExercise(id, name, imageUrl, description);
        history.push(`/exercises/details/${id}`);
    }

    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="leave-comment">
                            <h3
                                style={{ color: "white" }}>
                                Edit exercise
                            </h3>
                            <br />
                            <form
                                method="post"
                                onSubmit={submitHandler}
                            >
                                <input type="text"
                                    name="name"
                                    placeholder="Name" 
                                    defaultValue={currentExercise.name}
                                    />
                                <input type="url"
                                    name="imageUrl"
                                    placeholder="Image URL" 
                                    defaultValue={currentExercise.imageUrl}
                                    />
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    defaultValue={currentExercise.description}
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

export default EditExerciseForm;