import React, { useState } from 'react'
import {Nav,Logo, PageLinks, Hamburger} from "./Navbar.styled"
import {NavLink, Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({setSignFlag, signFlag}) => {

const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo src="https://m.media-amazon.com/images/I/41wkG24yDkL.png" />

        <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <GiHamburgerMenu/>
      </Hamburger>

      <PageLinks isOpen={isOpen} onClick={()=>setIsOpen(false)}>
        <NavLink style={({isActive})=> ({color : isActive ? "red" : "black", textDecoration:"none", fontSize:"1.5rem"})} to="/home">Home</NavLink>
        <NavLink style={({isActive})=> ({color : isActive ? "red" : "black", textDecoration:"none", fontSize:"1.5rem"})}  to="/map">Map</NavLink>
        <NavLink style={({isActive})=> ({color : isActive ? "red" : "black", textDecoration:"none", fontSize:"1.5rem"})} to="/cities">City List</NavLink>
        <NavLink style={({isActive})=> ({color : isActive ? "red" : "black", textDecoration:"none", fontSize:"1.5rem"})} to="/" onClick={()=>setSignFlag(!signFlag)}>Sign Out</NavLink>
      </PageLinks>
    </Nav>
  );
}

export default Navbar