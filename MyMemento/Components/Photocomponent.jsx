import React from 'react'
import { Photomain } from "./Photomain"
import { Sidebar } from "./Sidebar"
import '../src/Css/Photo_wrapper.css'
export const Photocomponent = ({sideBar}) => {
  return (
    <div className='Photo_main_wrapper'>
        <Sidebar sideBar={sideBar}/>
        <Photomain/>
    </div>
  )
}
