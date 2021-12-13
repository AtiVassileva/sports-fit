import { useHistory } from "react-router-dom";
import * as authService from '../../../../services/authService';

const LoginForm = () => {
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        console.log('logged');
        authService.login(email, password)
            .then(res => {
                console.log(res);
                history.push('/')
            });

    }
    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="leave-comment">
                            <h3 style={{ color: "white" }}> Sign in </h3>
                            <br />
                            <form className="form" onSubmit={onSubmitHandler}>
                                <fieldset className="email">
                                    <input type="text" placeholder="Email"
                                        name="email"
                                    />
                                </fieldset>
                                <fieldset className="password">
                                    <input type="password" placeholder="Password"
                                        name="password"
                                    />
                                </fieldset>
                                <button type="submit" className="btn">sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;