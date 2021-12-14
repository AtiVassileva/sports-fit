import { useAuth } from '../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

export const isAuthenticated = (Component) => {

    const WrapperComponent = (props) => {
        const {user} = useAuth();
        
        return user.email !== '' 
            ? <Component {...props} />
            : <Redirect to="/login" />
    }

    return WrapperComponent;
}