const RegisterForm = () => {
    return (
        <section className="contact-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="leave-comment">
                        <form className="form">
                            <fieldset className="username">
                                <input type="text" placeholder="Username" />
                            </fieldset>
                            <fieldset className="email">
                                <input type="email" placeholder="Email" />
                            </fieldset>
                            <fieldset className="password">
                                <input type="password" placeholder="Password" />
                            </fieldset>
                            <fieldset className="confirmPassword">
                                <input type="confirmPassword" placeholder="Confirm Password" />
                            </fieldset>
                            <button type="submit" className="btn">sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default RegisterForm;