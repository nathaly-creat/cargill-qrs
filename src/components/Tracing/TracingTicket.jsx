import React from 'react';
import { FormGroup, Label, Input , Form} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TracingTicket.css"

import { Link } from "react-router-dom";

//Componente para seguimiento
export const Seguimiento = () => {

    return (
    <div className="form-seguimiento">
        <h2 className="title-seguimiento">Seguimiento</h2>
        <br/>
        <p>Ingresa el número del ticket para consultar el estado de tu solicitud</p>
        <br/>
  <Form>
  <FormGroup>
    <Label for="exampleDatetime">
    No. de Ticket
    </Label>
    <Input
      id="exampleDatetime"
      name="datetime"
      type="datetime"
    />
  </FormGroup>
  </Form>
  <br/>

  <Link to="/handler/seguimiento/solicitud">
  <button className="button-seguimiento"  > Consultar </button>
  </Link>

  </div>
    );
  };