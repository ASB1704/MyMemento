import React from 'react'
import { useRef } from 'react'
import "../src/Css/Photomain.css"
import { UploadContainer } from './UploadContainer'

export const Photomain = () => {
    const Uploadref=useRef();
    const Uploadhandler=()=>{
     Uploadref.current.classList.toggle("upload");
    }
  return (
    <>
    <div className='uploadAndCreate'>
        <i class="fa-solid fa-cloud-arrow-up" onClick={Uploadhandler}></i>
        <i class="fa-sharp fa-solid fa-circle-plus"></i>
    </div>
    <UploadContainer Uploadref={Uploadref}/>
    </>
    
  )
}
