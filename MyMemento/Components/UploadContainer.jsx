import React from 'react'
import "../src/Css/UploadContainer.css"

export const UploadContainer = ({Uploadref}) => {
    const closeupload=()=>{
        Uploadref.current.classList.remove("upload");
    }
  return (
    <div className='Uploadwrapper' ref={Uploadref}>
        <i class="fa-solid fa-circle-xmark" onClick={closeupload}></i>
        <div className="uploadbox">
        <i class="fa-solid fa-cloud-arrow-up"></i>
            <p>Drag & Drop images here</p>
            <span>or</span>
            <button>Browse image</button>
        </div>
        <button>Upload image</button>
    </div>
  )
}
