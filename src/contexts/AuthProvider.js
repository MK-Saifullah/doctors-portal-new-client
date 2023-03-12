// const { createContext } = require("react");
import React,{createContext, useEffect, useState} from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    // Create User email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in
    const logInUser = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    // Sign out
    const logOutUser = (email, password) => {
        setLoading(true)
        return signOut(auth, email, password)
    }

    // Update User Profile
    const updateProfileUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //Google User credentials
    const googleUser = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }


    //Observer
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Current User: ', currentUser)
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            return unSubscribe()
        };
    }, [])
    const authInfo = {
        loading,
        createUser,
        logInUser,
        logOutUser,
        googleUser,
        user, 
        setUser,
        updateProfileUser,
        
    }
    return (
        <AuthContext.Provider value= {authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
