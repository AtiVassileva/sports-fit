const CreateArticleForm = () => {
    return (
        <section class="contact-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="leave-comment">
                            <form action="/create-article" method="post">
                                <input type="text" 
                                name="title"
                                placeholder="Title" />
                                <input type="url" 
                                name="imageUrl"
                                placeholder="Image URL" />
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