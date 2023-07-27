import './App.css';
import Header from './Header';
import { Sidebar } from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import { auth } from './Firebase';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
       auth.onAuthStateChanged((userAuth)=>{
        if(userAuth){
            dispatch(loginuser({
              
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL:userAuth.photoURL,
                displayName:userAuth.displayNamename  
              
            }))
        }else{
              dispatch(logoutuser());
        }
       })
  },[])
  return (
    <>
    {
      !user?<Login/>:
    <div className="App">
     <Header/>
     <div className='app_body'>
      <Sidebar></Sidebar>
      <Feed/>
      <Widget/>
     </div>
    </div>
}
    </>
  );
  
}

export default App;
