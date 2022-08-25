import React from "react";
import { NavbarWrapper } from "./NavbarWrapper";
import { Link } from "react-router-dom";
// import {Complain} from '../../Client/Complain.jsx'
import { LogOut } from "../LogOut";
import { ComplainView } from "../../../views/Complain/ComplainView";
import { SuggestionsView } from "../../../views/Suggestion/SuggestionView";

const Navbar = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <Link style={{color: 'white'}} to="/handler/quejas" element={<ComplainView/>}>QUEJAS Y RECLAMOS</Link>
      <Link style={{color: 'white'}} to="/handler/sugerencias" element={<SuggestionsView/>}>SUGERENCIAS</Link>
      <Link style={{color: 'white'}} to="/handler/seguimiento">SEGUIMIENTO</Link>
      <Link style={{color: 'white'}} to="/handler/cerrar sesion" onClick={LogOut}>
        CERRAR SESIÓN
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
