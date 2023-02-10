import { useRef, useState } from 'react'
import './App.css'
import { Navbar } from '../Components/Navbar'
import { Photocomponent } from '../Components/Photocomponent'
import { Route, Routes } from 'react-router-dom'
import { Landingpage } from '../Components/Landingpage'
import SignUpSignIn from '../Components/SignUpSignIn'

function App() {
  const sideBar = useRef();
  const nav_ref = useRef();

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/app/*' element={<>
          <Navbar nav_ref={nav_ref} sideBar={sideBar} />
          <Photocomponent nav_ref={nav_ref} sideBar={sideBar} />
        </>}/>
        <Route path='/login' element={<SignUpSignIn/>}/>
      </Routes>
    </div>
  )
}

export default App