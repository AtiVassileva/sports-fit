const CreateArticle = () => {
    return (
        <div>
            <div className="home">
                <div className="background_image" style={{ backgroundImage: "url(images/contact.jpg)"}}></div>
                <div className="overlay"></div>
                <div className="home_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_content">
                                    <div className="home_title">New Article</div>
                                    <div className="home_subtitle">Fitness, Diets & many more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact_content">
                                <div className="contact_logo">
                                    <div className="logo d-flex flex-row align-items-center justify-content-start"><img src="images/dot.png" alt="" /><div>Sport<span>fit</span></div></div>
                                </div>
                                <div className="contact_text">
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Odio vestibulum est mattis effic iturut.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 contact_col">
                            <div className="contact_title">Get in touch</div>
                            <div className="contact_form_container">
                                <form action="#" id="contact_form" className="contact_form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="input_item"><input type="text" className="contact_input trans_200" placeholder="Name" required="required"/></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input_item"><input type="email" className="contact_input trans_200" placeholder="E-mail" required="required"/></div>
                                        </div>
                                    </div>
                                    <div className="input_item"><textarea className="contact_input contact_textarea trans_200" placeholder="Message" required="required"></textarea></div>
                                    <button className="contact_button button">Send<span></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateArticle;