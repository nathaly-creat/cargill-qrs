import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {collection, getDocs, updateDoc, doc, where, query} from "firebase/firestore";
import { db } from "../../../firebase/firebase.js";
import "./SuggestionsTable.css";
import Swal from 'sweetalert2'

export const SuggestionsTable = () => {

  const [users, setTotal] = useState([]);
  const usersCollectionRef = collection(db, "quejas");  

  const getUsers = async () => {
   const data = await getDocs(query(usersCollectionRef));
    setTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));   
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div>
       <div className="suggestions-service">
      <br/>
      <h2>Seguimiento Servicio al Cliente</h2>
      <br/>
      <div className="containerOrders">
            <div>
               <Table responsive className="suggestions-service-table">
        <thead>
          <tr>
            <th>Ticket</th>
            <th>Cliente</th>
            <th>Queja</th>
            <th>Lote</th>
            <th>Fecha</th>
            <th>Factura</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {console.log(users)}
        {users.map((user, id) => {
          return(
          <tr key={id} >
            <th scope="row">
              1
            </th>
            <td>{user.correo} </td>
            <td>
              {user.opcionesQueja}
            </td>
            <td>
              {user.lote}
            </td>
            <td>
              {console.log(user.createdAt)}
          {new Date((user.createdAt.seconds *1000) +(user.createdAt.nanoseconds/1000)).toLocaleString()}
            </td>
            <td>
             {user.factura}
            </td>
            <td>
              <button className="btn-assign" onClick={()=>   
        Swal.fire({
        position: 'top-center',
        icon: 'success',
        title:'Se envio correctamente',
        text: 'Queja asignada al departamento',
        showConfirmButton: false,
        timer: 3000
       })
        } >Asignar</button>
            </td>
          </tr>
          )
          })}
        </tbody>
      </Table>
            </div>
    
   
      </div>
    </div>
    </div>
  );
};