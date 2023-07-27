import FlipMove from 'react-flip-move';
import React, { useState ,useEffect} from 'react'
import { Avatar, colors } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./css/Feed.css"
import Post from './Post';
import { db } from './Firebase'
import firebase from "firebase/compat/app"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Feed = () => {
  const [input,setInput] = useState('');
  const [posts,setPost] = useState([]);
  const submitPost = (e)=>{
    e.preventDefault();
       db.collection("Posts").add({
        name:user.displayName,
        description:'This is a test',
        message:input,
        photoURL:user.photoURL,  
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      })
      setInput('');

  }
      useEffect(()=>{
          db.collection("Posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
                 setPost(snapshot.docs.map(doc=>(
                  {
                  id:doc.id,
                  data:doc.data()}
                 )))
                  })
      },[]);
      console.log(posts);

      const user = useSelector(selectUser);
  return (
    <div className='feed'>
       <div className='feed__input'>
        <div className='feed__form'>
       <Avatar src={user.photoURL}/>
       <form onSubmit={submitPost}>
        <input type="text" placeholder='Start a post' value={input}  onChange={e=>setInput(e.target.value)}></input>
        <input type='submit'></input>
        
       </form>
       </div>
       <div className='feed__options'>
          <div className='option'>
            <PhotoIcon style={{color:'#70b5f9'}}/>
            <span>Photo</span>
          </div>
          <div className='option'>
              <YouTubeIcon style={{color:'#7fc15e'}}/>
            <span>Video</span>
          </div>
          <div className='option'>
                <TodayIcon style={{color:'#e7a33e'}}/>
           <span>Event</span>
             </div>
             <div className='option'>
                  <AssignmentIcon style={{color:'#fc9295'}}/>
               <span>Write an article</span>
             </div>
       </div>
       </div>
       <FlipMove>
       {
        posts.map(({id,data:{name ,description,message,photoURL}}) => {
          return(
            
           <Post key={id} name={name} description={description} message={message} photoURL={photoURL}/>
          
          )}
        )
       }
       </FlipMove>
       
    </div>
  )
}

export default Feed