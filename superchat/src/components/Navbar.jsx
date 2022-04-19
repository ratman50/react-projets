import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Navbar = () => {
  const navigate=useNavigate();
  const handleLogOut= async()=>{
    try{
      await signOut(auth);
      navigate("/");
    }
    catch(err)
    {
      alert("For some reasons we can't disconnect, please check your internet connexion please try again");
    }
  }
    const {toggleModals}=useContext(UserContext)
  return (
    <nav className="navbar navbar-light bg-light px-4">
        <Link to={"/"} className='navbar-brand'>AuthJS</Link>
        <div>
            <button className="btn btn-primary" onClick={()=>toggleModals("signUp")}>Sign Up</button>
            <button className="btn btn-primary ms-2" onClick={()=>toggleModals("signIn")}>Sign In</button>
            <button className="btn btn-danger ms-2" onClick={handleLogOut}>Log Out</button>
        </div>
     </nav>
  )
}

export default Navbar