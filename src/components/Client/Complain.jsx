import React from "react";
import { FormGroup, Label, Input, Form, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Complain.css";

//Componente con el formulario de quejas
//PARA PROBARLO
export const Complain = () => {
  return (
    <div className="form-quejas">
      <h2 className="title-quejas">Quejas y reclamos</h2>
      <Form>
        <Label for="exampleSelect" sm={2}>
          Opciones de quejas
        </Label>
        <FormGroup row>
          <Input id="exampleSelect" name="select" type="select">
            <option placeholder="Seleccione su queja">
              Seleccione su tipo de queja
            </option>
            <option>AC- Alimento caliente</option>
            <option>CA- Color</option>
            <option>OD- Olor</option>
            <option>DT- Muerte</option>
            <option>EF- Exceso de finos</option>
            <option>ES- Efectos secundarios</option>
            <option>FW- Formulación incorrecta</option>
            <option>LD- Dureza del pellet</option>
            <option>ME- Materia extraña en el alimento</option>
            <option>PH - Producto enmohecido</option>
          </Input>
        </FormGroup>
        <Label for="exampleSelect" sm={2}>
          Planta productora
        </Label>
        <FormGroup row>
          <Input id="exampleSelect" name="select" type="select">
            <option>Seleccione planta productora</option>
            <option>Tehuacan</option>
            <option>Monterrey</option>
            <option>Salamanca</option>
            <option>CEDIS Guadalajara</option>
            <option>Cuautitlan</option>
            <option>Irapuato</option>
            <option>Merida</option>
            <option>Previtep</option>
            <option>Obregon A</option>
            <option>Guadalajara</option>
            <option>El Salto</option>
            <option>Obregón</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleDatetime">Factura</Label>
          <Input
            id="exampleDatetime"
            name="datetime"
            placeholder="Número de factura"
            type="datetime"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Detalle del producto y/o factura</Label>
        </FormGroup>

        <FormGroup>
          <Label for="exampleDate">Fecha de embarque</Label>
          <Input
            id="exampleDate"
            name="date"
            placeholder="date placeholder"
            type="date"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleDate">Fecha de caducación</Label>
          <Input
            id="exampleDate"
            name="date"
            placeholder="date placeholder"
            type="date"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">Lote</Label>
          <Input
            id="exampleNumber"
            name="number"
            placeholder="cantidad"
            type="number"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">Cantidad</Label>
          <Input
            id="exampleNumber"
            name="number"
            placeholder="cantidad"
            type="number"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">Unidad</Label>
          <Input
            id="exampleNumber"
            name="number"
            placeholder="unidad"
            type="number"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Comentario</Label>
          <Input id="exampleText" name="text" type="textarea" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input id="exampleFile" name="file" type="file" />
          <FormText>
            This is some placeholder block-level help text for the above input.
            It‘s a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <button className="button-quejas"> Enviar </button>
      </Form>
    </div>
  );
};
