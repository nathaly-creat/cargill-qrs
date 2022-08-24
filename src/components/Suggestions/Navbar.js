import React from "react";
import { NavbarWrapper } from "../Suggestions/styles/NabvarStyles";
import { Link } from 'react-router-dom'
import { LogOut } from '../../components/Shared/LogOut';

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <td>
      <Link to='/quejas'>QUEJAS Y RECLAMOS</Link>
      </td>
      <td><Link to='/sugerencias' >SUGERENCIAS</Link>
      </td>
       <td>
        <Link to='/seguimiento' >SEGUIMIENTO</Link>
       </td>
        <td>
        <Link to='/cerrar sesion' onClick={LogOut} >CERRAR SESIÓN </Link>
        </td>
     </NavbarWrapper>
  );
}

export default Navbar;