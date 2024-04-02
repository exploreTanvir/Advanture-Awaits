import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import TopBar from './components/Topbar/Topbar';
import Hero from './components/hero/Hero';

const App = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className='app'>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className='section'>
          <Hero/>
        </div>
    </div>
  )
}

export default App