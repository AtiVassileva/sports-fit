import { useHistory } from "react-router-dom";
import * as authService from '../../../../services/authService';

const RegisterForm = () => {
    const history = useHistory();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { email, password, confirmPassword } = Object.fromEntries(formData);

        if (!email.includes('@')) {
            //TODO: Validation
        }
        if (password !== confirmPassword) {
            //TODO: Validation
        }

        try {
            await authService.register(email, password);
            history.push('/login');
        } catch (error) {
            console.log(error);
            alert(error.message);
        }

    }
    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="leave-comment">
                            <form className="form" onSubmit={onSubmitHandler}>
                                <fieldset className="email">
                                    <input type="email"
                                        placeholder="Email"
                                        name="email"
                                    />
                                </fieldset>
                                <fieldset className="password">
                                    <input type="password" placeholder="Password"
                                        name="password"
                                    />
                                </fieldset>
                                <fieldset className="confirmPassword">
                                    <input type="password" placeholder="Confirm Password"
                                        name="confirmPassword"
                                    />
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