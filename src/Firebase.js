import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBWEksEZGMEvKfXDz-xWKsDgCaWZio_Cjs",
    authDomain: "linkedin-cl-c59e6.firebaseapp.com",
    projectId: "linkedin-cl-c59e6",
    storageBucket: "linkedin-cl-c59e6.appspot.com",
    messagingSenderId: "157754328374",
    appId: "1:157754328374:web:6facc75a549ce155fe1f97"
  };
  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); 
  const auth = firebase.auth()



  export {db,auth};