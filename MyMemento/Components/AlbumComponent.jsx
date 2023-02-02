import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import '../src/Css/Albumwrapp.css'
import { Template } from './Template';
import { Template2 } from './Template2';
export const AlbumComponent = () => {
    const url = "http://localhost:5000"
    const tempRef = useRef();
    const [albumArray,setAlbumrray] = useState([]);
    const [tempImg,setTempImg] = useState([]);
 
    const fetchAlbum = async () => {
      const {data} = await axios.get(url+'/album');
      setAlbumrray(data.data)
    }
    const openAlbumHandler = (idx) => {
      let tempIdx = albumArray[idx].albumIdx
      setTempImg(albumArray[idx].selectedImg);
      let templates = document.querySelectorAll('.templates')
      console.log(templates,"ohh yeahh");
      templates[tempIdx].classList.add('showTemp')
    }
    useEffect(()=>{
      fetchAlbum()
    },[])
  return (
    <>
    <div className='AlbumWrapper'>
        {albumArray.length==0?
            <div className='empty-album'>
                <i className="fa-sharp fa-solid fa-photo-film"></i>
                <h1>No album created</h1>
            </div>
        :
         albumArray.map((item,index)=>{
          return (
            <div key={item.title} className='album-card'>
              <h3>{item.title}</h3>
              <img onClick={()=>openAlbumHandler(index)} src={item.selectedImg[0]} alt="my album" />
            </div>
          )
         })
        }

    </div>
        <Template tempRef={tempRef} tempImg={tempImg}/>
        <Template2 tempRef={tempRef} tempImg={tempImg}/>
    </>

  )
}
