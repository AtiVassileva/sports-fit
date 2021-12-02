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
            <section class="contact-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="leave-comment">
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