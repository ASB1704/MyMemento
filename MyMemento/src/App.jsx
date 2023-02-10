import { useRef, useState } from 'react'
import './App.css'
import { Navbar } from '../Components/Navbar'
import { Photocomponent } from '../Components/Photocomponent'
import { Landingpage } from '../Components/Landingpage';
import { Route, Routes } from 'react-router-dom';
import SignUpSignIn from '../Components/SignUpSignIn';

function App() {
  const sideBar = useRef();
  const nav_ref = useRef();
  const {token,setToken} = useState("");

  return (
    <div className='App'>
      <Navbar nav_ref={nav_ref} sideBar={sideBar} />
      <Photocomponent nav_ref={nav_ref} sideBar={sideBar} />
    </div>
  )
}

export default App