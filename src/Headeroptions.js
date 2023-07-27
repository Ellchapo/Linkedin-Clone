import React from 'react'
import { Avatar } from '@mui/material'
import "./css/header.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
function Headeroptions({Icon,title,avatar}) {
  const user = useSelector(selectUser)
  return (
    <div className='header__options'>
      {Icon && <Icon/>}
      {avatar && <Avatar name={avatar} src={user.photoURL} onClick={()=>firebase.auth().signout()}/>}
      
      <span>{title}</span>
        </div>
  )
}

export default Headeroptions