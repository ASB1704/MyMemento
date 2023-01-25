import React from 'react'
import '../src/Css/template.css'
import HTMLFlipBook from "react-pageflip";
export const Template = ({tempImg}) => {
  const url = tempImg;
  return (
    <div className='templates templateWrapper'>
      <HTMLFlipBook
       width={400}
       height={500}
       showCover={true}
       >
        <div className="demoPage coverpage">
          <div className="cover_info">
            <h3>My-Album</h3>
            <p>22 jan 2020</p>
          </div>
          <img src="https://images.unsplash.com/photo-1674515625118-a7d9eb5c167a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="cover page" />
        </div>
        <div className="demoPage">
          <img src={url[1]} alt="1" />
        </div>
        <div className="demoPage">
          <img src={url[2]} alt="2" />
          <div>
            <img src={url[3]} alt="2" />
            <img src={url[0]} alt="2" />
          </div>
        </div>
        <div className="demoPage">
          <img src={url[3]} alt="3" />
          <img src={url[1]} alt="3" />
          <img src={url[2]} alt="3" />
          <img src={url[0]} alt="3" />
        </div>
        <div className="demoPage">
          <img src={url[2]} alt="4" />
        </div>
        <div className="demoPage">
          <img src={url[1]} alt="5" />
        </div>
        <div className="demoPage">
          <img src={url[0]} alt="6" />
          <img src={url[2]} alt="6" />
        </div>
        <div className="demoPage">
        </div>
      </HTMLFlipBook>
    </div>
  )
}
