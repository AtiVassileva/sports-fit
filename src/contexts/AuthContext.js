import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = {
    email: '',
};

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);

    const saveUserData = (email, password) => {
        setUser({
            email: email,
        });
    };

    const clearUserData = () => {
        setUser(initialState);
    };

    return (
        <AuthContext.Provider value={{ user, saveUserData, clearUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useUserData = () => {
    const authState = useContext(AuthContext);
    return authState;
}