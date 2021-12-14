import Title from '../../Title';
import RegisterForm from './RegisterForm';
import { isGuest } from '../../../../hoc/isGuest';

const Register = () => {
    return (
        <div>
            <Title formType="Sign Up Now"/>
            <RegisterForm />
        </div>
    );
}

export default isGuest(Register);