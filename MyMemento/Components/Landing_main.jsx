import React from 'react'
import YourSvg from  '../src/assets/LOGO.svg';
import '../src/Css/Landing_main.css'
import { useNavigate } from 'react-router-dom';

export const Landing_main = () => {
  const nav = useNavigate();
  return (
    <div className='Landing_main'>
      <div className="Getstarted">
      <img src={YourSvg} alt="Your SVG" />
       <button onClick={()=>{
          localStorage.getItem('auth') ? nav('/app/photo') : nav('/login');
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
