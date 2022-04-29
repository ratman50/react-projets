import React,{useContext, useState, useEffect} from 'react'
import {AuthContext} from "../context/AuthContext";
import { ChatEngine} from 'react-chat-engine';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Chats = () => {
    const {signOutUser, user}=useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();
    const handleLogout=()=>{
        signOutUser();
    }
    const getFile=async(url)=>{
        const response= await fetch(url);
        const data= await response.blob();
        return new File([data], "userPhone.jpg", {type: 'image/jpeg'})
    }
    console.log(user);
    useEffect(()=>{
        if(!user)
        {
            navigate('/');
            return;
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers:{
                'project-id':process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
                'user-name':user.email,
                'user-secret':user.uid,
            }
        })
        .then(()=>{
            setLoading(false);
        })
        .catch(()=>{
            let formdata= new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.email)
            formdata.append('secret', user.uid);
            getFile(user.photoURl)
                .then(avatar=>formdata.append('avatar', avatar, avatar.name));
            axios.post('https://api.chatengine.io/users/', formdata,
             {headers: {'PRIVATE-KEY': process.env.REACT_APP_CHAT_ENGINE_KEY}})
            .then(()=>setLoading(false))
            .catch((err)=>console.log(err))

        })
    },[user, navigate])
    if (!user || loading) return '....LOADING';

  return (
    <div className='chats-page'>
        <div className='nav-bar'>
            <div className="logo-tab">
                Unichat
            </div>
            <div className="logout-tab" onClick={handleLogout} >
                Logout
            </div>

        </div>
        <ChatEngine 
            height='calc(100vh-66px)'
            projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
			userName={user.email}
			userSecret={user.uid}
            />
    </div>
  )
}

export default Chats