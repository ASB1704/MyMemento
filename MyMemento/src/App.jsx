import { useRef, useState } from 'react'
import './App.css'
import { Navbar } from '../Components/Navbar'
import { Photocomponent } from '../Components/Photocomponent'

function App() {
  const sideBar = useRef();
  return (
    <div className="App">
    <Navbar sideBar={sideBar}/>
    <Photocomponent sideBar={sideBar}/>
    </div>
  )
}

export default App
