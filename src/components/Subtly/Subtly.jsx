import React from 'react'
import "./Subtly.css"

import lImg from "../../assets/lamborghinicarspeedprestige38570.jpeg"

const Subtly = () => {
  return (
    <div className='Subtly'>
        <div className="wrapper">
        <div className="left">
            <img src={lImg} alt="" />
        </div>
        <div className="right">
            <h1>Safe. Relaxing. Good to ride in. Subtly decorated.</h1>
        </div>
        </div>
    </div>
  )
}

export default Subtly