import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import '../src/Css/Fav.css'
export const Favourite = () => {
    const url = "http://localhost:5000"
    const [favArray,setFavArray] = useState([]);
    const fetch_fav =  async () => {
        const fav = await axios.get(url+'/fav');
        setFavArray(fav.data.data)
    }
    useEffect(()=>{
        fetch_fav();
    },[])
  return (
    <div className='favourite_wrapper'>
        {favArray.length!=0?favArray.map(item=>{
            return (
                <div key={`${item}/${Math.random()}`}>
                    <img src={item} alt={item} />
                </div>
            )
        }):<div className='empty-fav'>
            <i className="fa-solid fa-heart"></i>
            <h1>fav is Empty</h1>
            </div>}
    </div>
  )
}
