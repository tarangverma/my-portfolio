import React from 'react';
import "./About.css"
import img from "../../assets/my-img.jpg";

function About() {
  return (
    <div className='about'>
        <h1>ABOUT</h1>
        <div className='head'>
            <img src={img} alt='no' />
            
            <p>jvjvj</p>
        </div>
    </div>
  )
}

export default About;