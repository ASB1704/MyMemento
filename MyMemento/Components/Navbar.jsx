import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import "../src/Css/Navbar.css"
import logo from "../src/assets/logo.png"
import { useNavigate } from 'react-router-dom';

export const Navbar = ({ sideBar, nav_ref }) => {
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState("");
  const [Name, setName] = useState("");
  useEffect(() => {
    const payload = localStorage.getItem('auth');
    const obj = JSON.parse(payload);
    console.log(obj);
    if(obj!=null){
      setPhotoURL(obj.photoURL);
      setName(obj.displayName);
    }
  }, []);

  const searchRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle('search-bar')
  }
  const Sidebarhandler = () => {
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
          <input ref={searchRef} type="text" placeholder='search photos / album' />
          <i onClick={searchHandler} className="fa-solid fa-magnifying-glass"></i>
        </div>
         <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Duser&psig=AOvVaw0qwrZJWBGgTdtMs51AqkWM&ust=1676310407693000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJj0sPHEkP0CFQAAAAAdAAAAABAI' referrerPolicy="no-referrer" onClick={() => {
          document.getElementsByClassName("profile")[0].classList.toggle('showprofile');
        }} /> 
      <div className="profile">
        <div className="Name">{Name}</div>
        <button onClick={()=>{
          localStorage.removeItem('auth');
          navigate('/');
        }}>LOGOUT</button>
      </div>
    </div>
    </nav>
  )
}
