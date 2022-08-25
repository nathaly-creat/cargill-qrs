import React from "react";
import { NavbarWrapper } from "./NavbarWrapper";
import { Link } from "react-router-dom";
// import {Complain} from '../../Client/Complain.jsx'
import { LogOut } from "../LogOut";
import { ComplainView } from "../../../views/Complain/ComplainView";

const Navbar = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <Link to="/handler/quejas" element={<ComplainView/>}>QUEJAS Y RECLAMOS</Link>
      <Link to="/handler/sugerencias">SUGERENCIAS</Link>
      <Link to="/handler/seguimiento">SEGUIMIENTO</Link>
      <Link to="/handler/cerrar sesion" onClick={LogOut}>
        CERRAR SESIÓN
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
