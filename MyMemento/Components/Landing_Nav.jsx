import React from 'react'
import YourSvg from  '../src/assets/LOGO.svg';
import '../src/Css/Landing_Nav.css'

export const Landing_Nav = () => {
  return (
    <div className='LandingNav'>
        <div className='Navleft'>
        <img src={YourSvg} alt="Your SVG" />
        </div>
        <div className='Navright'>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT US</a>
            <a href="">LOGIN</a>
        </div>
    </div>
   
  )
}
