import React from 'react';
import { FormGroup, Label, Input , Form} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Seguimiento.css"

//Componente para seguimiento
export const Seguimiento = () => {
    
    return (
      
    <div className="form-seguimiento">
        <h2 className="title-seguimiento">Seguimiento</h2>
        <p>Ingresa el número del ticket para consultar el estado de tu solicitud</p>
  <Form>
  <FormGroup>
    <Label for="exampleDatetime">
    No. de Ticket
    </Label>
    <Input
      id="exampleDatetime"
      name="datetime"
      placeholder="Número de factura"
      type="datetime"
    />
  </FormGroup>

  </Form>
  
  <button className="button-seguimiento" > Consultar </button>
  </div>
    );
  };