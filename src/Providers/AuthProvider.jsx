import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () =>{
        setLoading(true);
       return signInWithPopup(auth, googleProvider)

    }

    const logOut = () =>{
        return signOut(auth);
    }

    const updateUserProfile = (name, photo)=>{
       return updateProfile (auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log("currentUser", currentUser);
            setLoading(false);
        })


        return () =>{
            unSubscribe();
        }


    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logOut,
        updateUserProfile
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;