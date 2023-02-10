import React from 'react'
import { useEffect , useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../src/Css/Sidebar.css"

export const Sidebar = ({sideBar,nav_ref}) => {
  const [active,setActive] = useState('photo');
  useEffect(()=>{
    const sidebarInstance = sideBar.current;
    const navbarInstance =  nav_ref.current;
    const MouseEnter = () => {
      sidebarInstance.classList.add('sideBarOpen')
      navbarInstance.classList.add('open')
    }
    const MouseLeave = () => {
      sidebarInstance.classList.remove('sideBarOpen')
      navbarInstance.classList.remove('open')
    }
    
    document.querySelector('.Sidebar').addEventListener('mouseenter',MouseEnter)
    document.querySelector('.Sidebar').addEventListener('mouseleave',MouseLeave)
    
    return () => {
      // document.querySelector('.Sidebar').removeEventListener('mouseenter',MouseEnter)
      // document.querySelector('.Sidebar').removeEventListener('mouseleave',MouseLeave)
    }
  },[])
  return (
    <aside ref={sideBar} className='Sidebar'>
        <Link onClick={()=>setActive('photo')} className={`${active=='photo'?'active':""}`} to="./">
            <i className="fa-solid fa-image"></i>
            <span >My Photos</span>
        </Link>
        <Link onClick={()=>setActive('album')} className={`${active=='album'?'active':""}`} to="./album">
            <i className="fa-sharp fa-solid fa-images"></i>
            <span >My Albums</span>
        </Link>
        <Link onClick={()=>setActive('fav')} className={`${active=='fav'?'active':""}`} to="./fav">
            <i className="fa-solid fa-heart"></i>
            <span >favourite</span>
        </Link>
        <Link onClick={()=>setActive('trash')} className={`${active=='trash'?'active':""}`} to="./trash">
            <i className="fa-regular fa-trash-can"></i>
            <span >Trash</span>
        </Link>
    </aside>
  )
}
