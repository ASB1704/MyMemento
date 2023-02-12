import React, { useState } from 'react'
import { Photomain } from "./Photomain"
import { Sidebar } from "./Sidebar"
import '../src/Css/Photo_wrapper.css'
import { AlbumComponent } from './AlbumComponent'
import {Routes,Route} from 'react-router-dom'
import { Trash } from './Trash'
import { Favourite } from './Favourite'

export const Photocomponent = ({sideBar,nav_ref}) => {
  return (
    <main className='Photo_main_wrapper'>
        <Sidebar nav_ref={nav_ref} sideBar={sideBar}/>
        <Routes>
          <Route path='/photo' element={ <Photomain />}/>
          <Route path='/album' element={<AlbumComponent/>}/>
          <Route path='/trash' element={<Trash/>}/>
          <Route path='/fav' element={<Favourite />}/>
        </Routes>
    </main>
  )
}
