import React, { useContext } from 'react';
import {AiFillGoogleSquare} from 'react-icons/ai';
import {GrFacebook} from 'react-icons/gr';
import 'firebase/app';
import { AuthContext } from '../context/AuthContext';


const Login = () => {
    const {signInWithGoogle, signInWithFacebook}=useContext(AuthContext)
    const handleSignInGoogle=()=>{
        try
        {
            signInWithGoogle();

        }
        catch(err){
            console.log(err);
        }
    }
    const handleSignInFacebook=()=>{
        try
        {
            signInWithFacebook();

        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div id="login-page">
        <div id="login-card">
            <h2>Welcome to Unichat !</h2>
            <div className="login-button google" 
                onClick={handleSignInGoogle} 
                >
                <AiFillGoogleSquare fontSize={"1.2rem"}/>
                 <span>
                    Sign in with Google
                </span> 
            </div>
            <br/>
            <br/>
            <div className="login-button facebook"
                onClick={handleSignInFacebook} 

            >
                <GrFacebook/> Sign in with Facebook
            </div>
        </div>
    </div>
  );
}

export default Login;