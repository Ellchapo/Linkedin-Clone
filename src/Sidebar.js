import React from 'react'
import "./css/Sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
export const Sidebar = () => {
  const user = useSelector(selectUser)
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
          <img src="https://wallpapercave.com/wp/wp6956879.jpg"></img>
          <Avatar src={user.photoURL}/>
          <div className='profile__details'>
        <h4>{user.displayName}</h4>
        <p>Web developer</p>
        </div>
        <div className='profile__stats'>
           <span>Who viewed your profile</span>
           <span className='stat__number'>20</span>
        </div>
        <div className='profile__stats'>
           <span>Connection <br/><b>Grow Your Network</b></span>
           <span className='stat__number'>120</span>
        </div>
      </div>
      <div className='sidebar__recent'>
          <p>Recent</p>
         
          <p className='hash'><span>#</span>branding</p>
          <p className='hash'><span>#</span>marteking</p>
          <p className='hash'><span>#</span>web developement</p>
          <p className='hash'><span>#</span>programming</p>
          <p className='hash'><span>#</span>Reactjs</p>
          <p className='hash'><span>#</span>reduxtoolkit</p>
      </div>
    </div>
  )
}
