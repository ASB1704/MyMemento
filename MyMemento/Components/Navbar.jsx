import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import "../src/Css/Navbar.css"
import logo from "../src/assets/logo.png"
export const Navbar = ({sideBar,nav_ref}) => {
  const searchRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle('search-bar')
  }
  const Sidebarhandler=()=>{
    let nav_icon = document.querySelector(".nav-icon4")
    nav_icon.classList.toggle('open')
    sideBar.current.classList.toggle('sideBarOpen')
  }
  return (
  <nav className='Navbar'>
    <div className="navleft">
        <div ref={nav_ref} onClick={Sidebarhandler} className='nav-icon4'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logoandname">
          <img src={logo} alt="logo" />
          <h3>MyMemento</h3>
        </div>
    </div >
      <div className="navright">
        <div>
        <input ref={searchRef} type="text" placeholder='search photos / album'/>  
        <i onClick={searchHandler} className="fa-solid fa-magnifying-glass"></i>
        </div>
      <i className="fa-solid fa-circle-user"></i>
      </div>
  </nav>
  )
}
