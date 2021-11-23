const LoginForm = () => {
    return (
        <section class="contact-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="leave-comment">
                        <form class="form">
                            <fieldset class="username">
                                <input type="text" placeholder="Username" />
                            </fieldset>
                            <fieldset class="password">
                                <input type="password" placeholder="Password" />
                            </fieldset>
                            <button type="submit" class="btn">sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default LoginForm;