import React, { useState } from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import logoCargill from "../../../assets/logoCargill.jpg";
// import retroceder from "../../assets/retroceder.png";
// import { fa-arrow-rotate-left } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi'
import { LogOut } from "../LogOut";

export const Header = () => {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!open);
    };
    
    
  return (
    <HeaderWrapper>
      <Navbar open={open}/>
      <MenuButton open={open} handleClick={handleClick}/>
      <img className='logo' src={logoCargill} alt="logo" width="35%"/>
      {/* <img className='logo' src={retroceder} alt="logo" width="10%"/>  */}
      <BiArrowBack style={{margin:"10px", color:'black', width:"35", height:"30"} } className='iconLogout' onClick={LogOut}/>
    </HeaderWrapper>
  );
}
