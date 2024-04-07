import React from 'react'
import "./card.css"
import data from '../../data'

const Card = () => {
  return (
    <div className='card'>
        <div className="text">
        <h1>Insurance and investing for your many sides</h1>
        <p>We've been protecting people, businesses and futures for more than 90 years.</p>
        </div>

        <div className="items">
        {data.map((item)=>(   
       
      
            <div className="item">
            
                <div className="icon">      
                <i class={item.icon}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <button>READ MORE-</button>
            </div>
             ))}
        </div>
    </div>
  )
}

export default Card