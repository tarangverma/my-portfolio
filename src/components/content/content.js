import React from 'react'
import "./content.css"
import github from "../../assets/github.svg"

function Content() {
  return (
    <div className='c1'>
    <div className='border1'></div>
    <div className='content'> 
    <div className='main'>Hi I'm Tarang Verma</div> 
            <div className='title'>
              <span>FullStack Developer</span>
            </div>
    </div>
          <div className='l1'><label>A self taught Web Developer building and learning everytime<br />
          Currently learning DevOps trying to better myself with it's tools <br />
          and technologies.</label></div> 
          <div className='buttons'>
            <div className='btn1'><button>LET'S CONNECT</button></div>
            <div className='btn2'><button>GITHUB<img src={github}></img></button></div>
          </div>
          <div className='border2'></div>
    </div>
                   
  )
}

export default Content