// import React, { useState } from "react";
import { HeaderWrapper } from "../../Shared/NavBar/HeaderWrapper.jsx"
// import Navbar from "./Navbar";
// import MenuButton from "./MenuButton";
import logoCargill from "../../../assets/logoCargill.jpg";
// import { BiLogOut} from 'react-icons/bi'
import '../../Shared/NavBar/StyleHeader.css';
// import { LogOut } from "../LogOut";
// import { useNavigate } from 'react-router'
import NavbarService from '../NavBar/NavbarService';
import MenuButton from '../../Shared/NavBar/MenuButton';
import React, { useState } from "react";

export const HeaderService = () => {
    // const [open, setOpen] = useState(false);
    
      const [open, setOpen] = useState(false);
      
      const handleClick = () => {
          setOpen(!open);
      };

  return (
       <>
      <div className="container-Header">
          <HeaderWrapper>
        <NavbarService open={open}/>
        <MenuButton open={open} handleClick={handleClick}/>
        <img  className='logo' width="100%" height="100%"  src={logoCargill} alt="logo"/>
      </HeaderWrapper>
      </div>
      </>
    );
}
