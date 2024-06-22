import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider(null);

const AuthProvider = ({children}) => {
    const [registerUser, setRegisterUser] = useState(null);
    const [loading, setLaoding] = useState(true);

    const createUser = (email, password) => {
        setLaoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
   
    const signInUser = (email, password) => {
        setLaoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google
    const signInWithGoogle = () => {
        setLaoding(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLaoding(true);
        return signOut(auth);
    }

    useEffect(()=> {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setRegisterUser(currentUser);
            console.log('observing current user', currentUser)
            setLaoding(false)
        });

        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        registerUser,
        loading,
        createUser,
        signInUser, 
        signInWithGoogle, logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;