import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = {
    email: ''
};

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);

    const saveUserData = (email, password) => {
        setUser({
            email: email
        });
    }

    return (
        <AuthContext.Provider value={{ user, saveUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authState = useContext(AuthContext);
    return authState;
}