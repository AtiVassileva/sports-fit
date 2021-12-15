import { useUserData } from '../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

export const isGuest = (Component) => {
    const WrapperComponent = (props) => {
        const {user} = useUserData();
        
        return user.email === ''
            ? <Component {...props} />
            : <Redirect to="/" />
    }

    return WrapperComponent;
}