import React from 'react'
import YourSvg from  '../src/assets/LOGO.svg';
import '../src/Css/Landing_main.css'

export const Landing_main = () => {
  return (
    <div className='Landing_main'>
      <div className="Getstarted">
      <img src={YourSvg} alt="Your SVG" />
       <button>
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
