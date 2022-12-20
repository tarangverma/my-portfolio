import React from 'react'
import "./Contact.css"
import github from "../../assets/github.svg"
import gmail from "../../assets/gmail.svg"
import linkedin from "../../assets/LinkedIn.svg"
import twitter from "../../assets/twitter.svg"

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-1'><h1>CONTACT ME</h1></div>
        <div className='lines'>
            <p>I am active on socials and my inbox is always open wheether is a Hi or any question or query feel free to ping me 
                . I will try to connect with you as soon as possible.
            </p>
            <div className='connect-logo'>
            <div className='connect-logo-img'><a href='#'><img src={gmail} alt=''></img></a></div>
            <div className='connect-logo-img'><a href='#'><img src={linkedin} alt=''></img></a></div>
            <div className='connect-logo-img'><a href='#'><img src={twitter} alt=''></img></a></div>
            <div className='connect-logo-img'><a href='#'><img src={github} alt=''></img></a></div>
            </div>
    </div>
    </div>
  )
}

export default Contact