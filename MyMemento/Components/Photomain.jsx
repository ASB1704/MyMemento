import React from 'react'
import { useRef , useState , useEffect } from 'react'
import axios from 'axios'
import "../src/Css/Photomain.css"


export const Photomain = () => {
    const Uploadref = useRef();
    const inputRef = useRef();
    const [imagesArray,setimagesArray] = useState([]);
    const [Data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    
    const closeupload=()=>{
      setData([])
      inputRef.current.value = ''
      Uploadref.current.classList.remove("upload");
    }
    useEffect(()=>{
      setLoading(true)
      getImage();
      setLoading(false)
    },[])
    const getImage = async () =>{
        const Data = await axios.get('http://localhost:5000/img')
        setimagesArray(Data.data.data);
    }
    const fetch = async (data) =>{
      setLoading(true);
      const img =  await axios.post(`https://api.cloudinary.com/v1_1/dkf6a0vcp/image/upload`,data)
      const imgUrl = await axios.post('http://localhost:5000/post_img',{url:img.data.url})
      setimagesArray(imgUrl.data.data);
      setLoading(false)
    }
    const ShowUpload=()=>{
        Uploadref.current.classList.add("upload");
    }
    const UploadHandler=()=>{
      Uploadref.current.classList.remove("upload");
      Data.forEach((data)=>{
        fetch(data);
      }) 
      inputRef.current.value = ''
      setData([])
    }
    const postDetail = (pic) =>{
      for (let i = 0; i < pic.length; i++) {
        const data = new FormData();
        data.append("file",pic[i]);
        data.append("upload_preset","DizzyAlb")
        data.append("cloud_name","dkf6a0vcp")
        Data.push(data);
      } 
    }
    
  return (
    <>

    {/* LOADER */}

    <div className='uploadAndCreate'>
    {loading?<div className="loader_wrapper">
    <span className="loader"></span>
    </div>:""}
        <i className="fa-sharp fa-solid fa-circle-plus"></i>
        <div className="photo_wrapper">
          <div className='photo_box' onClick={ShowUpload} style={{display:`${imagesArray.length==0?'none':"grid"}`}}>
            Add Photos
          </div>
          {
            imagesArray.length!=0?imagesArray.map((url)=>{
              return <div className='photo_box' key={url}>
                <div className='photo_box_hover'>
                  <input type="checkbox" id="photo_check" />
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <img  src={url} alt={url} />
              </div>
            }):<i style={{display:`${loading?'none':"block"}`}} className="fa-solid fa-cloud-arrow-up" onClick={ShowUpload}></i>
          }
        </div>
    </div>

    {/* UPLOAD CONTAINER */}
    <div className='Uploadwrapper' ref={Uploadref}>
        <i className="fa-solid fa-circle-xmark" onClick={closeupload}></i>
        <div className="uploadbox">
        <i className="fa-solid fa-cloud-arrow-up"></i>
            <p>Drag & Drop images here</p>
            <span>or</span>
            <input ref={inputRef} type="file" multiple="multiple" accept="image/jpeg, image/png, image/jpg" onChange={(e) => postDetail(e.target.files)} />
        </div>
        <button onClick={UploadHandler}>Upload image</button>
    </div>
    </>
    
  )
}
