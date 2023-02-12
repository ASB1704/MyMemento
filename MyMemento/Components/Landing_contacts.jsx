import React from 'react'
import '../src/Css/Landing_contacts.css'

export const Landing_contacts = () => {
  

  return (
    <div className='Landing_contacts_main'>
      <div className="Landing_contacts">
        <div className="rdinfo team_info">
          <div className="rd team-img">
            <img src="../src/assets/rohit.jpeg" alt="Rohit" />
          </div>
          <div className="rohit">
            <div className='Nameandcontact'>
              <p>ROHIT DHAKAD</p>
              <span>WEB DEVELOPER</span>
            </div>
            <div className="rohit_contacts">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="asbinfo team_info">
          <div className="anurag">
            <div className='Nameandcontact'>
              <p>ANURAG SINGH BAGHEL</p>
              <span>WEB DEVELOPER</span>
            </div>
            <div className="anurag_contacts">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="asb team-img">
            <img src="../src/assets/anurag.jpeg" alt="Rohit" />
          </div>
        </div>
      </div>
      <div className="contactus">
        <p>CONTACT WITH US</p>
        <div className='contact_icons'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-sharp fa-solid fa-envelope"></i>
        </div>
      </div>
    </div>
  )
}
