import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import '../src/Css/AlbumForm.css'
import {useNavigate} from "react-router-dom"
import templateArr from '../utils/Template_data'
import { f } from '../utils/toast'
export const AlbumForm = ({albumRef,selectedImg}) => {
    const navigate = useNavigate();
    const url = "http://localhost:5000"
    const [albumIdx,setAlbumIdx] = useState();
    const [title,setTitle] = useState('');
    const [albumloader,setAlbumloader] = useState(false);
   

    const cancelHandler = () => {
        albumRef.current.style.transform = "translate(-50%,-50%) scale(0)"
    }
    const createHandler = async () => {
        const albumdata = {title,selectedImg,albumIdx};
        try {
            await  axios.post(url+'/createAlbum',{data:albumdata});
        } catch (error) {
            f(error.response.data.msg,"red");
        }
        document.querySelector('.AlbumFormWrapper').style.transform = 'translate(-50%,-50%) scale(0)'
        setAlbumloader(true);
        setTimeout(() => {
            navigate('/album')
            setAlbumloader(false);
        }, 2000);
    }
  return (
    <>
    <div ref={albumRef} className='AlbumFormWrapper'>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Album Name' />
            <div className="album_slider_wrapper">
                <p>Select templates</p>
                <div className="album_slider">
                    {templateArr.map((item,index)=>{
                        return (
                            <div key={index} className="albums">
                                <button>view</button>
                                <button onClick={()=>setAlbumIdx(index)} className='selectTemplate'>select</button>
                            </div>
                        )
                    })}
                </div>
                    <i className="fa-solid fa-chevron-left"></i>
                    <i className="fa-solid fa-chevron-right"></i>
                <button>View all</button>
            </div>
            <div className="album-btns">
                <button onClick={createHandler} className='createAlbum-btn'>Create</button>
                <button onClick={cancelHandler} className='cancelAlbum-btn'>Cancel</button>
            </div>
    </div>
    {albumloader?<div className="loader_wrapper">
        <h1>creating album ..... </h1>
    <span className="loader"></span>
</div> : ""}
    </>
  )
}
