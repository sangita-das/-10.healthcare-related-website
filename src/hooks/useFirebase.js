import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider)

      .finally(() => setIsLoading(false));
  }
  const registerUser = (email, password) => {
    // console.log(email, password)
    console.log("from hook", email, password);
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)

      .finally(() => setIsLoading(false))
  }

  const signInUser = (email, password) => {
    // console.log(email, password)
    console.log("from hook", email, password);
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)

      .finally(() => setIsLoading(false))
  }

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }



  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
    registerUser,
    signInUser
  }
}

export default useFirebase;