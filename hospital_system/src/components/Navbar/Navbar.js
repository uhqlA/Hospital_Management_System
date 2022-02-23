import React from 'react'
import './Navstyles.css'
import logo from '../Navbar/Logo/logo.jpg';
function Navbar() {
  return (
    <div>   
      <nav className="navbar">
    
      <div className="logo"><img
      src={logo} alt='logo'
      width="70"
      height="70"
    /></div>
      
      <ul className="nav-links">
        
 
        <div className="menu">
          <a href="/">Doctors Portal</a>
          <a href="/">Staff Portal</a>
          <a href="/">Admin Portal</a>
          <div className="services">
            <a href="/">Services</a>

            <ul className="dropdown">
              <li><a href="/">In Patients</a></li>
              <li><a href="/">Out Patients</a></li>
            </ul>
          </div>
          
          <a href="/">Contacts</a>
        </div>
      </ul>
    </nav></div>
  )
}

export default Navbar