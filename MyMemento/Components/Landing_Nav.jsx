import React from 'react'
import { useNavigate } from 'react-router-dom';
import YourSvg from  '../src/assets/LOGO.svg';
import '../src/Css/Landing_Nav.css'

export const Landing_Nav = () => {
  const nav = useNavigate();
  return (
    <div className='LandingNav'>
        <div className='Navleft'>
        <img src={YourSvg} alt="Your SVG" />
        </div>
        <div className='Navright'>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT US</a>
            <a href="#" onClick={(e)=>{
              e.preventDefault();
              nav('/login');
            }}>LOGIN</a>
        </div>
    </div>
   
  )
}
