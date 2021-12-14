import Title from '../../Title';
import LoginForm from './LoginForm';
import { isGuest } from '../../../../hoc/isGuest';

const Login = () => {
    return (
        <div>
            <Title formType="Sign In Now"/>
            <LoginForm />
        </div>
    );
}

export default isGuest(Login);