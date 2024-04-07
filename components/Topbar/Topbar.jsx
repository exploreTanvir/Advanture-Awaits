import React from 'react';
import "./topBar.css";

const TopBar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar "+(menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            MTHR
          </a>
          
        </div>
        <div className='right'>
          <div className='dropDown' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar