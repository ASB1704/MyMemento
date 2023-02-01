import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../src/Css/Trash.css'
export const Trash = () => {
    const url = 'http://localhost:5000'
    let [trash,setTrash] = useState([]);

    const fetchTrash = async () => {
      const {data} = await axios.get(url+'/trash');
      setTrash(data.data);
    }

    useEffect(()=>{
      fetchTrash();
    },[])
  return (
    <div className='trash-wrapper'>
        {trash.length==0?
            <div className="empty-trash">
                 <i className="trash-empty-icon fa-solid fa-trash-can"></i>
                <h1>Trash is empty</h1>
            </div>
        :
          trash.map((item,index)=>{
            return (
              <div key={item} className='trash-card'>
                {item!=""?<img src={item} alt="" />:""}  
              </div>
            )
          })
        }
    </div>
  )
}
