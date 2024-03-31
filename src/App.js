import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Menu from './components/menu/Menu';

const App = () => {
  const [menuOpen,setMenuOpen]=useState (false)
  return (
    <>
     <Router>
        <Switch>
          <Route exact path="/">
            <Navbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          </Route>          
        </Switch>
    </Router>
    </>
  )
}

export default App