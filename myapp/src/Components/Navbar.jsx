import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HamburgerIcon} from '@chakra-ui/icons'
import "../Css_Styles/Navbar.css"
export const Navbar = () => {
    const [isResponsive, setResponsive] = useState(false);

    const toggleResponsive = () => {
      setResponsive(!isResponsive);
    };

  return (
   <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
    <Link to="/" className="active"> Home</Link>
    <Link to="/signup" >SignUp</Link>
    <Link to="/dashboard" >Dashboard</Link>
    <Link to="/courses" >Courses</Link>
    <Link to="/logout" >Logout</Link>
    <a  className="icon"  onClick={toggleResponsive}>
    <HamburgerIcon/>
      </a>
   </div>
  )
}
