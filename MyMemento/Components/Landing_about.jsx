import React from 'react'
import '../src/Css/Landing_about.css'

export const Landing_about = () => {
  return (
    <div id="about" className='Landing_about'>
      <div className='img'>
          <img src="../src/assets/Group 6.png" alt="image" />
        <svg width="695" height="694" viewBox="0 0 695 694" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M671.592 347C671.592 168.06 526.532 23 347.592 23C168.652 23 23.5922 168.06 23.5922 347C23.5922 525.94 168.652 671 347.592 671" stroke="#1E1E1E" stroke-opacity="0.1" stroke-width="20" />
          <path d="M73.9722 420.316C114.464 571.432 269.792 661.111 420.908 620.62C572.024 580.128 661.703 424.8 621.211 273.684C580.72 122.568 425.392 32.889 274.276 73.3804" stroke="#1E1E1E" stroke-opacity="0.1" stroke-width="20" />
          <path d="M591 347.5C591 213.571 482.429 105 348.5 105C214.571 105 106 213.571 106 347.5C106 481.429 214.571 590 348.5 590" stroke="#1E1E1E" stroke-opacity="0.1" stroke-width="20" />
        </svg>
      </div>
      <div className='description'>
        <div className="tagline">
        <span>safekeeping moments</span>
        <p>forever</p>
        <svg width="144" height="16" viewBox="0 0 144 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.25">
            <circle cx="8" cy="8" r="8" fill="#1E1E1E" />
            <circle cx="40" cy="8" r="8" fill="#1E1E1E" />
            <circle cx="72" cy="8" r="8" fill="#1E1E1E" />
            <circle cx="104" cy="8" r="8" fill="#1E1E1E" />
            <circle cx="136" cy="8" r="8" fill="#1E1E1E" />
          </g>
        </svg>
        </div>

       <div className="describe">
       <span>Cherish those heartwarming memories</span>
        <span>with your loved ones through</span>
        <span>our albums crafted only you</span>
       </div>
      </div>

    </div>
  )
}
