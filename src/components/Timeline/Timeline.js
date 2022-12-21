import React from 'react'
import "./Timeline.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Timeline() {
  AOS.init();
  return (
    <div data-aos="slide-up" data-aos-offset="400" data-aos-delay="50" className='T1'>
      <h1>PROJECTS</h1>
      <div className="timeline">
        <div data-aos="slide-right" data-aos-offset="100" data-aos-delay="500" className="container left">
          <div className="content-m">
            <h2>LET'S CHAT </h2>
            <h3><i>Chat app (1 month)</i></h3>
            <p>An app to connect with people. It let's us to chat with people just like any other chating apps
              Also connected it to firebase for backend services.</p>
            <div className='logos'>
              <div className='react logo'><img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'></img></div>
              <div className='node logo'><img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'></img></div>
              <div className='mongodb logo'><img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'></img></div>
              <div className='mongoose logo'></div>

            </div>
            <div className='logos'>
              <div className='JavaScript logo'><img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'></img></div>
              <div className='Html logo'><img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'></img></div>
              <div className='Css3 logo'><img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'></img></div>
              <div className='firebase logo'></div>
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content-m">
            <h2>NETFLIX-CLONE</h2>
            <p>A web app clone of Netflix. Used TMDB Api to fetch latest movies and categories to integrate in my app. 
              I have tried to create the UI exactly same as the original Netflix website.
            </p>
            <div className='logos'>
              <div className='react logo'><img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'></img></div>
              <div className='node logo'><img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'></img></div>
              <div className='mongodb logo'><img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'></img></div>
              <div className='react-router logo'><img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'></img></div>
            </div>
            <div className='logos'>
              <div className='express.js logo'><img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'></img></div>

            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content-m">
            <h2>WEATHER FORCAST</h2>
            <p>Weather App is a simple app which will tell us all about the current weather as well as the weather forecast of 7 days as per the weather data 
              of any selected location .</p>
            <div className='logos'>
            <div className='react logo'><img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'></img></div>
               <div className='node logo'><img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'></img></div>
               <div className='mongodb logo'><img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'></img></div>
               <div className='react-router logo'><img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'></img></div>
            </div>
            <div className='logos'>

            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content-m">
            <h2>PORTFOLIO</h2>
            <p>Here is my self build Portfolio which to showcase my skills and also a personal project to better myself with Front-end Devlopment.</p>
            <div className='logos'>
            <div className='react logo'><img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'></img></div>
               <div className='node logo'><img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'></img></div>
               <div className='mongodb logo'><img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'></img></div>
               <div className='react-router logo'><img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'></img></div>
            </div>
            <div className='logos'>

            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content-m">
            <h2>DISENY+ HOME PAGE</h2>
            <p>Diseny+ was having nice UI. I tried to make a same home page just like them, it helped me to advance my CSS skills.</p>
            <div className='logos'>
            <div className='react logo'><img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'></img></div>
               <div className='node logo'><img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'></img></div>
               <div className='mongodb logo'><img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'></img></div>
               <div className='react-router logo'><img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'></img></div>
            </div>
            <div className='logos'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline