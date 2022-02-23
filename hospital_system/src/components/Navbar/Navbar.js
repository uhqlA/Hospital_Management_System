import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../Navbar/Logo/logo.jpg';
// import {Navbar, Nav, Container} from 'react-bootstrap'
import {
  Nav,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavElements.js'

const Navbar = () => {
   return (
     <>
     <Nav>
       <NavMenu>
         <NavLink to='/'> <img
      src={logo} alt='logo'
      width="70"
      height="70"
    /></NavLink>
         <NavBtn>
         <NavBtnLink to='/Admin' activeStyle>ADMIN</NavBtnLink>
         <NavBtnLink to='/Doctors' activeStyle>DOCTOR</NavBtnLink>
         <NavBtnLink to='/Employees' activeStyle>EMPLOYEE</NavBtnLink>
        </NavBtn>
       </NavMenu>
     </Nav> 
     </>
   )
}

export default Navbar