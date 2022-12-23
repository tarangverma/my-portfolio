import React from 'react';
import "./About.css"
import img from "../../assets/my-img.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  AOS.init();
  return (
    <div data-aos="slide-up" data-aos-offset="20" data-aos-easing="ease-in" data-aos-delay="500" className='about'>
        <div className='head'>
            <img src={img} alt='no' />
            <div className='details'>
            <div className='H1'><h1>ABOUT</h1></div>
            <div className='P1'><p>I am a 2nd year student currently pursuing engineering in Computer Science (2021-2025).
              I love building stuffs, currently exploring DevOps, its various tools and getting some hands on exerience on it.
              I try to learn and contribute to Open Source, It has been a lovely journey till here and I have tried to contribute 
              in various Open Source Organizations.  </p></div>
            </div>
        </div>
    </div>
  )
}

export default About;