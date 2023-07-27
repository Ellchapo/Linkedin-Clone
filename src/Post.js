import React, { forwardRef } from 'react'
import './css/Post.css'
import { Avatar } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
const Post = forwardRef(({name,description,message,photoURL},ref) => {
  return (
    <div className='post' ref={ref}>
     <div className='post__header'>
       <div className='post__headerLeft'>
          <Avatar src={photoURL}/>
          <div className='post__profile__details'>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
       </div>
       <div className='post__headerRight'>
            <MoreVertIcon/>
       </div>
       
     </div>
     <div className='post__body'>
         <p>{message}</p>
       </div>
       <div className='post__footer'>
         <div className='post__footer__options'>
         <ThumbUpAltIcon stye={{ color: '#333' }}/>
         <span>Like</span>
         </div>
         <div className='post__footer__options'>
         <CommentIcon/>
         <span>Comment</span>
         </div>
         <div className='post__footer__options'>
         <SendIcon/>
         <span>Send</span>
         </div>
         <div className='post__footer__options'>
         <ShareIcon/>
         <span>Share</span>
         </div>
       </div>
      
       
    </div>
  )
})

export default Post