/* eslint-disable default-case */

import React, { useEffect, useState } from "react";
import {collection, getDocs, updateDoc,doc, where, query} from "firebase/firestore";
import { db } from "../../firebase/firebase.js";
import "./TracingService.css";
export const TracingService = () => {
  
    const [users, setTotal] = useState([]);
    const usersCollectionRef = collection(db, "buttonStatus");  
  
    const getUsers = async () => {
     const data = await getDocs(query(usersCollectionRef, where("state", "<", 6)));
      setTotal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));   
    };
  
    useEffect(() => {
      getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
  /* ------------ Funcion estados del boton ------------ */
  const buttonState = async (user) => {
    console.log(user)
    const userState = doc(db, "buttonStatus", user.id);  
  
    switch(user.state){
      case 0 :
        try{
          await updateDoc(userState, {
            state: 1,
          })
          console.log("1")
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
          console.log("2")
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
          console.log("3")
          getUsers();
        } catch (error) {
          console.log(error)
        }   
       
      break;
      case 3 :
        try{
          await updateDoc(userState, {
            state: 4,     
          })
          console.log("3")
          getUsers();
        } catch (error) {
          console.log(error)
        }   
       
      break;
    }
  };
  /* --------------------------------------- */

      return (
        <div>
        <div >
        {users.map((user, id) => {
          return (
            <div className="containerOrders">
            
            
                <button className={'buttonStyle '+ (user.state === 0 ? 'buttonStyle':user.state ==1 ?'buttonStyle-preparing':'')}
                 onClick={ ()=> buttonState(user)}> 
                {user.state ? 'Recibido':'Recibido'} 
                </button>

                <button className={'buttonStyle '+ (user.state === 1 ?'buttonStyle':user.state ==2 ?'buttonStyle-preparing':'')}
                 onClick={ ()=> buttonState(user)}> 
                {user.state ? 'Pendiente':'Pendiente'} 
                </button>

                <button className={'buttonStyle '+ (user.state === 2 ? 'buttonStyle':user.state ==3 ?'buttonStyle-preparing':'')}
                 onClick={ ()=> buttonState(user)}> 
                {user.state ? 'Resuelto':'Resuelto'} 
                </button>

              </div> 
          );
        })}
        </div>
      </div>
      );
   /*
    <button className={'buttonStyle '+ (user.state ==0 ? 'buttonStyle':user.state ==1 ?'buttonStyle-preparing': user.state==2?'buttonStyle-preparing-dos':'')}
                 onClick={ ()=> buttonState(user)}> 
                {user.state ? 'preparando':'pendiente'?'tres':''} 
                </button>
   */
    
}