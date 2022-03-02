import React from 'react'
import './navstyles.css'

function Navbar() {
  return (
    <div>   
      <nav className="navbar">
    
      <div className="logo">Penn Medicine</div>
      
      <ul className="nav-links">
        
 
        <div className="menu">
          <a href="/doctorslogin">Doctors Portal</a>
          <a href="/stafflogin">Staff Portal</a>
          <a href="/adminlogin`">Admin Portal</a>
          <div className="services">
            <a href="/">Products and Services</a>

            <ul className="dropdown">
              <li><a href="/">Outpatient Services</a></li>
              <li><a href="/">Inpatient Services</a></li>
              <li><a href="/">Special Clinic Services</a></li>
              <li><a href="/">Radiology Services</a></li>
              <li><a href="/">Family Medical scheme</a></li>
              <li><a href="/">Corporate Medical scheme</a></li>
            </ul>
         </div>
          
          <a href="/">Contacts</a>
        </div>
      </ul>
    </nav></div>
  )
}

export default Navbar