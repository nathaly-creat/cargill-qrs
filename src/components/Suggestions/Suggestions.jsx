
import React from 'react';
import { FormGroup, Label, Input, Form, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Suggestions/styles/styles.css';
import { db } from '../../firebase/firebase.js';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'

//Componente con el formulario de quejas
//PARA PROBARLO
export const Suggestions = () => {

  const usersCollectionRef = collection(db, 'sugerencias');
  const [cliente, setCliente] = useState(['']);
  const [Correo, setCorreo] = useState(['']);
  const [sugerencia, setSugerencia] = useState(['']);

  const insertFormSugerencia = () => {
    addDoc(usersCollectionRef,{
      cliente:cliente,
      Correo:Correo,
      sugerencia:sugerencia,
      
     })
      setCliente('');
      setCorreo('');
      setSugerencia('');

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        text: 'Se envio correctamente la sugerencia',
        showConfirmButton: false,
        timer: 1800
      }) 
  };

  return (
    <div className='form-quejas'>
      <h2 className='title-quejas'>Sugerencias</h2>
      <br/>
      <Form>
       <FormGroup>
          <Label for='exampleDate'>Cliente</Label>
          <Input
            id='exampleDate'
            name='date'
            type='text'
            value={cliente}
            onChange={(event) => {
              setCliente(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for='exampleDate'>Correo</Label>
          <Input
            id='exampleDate'
            name='date'
            type='text'
            placeholder='correo@email.com'
            value={Correo}
            onChange={(event) => {
              setCorreo(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for='exampleText'>Comentario</Label>
          <Input style={{resize: 'both', height: '6em', width: '300px'}}id='exampleText' name='text' type='textarea' 
           value={sugerencia}
           onChange={(event) => {
             setSugerencia(event.target.value);
           }} />
        </FormGroup>
      </Form>
      <button className='button-quejas'
        onClick={() => insertFormSugerencia(
          cliente,
          Correo,
          sugerencia,
          )  
        }> Enviar </button>
    </div>
  );
};


