import React, { useState } from 'react'
import "./css/Login.css"
import { Email } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {loginuser} from "./features/userSlice"
import { auth } from './Firebase';
const Login = () => {
   const [signup,setSignup]=useState(false);
    const [name,setName]=useState("");
     const [photoURL,setPhotoUrL]=useState("");
      const [email,setEmail]=useState("");
       const [password,setPassword]=useState("");
        
       const dispatch = useDispatch();
       const register = (e)=>{
              e.preventDefault();

              if(!name){
                  return alert("Name is required");
              }

               if(!photoURL){
                  return alert("Photo is required");
              }
               if(!email){
                  return alert("Eame is required");
              }
               if(!password){
                  return alert("Password is required");
              }

              auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
                     userAuth.user.updateProfile({
                        displayName:name,
                        photoURL:photoURL
                     }).then(()=>{
                            dispatch(loginuser({
                               email:userAuth.user.email,
                               uid: userAuth.user.uid,
                               photoURL:photoURL,
                               displayName:name  
                            }))   
                     })
              }).catch(error=>alert(error))

              setEmail('');setName('');setPhotoUrL("");setPassword("");
       }

       const signIn = (e)=>{
          e.preventDefault();
          if(!email){
            return alert("Eame is required");
        }
         if(!password){
            return alert("Password is required");
        }
            
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            dispatch(loginuser({
                email:user.email,
                uid:user.uid,
                photoURL:user.photoURL,
                displayName:user.displayNameame  
             }))   
        }).catch(error=>alert(error))

        //setEmail('');setPassword("");
       }
  return (

    <div className='loginscreen'>
         <img src='https://escapethewolf.com/wp-content/uploads/2015/05/linkedin_logo.png'></img>
        {
            signup===true?
        <form onSubmit={register}>
            <input type='text' placeholder='Full Name (Reqired if Registered)' value={name} onChange={(e)=>{setName(e.target.value)}} ></input>
            <input type='text' placeholder='Profile Picture URL'  value={photoURL} onChange={(e)=>{setPhotoUrL(e.target.value)}} ></input>
            <input type='email' placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type='password' placeholder='Password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>

            <input type='submit' value="Sign Up" ></input>
            <h4>Already a member ?<span onClick={()=>{setSignup(false)}}>Login here</span></h4>
        </form>

        :
        <form onSubmit={signIn}>
           
            <input type='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)} }></input>
            <input type='password' placeholder='Password'  value={password} onChange={(e)=>{setPassword(e.target.value)}} ></input>

            <input type='submit' value="Login" ></input>
            <h4>Not a member ?<span onClick={()=>{setSignup(true)}} >Signup here</span></h4>
        </form>

}
    </div>
  )
}

export default Login