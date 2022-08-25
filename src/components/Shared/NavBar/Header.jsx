import React, { useState } from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import logoCargill from "../../../assets/logoCargill.jpg";
import { BiArrowBack } from 'react-icons/bi'
import '../NavBar/StyleHeader.css';
import { LogOut } from "../LogOut";
// import { useNavigate } from 'react-router'

export const Header = () => {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!open);
    };

  return (
    <>
    <div className="container-Header">
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light outl"> */}
    <HeaderWrapper>
      <Navbar open={open}/>
      <MenuButton open={open} handleClick={handleClick}/>
      <img  className='logo' width="100%" height="100%"  src={logoCargill} alt="logo"/>
      <BiArrowBack style={{margin:"10px", color:'black', height:"50%"} } className='iconLogout' onClick={LogOut}/>
    </HeaderWrapper>
    {/* </nav> */}
    </div>
    </>
  );
}
