import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';

import * as validator from '../../../../utils/validator';
import { successfullyLoggedInMessage } from '../../../../utils/notificationConstants';

import * as authService from '../../../../services/authService';

import { AuthContext } from '../../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../../contexts/NotificationContext';

const LoginForm = () => {
    const history = useHistory();

    const [errors, setErrors] = useState({});

    const { saveUserData } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();

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

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (Object.values(errors).includes(x => x !== false)) {
            return;
        }

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        if (!email || !password) {
            return;
        }

        authService.login(email, password)
            .then(() => {
                saveUserData(email, password);
                addNotification(successfullyLoggedInMessage, types.success);
                history.push('/');
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
                                    <input type="text"
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