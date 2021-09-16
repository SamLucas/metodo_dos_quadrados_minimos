import React from 'react';

import { TableXY } from './styles';

import IconTrash from "../../assets/trash.png"

function TabelaPontos({ points, removeData }) {
  return (
    <TableXY>
      <h1>Pontos adicionados</h1>
      <p>Os ponmtos adicionados são calculados altomáticamente.</p>

      <div className="row">

        <di className="header">
          <div className="headerPoints">X</div>
          <div className="headerPoints">Y</div>
        </di>

        <div className="contentPoints">
          {points.map((e, idx) =>
            <div className="contentPointsAdd">
              <p className="ContentValue">{e.x}</p>
              <p className="ContentValue">{points[idx].y}</p>
              <div className="ButtonRemove" onClick={() => removeData(idx)} >
                <img src={IconTrash} alt="iconLixeira" />
              </div>
            </div>
          )}
        </div>
      </div>
    </TableXY>
  )
}

export default TabelaPontos;