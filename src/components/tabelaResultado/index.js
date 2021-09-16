import React from 'react';

import { TableResultado } from './styles';

function TabelaResultado({ dataGraph, additionalInformation }) {
  return (
    <TableResultado>
      <h1>Resultado</h1>
      <p>Ajuste linear por Método dos Quadrados Mínimos para os pontos:</p>
      <table>
        <thead>
          <tr>
            <th>i</th>
            <th>x</th>
            <th>y</th>
            <th>x²</th>
            <th>xy</th>
            <th>µ</th>
            <th>d</th>
          </tr>
        </thead>
        <tbody>
          {dataGraph.map((e, idx) => (
            <tr>
              <td>{idx}</td>
              <td>{e.x}</td>
              <td>{e.y}</td>
              <td>{e.xQuadrado}</td>
              <td>{e.xy}</td>
              <td>{e.newY}</td>
              <td>{e.newX}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{additionalInformation.totalX}</td>
            <td>{additionalInformation.totalY}</td>
            <td>{additionalInformation.totalX2}</td>
            <td>{additionalInformation.totalXY}</td>
            <td>{additionalInformation.totalU}</td>
            <td>{additionalInformation.totalD}</td>
          </tr>
        </tbody>
      </table>
    </TableResultado>
  );
}

export default TabelaResultado;