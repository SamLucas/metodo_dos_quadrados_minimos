import React, { useEffect, useRef, useState } from 'react';

import QuadradosMinimos from './QuadradosMinimos';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import {
  Container,
  Side,
  Header,
  ContentInputXY,
  ContentInputJson,
  TableXY,
  TableResult,
  TextResponse,
  TextSepator,
  ContentGraph,
  Footer
} from "./styles"

import IconTrash from "./assets/trash.png"
import IconGitHub from "./assets/github.png"

function App() {

  const [points, setPoints] = useState([])
  const [dataGraph, setDataGraph] = useState([])
  const [additionalInformation, setAdditionalInformation] = useState(null)

  const [X, setX] = useState('')
  const [Y, setY] = useState('')

  useEffect(() => {
    const { straightPoints, ...rest } = QuadradosMinimos(points)
    setDataGraph(straightPoints)
    setAdditionalInformation(rest)

    if (!points.length) {
      setDataGraph(initialState)
    }
  }, [points])

  const registerNewPoints = () => {
    const [data] = points.filter(e => e.x === X && e.y === Y)
    if (!data) {
      setPoints(s => [...s, { x: X, y: Y }])
      document.getElementById("inputX").value = ""
      document.getElementById("inputY").value = ""
    } else {
      alert(`Os pontos indicados já foram cadastrados.`)
    }
  }

  const registerNewPointsTextArea = () => {
    try {
      const response = document.getElementById("jsonInput").value
      const responseJson = JSON.parse(response)

      const refactory = responseJson.x.map((e, idx) => ({ x: e, y: responseJson.y[idx] }))
      setPoints(refactory)

    } catch (e) {
      alert("Não foi possivel capturar os pontos")
    }
  }

  const removeData = indice => setPoints(s => s.filter((i, idx) => idx !== indice))

  var widthGraph = (document.documentElement.clientWidth / 2) - 30
  var heightGraph = document.documentElement.clientHeight - 30

  const initialState = [
    { x: 0.3, y: 1.8, newY: '1.7369', newX: '0.0631' },
    { x: 2.7, y: 1.9, newY: '2.3845', newX: '-0.4845' },
    { x: 4.5, y: 3.1, newY: '2.8702', newX: '0.2298' },
    { x: 5.9, y: 3.9, newY: '3.2479', newX: '0.6521' },
    { x: 7.8, y: 3.3, newY: '3.7606', newX: '-0.4606' }
  ]

  return (
    <Container>
      <Side>
        <div className="contentData">
          <Header>
            <h1>Método dos Quadrados Mínimos</h1>
            <p>Uma técnica de otimização matemática que procura encontrar o melhor ajuste para um conjunto de dados tentando minimizar a soma dos quadrados das diferenças entre o valor estimado e os dados observados.</p>
            <p>Adicione novos valores na tabela para realizar o cálculo da equação:</p>
          </Header>

          <ContentInputXY>
            <input type="number" id="inputX" onChange={e => setX(e.target.value)} />
            <input type="number" id="inputY" onChange={e => setY(e.target.value)} />
            <button onClick={registerNewPoints}>Adicionar</button>
          </ContentInputXY>

          <TextSepator>
            - ou -
          </TextSepator>

          <ContentInputJson>
            <textarea
              name="jsonInput"
              id="jsonInput"
              cols="30"
              rows="7"
              placeholder={`Adicione seus pontos em formato json: 
{
   "x": [0.3, 2.7, 4.5, 5.9, 7.8],
   "y": [1.8, 1.9, 3.1, 3.9, 3.3]
}`} ></textarea>
            <button onClick={registerNewPointsTextArea}>Adicionar</button>
          </ContentInputJson>

          {points.length > 0 && (
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
                        <img src={IconTrash} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TableXY>
          )}

          {points.length > 0 && (
            <TableResult>
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
            </TableResult>
          )}

          {points.length > 0 && (
            <TextResponse>
              D({additionalInformation?.B1}; {additionalInformation?.B0}) = {additionalInformation?.SomaQuadradoDistacia}
            </TextResponse>
          )}
        </div>

        <Footer>
          <p>Desenvolvido por <a target="_blank" href="https://github.com/samlucas">Samuel Lucas</a></p>
          <img src={IconGitHub} alt="" /><br />
        </Footer>

      </Side>

      <ContentGraph>
        <LineChart width={widthGraph} height={heightGraph} data={dataGraph}>
          <Line type="monotone" dataKey="y" stroke="#8884d8" />
          <Line type="monotone" dataKey="newY" stroke="red" />
          <XAxis dataKey="x" />
          <XAxis dataKey="newX" />
          <CartesianGrid stroke="#ccc" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ContentGraph>
    </Container>
  );
}

export default App;
