import React from "react";
import { FormGroup, Label, Input, Form, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Complain.css";

import { db } from "../../firebase/firebase.js";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'

//Componente con el formulario de quejas
//PARA PROBARLO
export const Complain = () => {

  const usersCollectionRef = collection(db, "quejas");
  const [opcionesQueja, setOpcionesQueja] = useState([""]);
  const [plantaProducto, setPlantaProducto] = useState([""]);
  const [factura, setFactura] = useState([""]);
  const [fechaEmbarque, setFechaEmbarque ] = useState([""]);
  const [fechaCaducacion, setFechaCaducacion ] = useState([""]);
  const [lote, setLote ] = useState([""]);
  const [cantidad, setCantidad ] = useState([""]);
  const [unidad, setUnidad ] = useState([""]);
  const [comentario, setComentario ] = useState([""]);

  const insertFormQueja = () => {
    addDoc(usersCollectionRef,{
      opcionesQueja:opcionesQueja,
      plantaProducto:plantaProducto,
      factura:factura,
      fechaEmbarque:fechaEmbarque,
      fechaCaducacion:fechaCaducacion,
      lote:lote,
      cantidad:cantidad,
      unidad:unidad,
      comentario:comentario,
     })
      setOpcionesQueja("");
      setPlantaProducto("");
      setFactura("");
      setFechaEmbarque("");
      setFechaCaducacion("");
      setLote("");
      setCantidad("");
      setUnidad("");
      setComentario("");

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Ticket No.1',
        text: 'Con este ticket podras hacerle seguimiento a tu requerimiento',
        showConfirmButton: false,
        timer: 1800
      })
  };


  return (
    <div className="form-quejas">
      <h2 className="title-quejas">Quejas y reclamos</h2>
      <Form>
        <Label for="exampleSelect" sm={4}>
          Opciones de quejas
        </Label>
        <FormGroup row>
          <Input id="exampleSelect" name="select" type="select"
           value={opcionesQueja}
           onChange={(event) => {
             setOpcionesQueja(event.target.value);
           }}>
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
        <Label for="exampleSelect" sm={4}>
          Planta productora
        </Label>
        <FormGroup row>
          <Input id="exampleSelect" name="select" type="select"
           value={plantaProducto}
           onChange={(event) => {
             setPlantaProducto(event.target.value);
           }}>
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
            value={factura}
            onChange={(event) => {
              setFactura(event.target.value);
            }}
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
            value={fechaEmbarque}
            onChange={(event) => {
              setFechaEmbarque(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleDate">Fecha de caducación</Label>
          <Input
            id="exampleDate"
            name="date"
            placeholder="date placeholder"
            type="date"
            value={fechaCaducacion}
            onChange={(event) => {
              setFechaCaducacion(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">Lote</Label>
          <Input
            id="exampleNumber"
            name="number"
            placeholder="cantidad"
            type="number"
            value={lote}
            onChange={(event) => {
              setLote(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">Cantidad</Label>
          <Input
            id="exampleNumber"
            name="number"
            placeholder="cantidad"
            type="number"
            value={cantidad}
            onChange={(event) => {
              setCantidad(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleNumber">Unidad</Label>
          <Input
            id="exampleNumber"
            name="number"
            placeholder="unidad"
            type="number"
            value={unidad}
            onChange={(event) => {
              setUnidad(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Comentario</Label>
          <Input id="exampleText" name="text" type="textarea"
           value={comentario}
           onChange={(event) => {
             setComentario(event.target.value);
           }} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input id="exampleFile" name="file" type="file" />
          <FormText>
            This is some placeholder block-level help text for the above input.
            It‘s a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
      </Form>
      <button className="button-quejas"
        onClick={() => insertFormQueja(
          opcionesQueja,
          plantaProducto,
          factura,
          fechaEmbarque,
          fechaCaducacion,
          lote,
          cantidad,
          unidad,
          comentario
          )  
        }> Enviar </button>
    </div>
  );
};
