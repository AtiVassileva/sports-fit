import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
    const auth = getAuth();
    const [user, setUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setUser(user));
        return unsub;
    }, [auth]);

    return user;
}