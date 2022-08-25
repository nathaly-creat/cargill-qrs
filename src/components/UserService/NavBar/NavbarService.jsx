import React from "react";
import { NavbarWrapper } from "./NavbarWrapper";
import { Link } from "react-router-dom";
import { LogOut } from "../../Shared/LogOut.js";

const NavbarService = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <Link to="/handler/seguimiento-servicio">Seguimiento</Link>
      {/* <Link to="/handler/sugerencias">SUGERENCIAS</Link>
      <Link to="/handler/seguimiento">SEGUIMIENTO</Link> */}
      <Link to="/handler/cerrar sesion" onClick={LogOut}>
        CERRAR SESIÓN
      </Link>
    </NavbarWrapper>
  );
};

export default NavbarService;
