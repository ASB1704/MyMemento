import React from 'react'
import "../src/Css/Sidebar.css"

export const Sidebar = ({sideBar}) => {
  return (
    <div ref={sideBar} className='Sidebar'>
        <div>
            <i class="fa-solid fa-image"></i>
            <span>My Photos</span>
        </div>
        <div>
            <i class="fa-sharp fa-solid fa-images"></i>
            <span>My Albums</span>
        </div>
        <div>
            <i class="fa-regular fa-trash-can"></i>
            <span>Trash</span>
        </div>
    </div>
  )
}
