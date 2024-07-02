import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, 
    // signOut 
    } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider(null);
const githubProvider = new GithubAuthProvider(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLaoding] = useState(true);

    // create a user
    const createUser = (email, password) => {
        setLaoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
   
    const signInUser = (email, password) => {
        setLaoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update a user
    const updateUser = (profileUpdates) => {
        setLaoding(true);
        return updateProfile(auth.currentUser, profileUpdates);
    }

    // Google Login
    const googleLogin = () => {
        setLaoding(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Github Login
    const githubLogin = () => {
        setLaoding(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Logout a user
    const logOut = () => {
        setLaoding(true);
        return signOut(auth);
    }


    useEffect(()=> {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing current user', currentUser)
            setUser(currentUser);
            setLaoding(false)
        });

        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser, 
        updateUser,
        googleLogin,
        githubLogin,
        logOut
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