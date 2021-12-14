import { useAuth } from '../hooks/useAuth';
import { Redirect } from 'react-router-dom';

export const isAuthenticated = (Component) => {
    const WrapperComponent = (props) => {
        const currentUser = useAuth();

        return currentUser
            ? <Component {...props} />
            : <Redirect to="/login" />
    }

    return WrapperComponent;
}