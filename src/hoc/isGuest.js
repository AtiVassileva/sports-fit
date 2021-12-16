import { Redirect } from 'react-router-dom';

export const isGuest = (Component) => {
    const WrapperComponent = (props) => {
        const userEmail = localStorage.getItem('email');
        
        return !userEmail
            ? <Component {...props} />
            : <Redirect to="/" />
    }

    return WrapperComponent;
}