import React from 'react';
//import { FormGroup, Label, Input , Form} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TracingSolicitud.css'
import { Link } from 'react-router-dom';


import  { useEffect, useState } from 'react';
import {collection, getDocs, updateDoc,doc, where, query} from 'firebase/firestore';
import { db } from '../../firebase/firebase.js';
//import './style.css';
import Swal from 'sweetalert2'
//Componente para seguimiento
export const TracingSolicitud = () => {
  
  const [users, setTotal] = useState([]);
  const usersCollectionRef = collection(db, 'buttonStatus');  

  const getUsers = async () => {
   const data = await getDocs(query(usersCollectionRef, where('state', '<', 6)));
    setTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));   
  };

  useEffect(() => {
    getUsers();
  }, []);
  
/* ------------ Funcion estados del boton ------------ */
const buttonState = async (user) => {
  console.log(user)
  const userState = doc(db, 'buttonStatus', user.id);  

  switch(user.state){
    case 0 :
      try{
        await updateDoc(userState, {
          state: 1,
        })
        console.log('amarillo')
        getUsers();
      } catch (error) {
        console.log(error)
      }    
    break;
    case 1 :
      try{
        await updateDoc(userState, {
          state: 2,
        })
        console.log('amarillo')
        getUsers();
      } catch (error) {
        console.log(error)
      }    
    break;
    case 2 :
      try{
        await updateDoc(userState, {
          state: 3,
          
        })
        getUsers();
      } catch (error) {
        console.log(error)
      }   
    break;
  }
};
/* --------------------------------------- */
  return (

      <div className='containerFormSol'>
      {users.map((user, id) => {
        return (
          
          <div>
          <div >
            <h1 className='titulo'>Seguimiento</h1>
            <p className='sub-titulo'>Estado de su solicitud</p>
            <br/>
          </div>
          <div className={'containerForm '+ (user.state ==0 ? 'containerForm' :user.state ==1 ?'containerForm-uno': '')}
          key={id}>
             <h1 className='numero'>1</h1>
            </div> 
            <div className='titleForm'>
                  <h2 style={{color:'#DAAA00' }}>Recibido</h2>
            </div>
            <div className={'containerForm '+ (user.state ==1 ?'containerForm':user.state ==2 ?'containerForm-uno': '')}
          key={id}>
             <h1 className='numero'>2</h1>
            </div> 
             <div className='titleForm'>
                  <h2 style={{color:'#DAAA00'}}>En Proceso</h2>
            </div>            
            <div className={'containerForm '+ (user.state == 2?'containerForm':user.state ==3 ?'containerForm-uno': '')}
          key={id}>
             <h1 className='numero'>3</h1>
            </div> 
             <div className='titleForm'>
                 <h2 style={{color:'#DAAA00' , }}>Resuelto</h2>
            </div>

            <Link to='/handler/seguimiento/solicitud/calificacion'>
            <button className={'buttonStyleSolicitus '+ (user.state ==2 ? 'buttonStyleSolicitus-uno': user.state ==3?'buttonStyleSolicitus-uno':'')}
                 onClick={ ()=> buttonState(user)}> 
                {user.state ? 'Calificar Servicio':'Calificar Servicio'} 
                </button>
                </Link>
            </div>

            
        );
      })}
      </div>
  
  );
};
  