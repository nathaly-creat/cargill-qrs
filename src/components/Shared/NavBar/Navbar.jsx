import React from "react";
import { NavbarWrapper } from "./NavbarWrapper";
import { Link } from "react-router-dom";
import { LogOut } from "../LogOut";

const Navbar = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <Link to="/quejas">QUEJAS Y RECLAMOS</Link>
      <Link to="/sugerencias">SUGERENCIAS</Link>
      <Link to="/seguimiento">SEGUIMIENTO</Link>
      <Link to="/cerrar sesion" onClick={LogOut}>
        CERRAR SESIÓN
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
