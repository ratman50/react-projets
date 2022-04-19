import { createContext,useState,useEffect } from "react";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebaseConfig";

 export  const UserContext=createContext();
 export  function UserContextProvider(props) {
     const signUp=(email, pwd)=>createUserWithEmailAndPassword(auth,email, pwd);
     const signIn=(email, pwd)=>signInWithEmailAndPassword(auth, email, pwd);
     const [currentUser, setCurrentUser] = useState(true);
     const [loadingData, setLoadingData] = useState(true);
    
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth, currentUser=>{
            setCurrentUser(currentUser);
            setLoadingData(false);
        })
        return unsubcribe;
    },[])
    
    // modal
     const [modalState, setModalState] = useState({signUpModal:false,signInModal:false});
     const toggleModals=modal=>{
         if(modal==="signIn")
         {
             setModalState({
                 signInModal:true,
                 signUpModal:false
             })
         }
         if(modal==="signUp")
         {
             setModalState({
                 signInModal:false,
                 signUpModal:true
             })
        //  console.log(JSON.stringify(modalState))
         }
         if(modal==="close")
         {
             setModalState({
                 signInModal:false,
                 signUpModal:false
             })
         }
     }
     return(
         <UserContext.Provider value={{modalState, toggleModals, signUp,signIn, currentUser}}>
             { !loadingData && props.children}
         </UserContext.Provider>
     )
 }