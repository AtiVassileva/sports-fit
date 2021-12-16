import { createContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = {
    email: '',
};

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);

    const saveUserData = (email, password) => {
        localStorage.setItem('email', email);
        setUser({
            email: email,
        });
    };

    const clearUserData = () => {
        localStorage.removeItem('email');
        setUser(initialState);
    };

    return (
        <AuthContext.Provider value={{ user, saveUserData, clearUserData }}>
            {children}
        </AuthContext.Provider>
    );
}