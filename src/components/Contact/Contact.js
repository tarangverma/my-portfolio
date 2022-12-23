import React from 'react'
import "./Contact.css"
import github from "../../assets/github.svg"
import gmail from "../../assets/gmail.svg"
import linkedin from "../../assets/LinkedIn.svg"
import twitter from "../../assets/twitter.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  AOS.init();
  return (
    <div data-aos="slide-up" data-aos-offset="50" data-aos-easing="ease-in" data-aos-delay="500" className='contact'>
        <div className='contact-1'><h1>CONTACT ME</h1></div>
        <div className='lines'>
            <p>I am active on socials and my inbox is always open wheether is a Hi or any question or query feel free to ping me 
                . I will try to connect with you as soon as possible.
            </p>
            <div className='connect-logo'>
            <a className='connect-link' href='https://mail.google.com/mail/u/0/?fs=1&tf=cm'><div className='connect-logo-img'><img src={gmail} alt=''></img></div></a>
            <a className='connect-link' href='https://www.linkedin.com/in/tarang-verma-33324121a/'><div className='connect-logo-img'><img src={linkedin} alt=''></img></div></a>
            <a className='connect-link' href='https://twitter.com/TarangVerma19'><div className='connect-logo-img'><img src={twitter} alt=''></img></div></a>
            <a className='connect-link' href='https://github.com/tarangverma'><div className='connect-logo-img'><img src={github} alt=''></img></div></a>
            </div>
    </div>
    </div>
  )
}

export default Contact