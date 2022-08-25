import React from "react";
import { NavbarWrapper } from "../../Shared/NavBar/NavbarWrapper";
import { Link } from "react-router-dom";
import { LogOut } from "../../Shared/LogOut.js";
// import { ComplainView } from "../../../views/Complain/ComplainView";
// import { SuggestionsView } from "../../../views/Suggestion/SuggestionView";

const NavbarService = ({ open }) => {
  
  return (
    <NavbarWrapper open={open}> 
      {/* <Link style={{color: 'white'}} to="/handler/delivered" element={<ComplainView/>}>DELIVERADO</Link> */}
      <Link style={{color: 'white'}} to="/handler/seguimiento">SEGUIMIENTO</Link>
      <Link style={{color: 'white'}} to="/handler/cerrar sesion" onClick={LogOut}>
        CERRAR SESIÓN
      </Link>
    </NavbarWrapper>
  );
};


export default NavbarService;
