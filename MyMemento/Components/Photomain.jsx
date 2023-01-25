import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import "../src/Css/Photomain.css"
import { f } from '../utils/toast';
import { AlbumForm } from './AlbumForm';

export const Photomain = () => {
  // ---- STATES -----//
  let [selectedImg,setSelectedImg] = useState([])
  const Uploadref = useRef();
  const inputRef = useRef();
  const [imagesArray, setimagesArray] = useState([]);
  const [Data, setData] = useState([]);
  const [delete_state, setDelete_state] = useState(false);
  const [viewId,setViewId] = useState()
  const [loading, setLoading] = useState(false);
  const [deleteurl, setDeleteurl] = useState();
  const albumRef = useRef();
  const url = "http://localhost:5000"
 // ---- STATES -----//


  //-------MOUSE LEAVE CLOSE OPTIONS LIST EVENT--------//
  let photo_box = document.querySelectorAll('.photo_box');
  const MouseLeave = () => {
    let list = document.querySelectorAll('.option_list')
    list.forEach((item)=>{item.classList.remove('option_list_show')})
  }
  photo_box.forEach((item)=>{item.addEventListener('mouseleave',MouseLeave)})
  //-------MOUSE LEAVE CLOSE OPTIONS LIST EVENT--------//


  //---------- UPLAODING AND GETTING IMAGE FROM BACKEND --------//
  const getImage = async () => {
    const Data = await axios.get(url+'/img')
    setimagesArray(Data.data.data);
  }
  const fetch = async (data) => {
    setLoading(true);
    const img = await axios.post(`https://api.cloudinary.com/v1_1/dkf6a0vcp/image/upload`, data)
    const imgUrl = await axios.post(url+'/post_img', { url: img.data.url })
    setimagesArray(imgUrl.data.data);
    setLoading(false)
  }
  //---------- UPLAODING AND GETTING IMAGE FROM BACKEND --------//


  //--------- OPEN AND CLOSED MODAL FUNCTIONS ----------//
  const ShowUpload = () => {
    Uploadref.current.classList.add("upload");
  }
  const showeditlist = (id) => {
    let list = document.querySelectorAll('.option_list')
    list[id].classList.toggle('option_list_show')
  }
  const open_delete_modal = (url) => {
    document.querySelector('.delete_photo_modal').style.transform = 'translate(-50%,-50%) scale(1)'
    setDeleteurl(url)
  }
  const open_selected_modal = (id) => {
    document.querySelector('.delete_photo_modal').style.transform = 'translate(-50%,-50%) scale(1)'
  }
  const AlbumFormHandler = () => {
    if(selectedImg.length>0){
        albumRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
    }else{
      f("please select image first","orange")
    }
  }
  const viewPhotoHandler = (id) => {
    setViewId(id);
    document.querySelector('.viewPhoto').style.transform = 'translate(-50%,-50%) scale(1)'
  }
  const closeDeleteHandler = () => {
    document.querySelector('.delete_photo_modal').style.transform = 'translate(-50%,-50%) scale(0)'
  }
  const close_select_options = () => {
    setSelectedImg([]);
    document.querySelector('.selectAll_option_modal').style.height = '0'
    let checkBox = document.querySelectorAll('.image_checkbox');
    let list = document.querySelectorAll('.photo_box_hover');
    checkBox.forEach(item=>item.checked = false)
    list.forEach(item=>item.classList.remove('checked'))
  }
  const closeupload = () => {
    setData([])
    inputRef.current.value = ''
    Uploadref.current.classList.remove("upload");
  }
  //--------- OPEN AND CLOSED MODAL FUNCTIONS ----------//


  //-------- UPLOAD AND POST IMAGE -----------//
  const favHandler = async (URL) => {
    try {
      const fav_data = await axios.post(url+'/fav',{url:URL})
      f("added to fav","green")
    } catch (error) {
      f(error.response.data.msg,"red")
    }
  }
  const UploadHandler = () => {
    if(Data.length==0) {
      f("Please choose Image","red")
      return;
    }else{
      Uploadref.current.classList.remove("upload");
    }
    Data.forEach((data) => {fetch(data)})
    inputRef.current.value = ''
    setData([])
  }
  const postDetail = (pic) => {
    for (let i = 0; i < pic.length; i++) {
      const data = new FormData();
      data.append("file", pic[i]);
      data.append("upload_preset", "DizzyAlb")
      data.append("cloud_name", "dkf6a0vcp")
      Data.push(data);
    }
  }
  //-------- UPLOAD AND POST IMAGE -----------//


  //-------- DELETE / SELECT IMAGES FUNCTIONS ---------//
  const deleteImgHandler = async (URL="") => {
    selectedImg.push(URL);
    try {
      const {data} = await axios.post(url+"/delete_selected",{data:selectedImg});
      setimagesArray(data.data)
      setSelectedImg([]);
      if(imagesArray.length==0){
        document.querySelector('.selectAll_option_modal').style.height = '0'
        document.querySelectorAll('.image_checkbox').checkBox = false;
      }
      document.querySelector('.delete_photo_modal').style.transform = 'translate(-50%,-50%) scale(0)'
      f(`Image Deleted`,"green")

    } catch (error) {
      console.log(error," --error");      
    }
  }
  const select_img_handler = (e,id,url) => {
    let list = document.querySelectorAll('.photo_box_hover');
    if(e.target.checked) {
      setSelectedImg(selectedImg => [...selectedImg,url] );
      list[id].classList.add('checked');
      document.querySelector('.selectAll_option_modal').style.height = '8vh' 
    }
    else {
      selectedImg =  selectedImg.filter((item,index)=>item!=url)
      setSelectedImg(selectedImg);
      list[id].classList.remove('checked');
      if(!selectedImg.length) {
        document.querySelector('.selectAll_option_modal').style.height = '0'  
        document.querySelector('.selectAll_checkBox').checked = false;
      }
    }
  }
  const selectAllHandler = () => {
    let checkBox = document.querySelectorAll('.image_checkbox');
    let list = document.querySelectorAll('.photo_box_hover');
    let photbxLi = document.querySelectorAll('.photo_box');
    let checkInput = document.querySelector('.selectAll_checkBox')
    if(!checkInput.checked){
      checkBox.forEach(item=>{
        item.checked = false 
        list.forEach((item)=>{item.classList.remove('checked')})
        photbxLi.forEach((item)=>{item.style.transform = 'scale(1)';})
      })
      setSelectedImg([])
    }
    else{
      checkBox.forEach(item=>{
        item.checked = true 
        list.forEach((item)=>{item.classList.add('checked')})
        photbxLi.forEach((item)=>{item.style.transform = 'scale(0.95)';})
      })
      document.querySelector('.selectAll_option_modal').style.height = '8vh'
      setSelectedImg(imagesArray)
    }
  }
  //-------- DELETE / SELECT IMAGES FUNCTIONS ---------//


  const  downloadHandler = () => {
    var link = document.createElement('a');
    link.href = 'images.jpg';
    link.download = 'Download.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
 
  //-------- USE EFFECT --------//
  useEffect(()=>{
    if(imagesArray.length==0) {
      document.querySelector('.selectAll_option_modal').style.height = '0'
      document.querySelector('.selectAll_checkBox').checked = false
    }
    if(selectedImg.length>0){
      document.querySelectorAll('.delete').forEach(item=>{
        item.disabled = true
        setDelete_state(true)
      });
    }else{
      document.querySelectorAll('.delete').forEach(item=>{
        item.disabled = false
        setDelete_state(false)
      });
    }
    if(selectedImg.length!=imagesArray.length) document.querySelector('.selectAll_checkBox').checked = false;
    if(selectedImg.length==imagesArray.length) document.querySelector('.selectAll_checkBox').checked = true;
  },[imagesArray,selectedImg])
  useEffect(() => {
    setLoading(true)
    getImage();
    setLoading(false)
  }, [])
  return (
    <>
    {/*********  PHOTO MAIN SECTION ***********/}
    <section className='Photo_main_page'>
        <i onClick={AlbumFormHandler} className="fa-sharp fa-solid fa-circle-plus"></i>
        {/******* SELECT OPTIONS MODAL *******/}
        <div className="selectAll_option_modal">
          <div className="option-control">
            <input className='selectAll_checkBox' onClick={selectAllHandler} type="checkbox" id='selectAll'/>
            <label htmlFor="selectAll">Select All</label>
          </div>
          <div className="options">
            <i onClick={open_selected_modal} className="fa-solid fa-trash"></i>
            <i onClick={downloadHandler} className="fa-solid fa-download"></i>
            <i onClick={close_select_options} className="fa-solid fa-xmark"></i>
          </div>
        </div>
        {/******** PHOTO WRAPPER ********/}
        <div className="photo_wrapper">
          <div className='photo_box' onClick={ShowUpload} style={{ display: `${imagesArray.length == 0 ? 'none' : "grid"}` }}>
            Add Photos
          </div>
          {
            imagesArray.length != 0 ? imagesArray.map((url,index) => {
              return <div className='photo_box' key={url}>
                {/******** HOVER IMAGE ********/}
                <div className='photo_box_hover'>
                  <input className='image_checkbox' onClick={(e)=>select_img_handler(e,index,url)} type="checkbox" id="photo_check" />
                  <i onClick={()=>showeditlist(index)} className="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <img src={url} alt={url} />
                {/****** IMAGE DELETE VIEW LIKE LIST ******/}
                <div className="option_list">
                  <button onClick={()=>viewPhotoHandler(index)} className="view listitem">
                    <i className="fa-sharp fa-solid fa-eye"></i>
                    <p>View</p>
                  </button>
                  <button disabled={delete_state} onClick={()=>open_delete_modal(url)} className="delete listitem" >
                    <i  className="fa-solid fa-trash-can"></i>
                    <p>Delete</p>
                  </button>
                  <button onClick={()=>favHandler(url)} className="favourite listitem">
                   <i className="fa-solid fa-heart"></i>
                    <p>Favourite</p>
                  </button>
                </div>
              </div>
            }) : <i style={{ display: `${loading ? 'none' : "block"}` }} className="fa-solid fa-cloud-arrow-up" onClick={ShowUpload}></i>
            }
      </div>
    </section>
    {/****** UPLOAD CONTAINER ********/}
    <section className='Uploadwrapper' ref={Uploadref}>
        <i className="fa-solid fa-circle-xmark" onClick={closeupload}></i>
        <div className="uploadbox">
          <i className="fa-solid fa-cloud-arrow-up"></i>
          <p>Drag & Drop images here</p>
          <span>or</span>
          <input className="custom-file-input" ref={inputRef} type="file" multiple="multiple" accept="image/jpeg, image/png, image/jpg" onChange={(e) => postDetail(e.target.files)} />
        </div>
        <button onClick={UploadHandler}>Upload image</button>
    </section>
    {/****** LOADER ********/}
    {loading?<div className="loader_wrapper">
        <span className="loader"></span>
    </div> : ""}
    {/****** TOASTER (FOR NOTIFICATON ) ********/}
    <Toaster/>
    {/****** DELETE ONE CONFIRM  ********/}
    <section className="delete_photo_modal">
      <h3>Delete photo</h3>
      <p>Are you sure you want to delete {selectedImg.length!=0?selectedImg.length + " photos":""}</p>
      <div className="delete_cancel">
        <button onClick={closeDeleteHandler}>cancel</button>
        <button onClick={()=>deleteImgHandler(deleteurl)}>Delete</button>
      </div>
    </section>
    {/****** VIEW PHOTO ******/}
    <div className="viewPhoto">
      <img src={imagesArray[viewId]} alt="photo" />
      <i onClick={()=>{
        document.querySelector('.viewPhoto').style.transform = 'translate(-50%,-50%) scale(0)'
      }} className="fa-solid fa-xmark"></i>
    </div>
    {/******* ALBUM FORM  *******/}
    <AlbumForm selectedImg={selectedImg} albumRef={albumRef}/>
    </>
  )
}