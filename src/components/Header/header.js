import React from 'react'
import "./header.css"
import image from "../../assets/my-img.jpg"
import twitter from "../../assets/twitter.svg"
import github from "../../assets/github.svg"
import gmail from "../../assets/gmail.svg"
import linkedin from "../../assets/LinkedIn.svg"

function header() {
const handelClick = () => {

}

  return (
    <div className='header'>
      <div className='profile'>
        <img className='profile-img' src={image} alt='no-img'></img>
      </div>

      <div data-aos="slide-up" data-aos-offset="20" data-aos-easing="ease-in" data-aos-delay="500" className='connect'>
        <div className='connect-title'>
          <a href='#'>About</a>
        </div>
        <div className='connect-title'>
          <a href='#'>Projects</a>
        </div>
        <div className='connect-title'>
          <a href='#'>Contacts</a>
        </div>
        <div className='connect-title'>
          <a href='#'>Resume</a>
        </div>
      </div>

    </div>
  )
}

export default header;