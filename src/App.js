import React, { useEffect, useRef, useState } from 'react';

import QuadradosMinimos from './QuadradosMinimos';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import styled from 'styled-components';

export const CLineChart = styled(LineChart)`
  width: 50vw;
  height: 100vh;
`;

function App() {

  const [points, setPoints] = useState([])
  const [dataGraph, setDataGraph] = useState([])
  const [additionalInformation, setAdditionalInformation] = useState()

  const [X, setX] = useState('')
  const [Y, setY] = useState('')

  useEffect(() => {
    const { straightPoints, ...rest } = QuadradosMinimos(points)
    setDataGraph(straightPoints)
    setAdditionalInformation(rest)

  }, [points])

  const registerNewPoints = () => {
    setPoints(s => [...s, { x: X, y: Y }])
    document.getElementById("inputX").value = ""
    document.getElementById("inputY").value = ""
  }

  return (
    <div>

      <input type="number" id="inputX" onChange={e => setX(e.target.value)} />
      <input type="number" id="inputY" onChange={e => setY(e.target.value)} />

      <button onClick={registerNewPoints}>Adicionar</button>

      <table>
        <thead>
          <tr>
            <th>I</th>
            <th>X</th>
            <th>Y</th>
          </tr>
        </thead>
        <tbody>
          {dataGraph.map((e, idx) => (
            <tr>
              <td>{idx}</td>
              <td>{e.x}</td>
              <td>{e.y}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>i</th>
            <th>x</th>
            <th>y</th>
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
              <td>{e.newY}</td>
              <td>{e.newX}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{dataGraph.reduce((s, { x }) => s += x, 0)}</td>
            <td>{dataGraph.reduce((s, { y }) => s += y, 0)}</td>
            <td>{dataGraph.reduce((s, { newY }) => s += newY, 0)}</td>
            <td>{dataGraph.reduce((s, { newX }) => s += newX, 0)}</td>
          </tr>
        </tbody>
      </table>


      <h3>{additionalInformation?.B1}</h3>
      <h3>{additionalInformation?.B0}</h3>
      <h3>{additionalInformation?.SomaQuadradoDistacia}</h3>

      <CLineChart width={600} height={600} data={dataGraph}>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <Line type="monotone" dataKey="newY" stroke="red" />
        <XAxis dataKey="x" />
        <XAxis dataKey="newX" />
        <CartesianGrid stroke="#ccc" />
        <YAxis />
        <Tooltip />
      </CLineChart>
    </div>
  );
}

export default App;
