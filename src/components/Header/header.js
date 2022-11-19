import React from 'react'
import "./header.css"
import image from "../../assets/my-img.jpg"
import twitter from "../../assets/twitter.svg"
import github from "../../assets/github.svg"
import gmail from "../../assets/gmail.svg"
import linkedin from "../../assets/LinkedIn.svg"

function header() {
  return (
    <div className='header'>
      <div>
        <img className='profile' src={image} alt='no-img'></img>
      </div>
      <div className='heading'>
        <h2 className='h2'>Tarang Verma</h2>
      </div>
      <div className='connect'>
        <div>
          <a href='#'><img src={github} alt='no'></img></a>
        </div>
        <div>
          <a href='#'><img src={linkedin} alt='nn'></img></a>
        </div>
        <div>
          <a href='#'><img src={twitter} alt='noo'></img></a>
        </div>
        <div>
          <a href='#'><img src={gmail} alt="nee"></img></a>
        </div>
      </div>

    </div>
  )
}

export default header;