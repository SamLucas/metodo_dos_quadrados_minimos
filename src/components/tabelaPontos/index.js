import React, { useEffect, useState } from 'react';

import { TableXY } from './styles';

import IconTrash from "../../assets/trash.png"

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function TabelaPontos({ points, removeData }) {

  const moveScroll = (side) => {
    const [elementScroll] = document.getElementsByClassName("contentPoints")
    if (elementScroll) {
      elementScroll.scrollLeft += side ? 50 : -50;
    }
  }

  const confirmDelete = (points) => confirmAlert({
    title: 'Atenção!',
    message: `Deseja excluir os pontos(${points.x},${points.y}) selecionados? `,
    buttons: [
      {
        label: 'Sim',
        onClick: () => removeData(points.idx)
      },
      {
        label: 'Não',
        onClick: () => { }
      }
    ],
    closeOnEscape: false,
    closeOnClickOutside: false,
    overlayClassName: "overlay-custom-class-name"
  });


  return (
    <TableXY>
      <h1>Pontos adicionados</h1>
      <p>Os ponmtos adicionados são calculados altomáticamente.</p>

      <div className="row">

        <div className="header">
          <div className="headerPoints">X</div>
          <div className="headerPoints">Y</div>
        </div>

        <div className="contentPoints">
          {points.map((e, idx) =>
            <div className="contentPointsAdd">
              <p className="ContentValue">{e.x}</p>
              <p className="ContentValue">{points[idx].y}</p>
              <div className="ButtonRemove" onClick={() => confirmDelete({ ...e, idx })} >
                <img src={IconTrash} alt="iconLixeira" />
              </div>
            </div>
          )}
        </div>

        <div className="header">
          <div
            className="headerPoints pointer"
            onClick={() => moveScroll(false)}>
            {"<"}
          </div>
          <div
            className="headerPoints pointer"
            onClick={() => moveScroll(true)}>
            {">"}
          </div>
        </div>
      </div>
    </TableXY>
  )
}

export default TabelaPontos;