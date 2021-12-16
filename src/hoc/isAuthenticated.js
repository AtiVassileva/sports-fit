import { Redirect } from 'react-router-dom';

export const isAuthenticated = (Component) => {

    const WrapperComponent = (props) => {
        const userEmail = localStorage.getItem('email');
        
        return userEmail 
            ? <Component {...props} />
            : <Redirect to="/login" />
    }

    return WrapperComponent;
}