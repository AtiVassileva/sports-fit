import { useAuth } from '../../../hooks/useAuth';
import { useHistory } from "react-router-dom";

import * as dietService from '../../../services/dietService';
import {getCurrentDate} from '../../../utils/dateGetter';

const CreateDietForm = () => {
    const currentUser = useAuth();
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, description } = Object.fromEntries(formData);

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
                                            placeholder="Name" />
                                        <input type="url"
                                            name="imageUrl"
                                            placeholder="Image URL" />
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
            </div>
    );
}

export default CreateDietForm;