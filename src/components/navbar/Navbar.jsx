import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar "+(menuOpen && "active")}>
      <div className='wrapper'>
        <div className="left">
          <Link to="/" exact>MTHR</Link>
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

export default Navbar