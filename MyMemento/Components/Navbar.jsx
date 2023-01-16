import React from 'react'
import { useRef } from 'react';
import "../src/Css/Navbar.css"
import logo from "../src/assets/logo.png"
console.log(logo,"hthtt");
export const Navbar = ({sideBar}) => {

    const Sidebarhandler=()=>{
        sideBar.current.classList.toggle('sideBarOpen')
    }
  return (
    <div className='Navbar'>
    <div className="navleft">
    <i className="fa-sharp fa-solid fa-bars" onClick={Sidebarhandler}></i>
   <div className="logoandname">
   <img src={logo} alt="logo" />
   <h3>MyMemento</h3>
   </div>


    </div >
    <div className="navright">
    <i className="fa-solid fa-magnifying-glass"></i>
    <i class="fa-solid fa-circle-user"></i>
    </div>
    </div>
    
  )
}
