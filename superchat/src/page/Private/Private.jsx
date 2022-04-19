import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/userContext'

const Private = () => {
  const {currentUser}=useContext(UserContext);
  if(!currentUser)
    return <Navigate to="/"></Navigate>
  return (
    <div className='container'>
        <Outlet/>
    </div>
  )
}

export default Private