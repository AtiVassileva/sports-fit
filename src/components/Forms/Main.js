const Main = () => {
    return (
        <section class="contact-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="leave-comment">
                            <form action="/create-article" method="post">
                                <input type="text" placeholder="Title" />
                                <textarea placeholder="Content">          
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

export default Main;