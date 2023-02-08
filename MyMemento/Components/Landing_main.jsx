import React from 'react'
import YourSvg from  '../src/assets/LOGO.svg';
import '../src/Css/Landing_main.css'
import {auth} from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

export const Landing_main = () => {
  return (
    <div className='Landing_main'>
      <div className="Getstarted">
      <img src={YourSvg} alt="Your SVG" />
       <button onClick={(e)=>{
          e.preventDefault();
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              // IdP data available using getAdditionalUserInfo(result)
              // ...
              localStorage.setItem('auth',token.toString());
              window.location.reload();
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
              console.log({message : errorMessage});
            });
          
       }}>
        <p>GET STARTED </p>
        <i className="fa-solid fa-angles-right"></i>
       </button>
      <div className='sroll'>
      <p>SCROLL TO KNOW MORE</p>
      <i className="fa-solid fa-angles-down"></i>
      </div>
      </div>
    </div>
  )
}
