// import React, { useState } from "react";
import { HeaderWrapper } from "../../components/Shared/NavBar/HeaderWrapper"
// import Navbar from "./Navbar";
// import MenuButton from "./MenuButton";
import logoCargill from "../../assets/logoCargill.jpg";
import '../Shared/NavBar/StyleHeader.css';
// import { LogOut } from "../LogOut";


export const HeaderLogin = () => {
    
  return (
    <>
    <div className="container-Header">
       <HeaderWrapper>
      <img  className="float-right" width="100%" height="100%"  src={logoCargill} alt="logo"/>
     </HeaderWrapper>
       </div>
    </>
  );
}
