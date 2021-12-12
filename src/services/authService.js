import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }
    from "@firebase/auth";

const auth = getAuth();

export const register = (email, password) => 
createUserWithEmailAndPassword(auth, email, password);


export const login = (email, password) => 
signInWithEmailAndPassword(auth, email, password);


export const logout = () => signOut();