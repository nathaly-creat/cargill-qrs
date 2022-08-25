// import React, { useState } from "react";
import { HeaderWrapper } from "../../Shared/NavBar/HeaderWrapper.jsx"
// import Navbar from "./Navbar";
// import MenuButton from "./MenuButton";
import logoCargill from "../../../assets/logoCargill.jpg";
import { BiLogOut} from 'react-icons/bi'
import '../../Shared/NavBar/StyleHeader.css';
// import { LogOut } from "../LogOut";
import { useNavigate } from 'react-router'

export const HeaderService = () => {
    // const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const logOut=()=>{
      sessionStorage.clear();
      navigate('/login')
    }

  return (
    <>
    <div className="container-Header">
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light outl"> */}
    <HeaderWrapper>
      <img  className="float-right" width="100%" height="100%"  src={logoCargill} alt="logo"/>
      <BiLogOut style={{color:'#000000', height:"50%"} } className='iconLogout' onClick={logOut}/>
    </HeaderWrapper>
    {/* </nav> */}
    </div>
    </>
  );
}
