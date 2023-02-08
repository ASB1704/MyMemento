import { useRef, useState } from 'react'
import './App.css'
import { Navbar } from '../Components/Navbar'
import { Photocomponent } from '../Components/Photocomponent'
import { Landingpage } from '../Components/Landingpage';

function App() {
  const sideBar = useRef();
  const nav_ref = useRef();
  
  return (
    <div className="App">
      {localStorage.getItem('auth') == undefined ? <Landingpage/> : 
      <><Navbar nav_ref={nav_ref} sideBar={sideBar} /><Photocomponent nav_ref={nav_ref} sideBar={sideBar} /></>
      } 
    </div>
  )
}

export default App