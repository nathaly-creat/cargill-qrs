import React from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SelectProceeds } from "../FreeSuggestions/SelectProceeds.jsx";
import "./SuggestionsTable.css";

export const FreeSuggestionsTable = () => {
  return (
    <div className="suggestions-service">
      <h2>Estatus de Quejas para Deliberar.</h2>
      <Table responsive className="suggestions-service-table">
        <thead>
          <tr>
            <th>Ticket</th>
            <th>Cliente</th>
            <th>Queja</th>
            <th>Lote</th>
            <th>Fecha</th>
            <th>Factura</th>
            <th>Deliberar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              1
            </th>
            
            <td>correo</td>
            <td>
              opcionesQueja
            </td>
            <td>
              lote
            </td>
            <td>
              creando el ticket
            </td>
            <td>
              Nro factura
            </td>
            <td>
              <SelectProceeds/>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};