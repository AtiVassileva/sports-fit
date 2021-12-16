import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';

import * as validator from '../../../../utils/validator';
import * as authService from '../../../../services/authService';

const RegisterForm = () => {
    const history = useHistory();
    const [errors, setErrors] = useState({});

    const onEmailChangeHandler = (e) => {
        let error = validator.validateEmail(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, email: error }))
            : setErrors(state => ({ ...state, email: false }));
    };

    const onPasswordChangeHandler = (e) => {
        let error = validator.validatePassword(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, password: error }))
            : setErrors(state => ({ ...state, password: false }));
    };

    const onConfirmPasswordChangeHandler = (e) => {
        let confirmPassword = e.target.value;
        let password = e.target.parentNode.parentNode['password'].value;

        let error = validator
        .validatePasswordAndConfirmPassword(password, confirmPassword);

        error !== null ?
            setErrors(state => ({ ...state, confirmPassword: error }))
            : setErrors(state => ({ ...state, confirmPassword: false }));
    };


    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (Object.values(errors).includes(x => x !== false)) {
            return;
        }

        let formData = new FormData(e.currentTarget);

        let { email, password, confirmPassword } = Object.fromEntries(formData);

        if (!email || !password || !confirmPassword || password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(history.push('/login'));

    }
    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="leave-comment">
                            <h3 style={{ color: "white" }}> Sign up </h3>
                            <br />
                            <form className="form" onSubmit={onSubmitHandler}>
                                <fieldset className="email">
                                    <input type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={onEmailChangeHandler}
                                    />
                                    <Alert variant="danger"
                                        show={Boolean(errors.email)}>
                                        {errors.email}
                                    </Alert>
                                </fieldset>
                                <fieldset className="password">
                                    <input type="password" placeholder="Password"
                                        name="password"
                                        onChange={onPasswordChangeHandler}
                                    />
                                    <Alert variant="danger"
                                        show={Boolean(errors.password)}>
                                        {errors.password}
                                    </Alert>
                                </fieldset>
                                <fieldset className="confirmPassword">
                                    <input type="password" placeholder="Confirm Password"
                                        name="confirmPassword"
                                        onChange={onConfirmPasswordChangeHandler}
                                    />
                                    <Alert variant="danger"
                                        show={Boolean(errors.confirmPassword)}>
                                        {errors.confirmPassword}
                                    </Alert>
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