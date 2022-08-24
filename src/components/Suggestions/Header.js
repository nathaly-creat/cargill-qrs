import React, { useState } from "react";
import { HeaderWrapper } from "./styles/header";
import Navbar from "./Navbar";
import MenuButton from "../Suggestions/MenuButton";
import logoCargill from "../../assets/logoCargill.jpg";
// import retroceder from "../../assets/retroceder.png";
// import { fa-arrow-rotate-left } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi'
import { LogOut } from "../Shared/LogOut";

function Header() {
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

export default Header;