import React, { useState } from 'react';
import '../src/Css/SignUpSignIn.css';
import {auth} from '../firebase'
import {GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const loginHandler = async (e,nav)=>{
  e.preventDefault();
  const provider = new GoogleAuthProvider();
  try{
    const result = await signInWithPopup(auth,provider);
    const user = result.user;
    console.log(typeof(user));
    localStorage.setItem('auth',JSON.stringify(user));
    nav('/app');
  } catch (e) {
    console.log(e);
  }
}

const SignUpSignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const nav = useNavigate();
  return (
    <div className="sign-up-sign-in-container">
      <div className="form-container">
        <h1 className="form-title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        {isSignUp && (
          <div className="input-container">
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
          </div>
        )}
        <div className="input-container">
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
        </div>
        <button className="submit-button">Submit</button>
        <p className="switch-form" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account?' : 'Create a new account'}
        </p>
        <button className="submit-button googleSignin" onClick={(e)=>loginHandler(e,nav)}>
          <p>Sign in with Google</p>
          <i className="fa-brands fa-google"></i>
        </button>
      </div>
    </div>
  );
};

export default SignUpSignIn;


