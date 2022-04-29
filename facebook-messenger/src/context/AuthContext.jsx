import React, { useState, useEffect} from 'react'
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { auth } from '../firebase';


export const AuthContext = React.createContext();


export const AuthProvider=(props) => {
  const signInWithGoogle=async()=>{
      console.log('entree');
      let provider= new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
  }
  const signInWithFacebook= async()=>{
      let provider= new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
  }
  const signOutUser=async()=>{
      try{

       await signOut(auth);
       navigate("/");
      }
      catch(err)
      {
          console.log(err);
      }
  }
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({})
  const navigate=useNavigate();
  
  useEffect(()=>{
      onAuthStateChanged(auth, user=>{
          setUser(user);
          setLoading(false);
          if (user)
          navigate("/chats");
      })
  },[user, navigate]);

 const value={
     signInWithFacebook,
     signInWithGoogle,
     signOutUser,
     user
 }

  return (
      <AuthContext.Provider value={value}>
        {!loading && props.children}
      </AuthContext.Provider>
  )
}

