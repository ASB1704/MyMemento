import React, { useState } from 'react';
import '../src/Css/SignUpSignIn.css';

const SignUpSignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

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
      </div>
    </div>
  );
};

export default SignUpSignIn;


