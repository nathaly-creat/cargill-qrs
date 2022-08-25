import React from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SuggestionsTable.css";

export const SuggestionsTable = () => {
  return (
    <div className="suggestions-service">
      <h2>Seguimiento Servicio al Cliente</h2>
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
              <button>Asignar</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};