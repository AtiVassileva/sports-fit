import * as dietService from '../../../services/dietService';

const CreateDietForm = () => {

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, imageUrl, description } = Object.fromEntries(formData);

        dietService.createNewDiet(name, imageUrl, description);
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
                                    onSubmit={submitHandler}>
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