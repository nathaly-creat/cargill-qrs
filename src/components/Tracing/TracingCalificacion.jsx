
import React from 'react';

import './TracingCalificacion.css';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

export const TracingCalificacion = () => {
  

      return (
       <div className='calificacion'>
        <h1 className='titulo'>Seguimiento</h1>
        <p>Califique que tal fue el servicio que le hemos brindado</p>
        <br/>

        <Link to='/handler/seguimiento'>
        <button onClick={()=>   
        Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Gracias por calificarnos',
        showConfirmButton: false,
        timer: 1800
       }) } className='buttonStyleCalificacionUno' >  Muy buena</button>
       </Link>
        <br/>

        <Link to='/handler/seguimiento'>
        <button onClick={()=>   
        Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Gracias por calificarnos',
        showConfirmButton: false,
        timer: 1800
       }) } className='buttonStyleCalificacionDos' >  Buena</button>
       </Link>
        <br/>

        <Link to='/handler/seguimiento'>
        <button onClick={()=>   
        Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Gracias por calificarnos',
        showConfirmButton: false,
        timer: 1800
       }) } className='buttonStyleCalificacionTres' >  Regular</button>
       </Link>
        <br/>

        <Link to='/handler/seguimiento'>
        <button onClick={()=>   
        Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Gracias por calificarnos',
        showConfirmButton: false,
        timer: 1800
       }) } className='buttonStyleCalificacionCuatro' >  Malo</button>
       </Link>
       </div>
      );
   /*
    <button className={'buttonStyle '+ (user.state ==0 ? 'buttonStyle':user.state ==1 ?'buttonStyle-preparing': user.state==2?'buttonStyle-preparing-dos':'')}
                 onClick={ ()=> buttonState(user)}> 
                {user.state ? 'preparando':'pendiente'?'tres':''} 
                </button>
   */
    
}