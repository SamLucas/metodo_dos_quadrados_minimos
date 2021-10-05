import React, { useEffect, useState } from 'react';

import QuadradosMinimos, { exempleData } from './QuadradosMinimos';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import {
  Container,
  Side,
  Header,
  ContentInputXY,
  ContentInputJson,
  TextResponse,
  TextSepator,
  ContentGraph,
  Footer
} from "./styles"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TabelaPontos from './components/tabelaPontos';
import TabelaResultado from './components/tabelaResultado';

import IconGitHub from "./assets/github.png"

function App() {

  const [points, setPoints] = useState([])
  const [dataGraph, setDataGraph] = useState([])
  const [additionalInformation, setAdditionalInformation] = useState(null)

  const [dataResizeWindow, setDataResizeWindow] = useState()
  const [heightGraph, setHeightGraph] = useState()
  const [widthGraph, setWidthGraph] = useState()

  const [textExample, setTextExample] = useState("")

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
      notify(`Os pontos indicados já foram cadastrados.`)
    }
  }

  const registerNewPointsTextArea = () => {
    try {
      const response = document.getElementById("jsonInput").value
      const responseJson = JSON.parse(response)

      const refactory = responseJson.x.map((e, idx) => ({ x: e, y: responseJson.y[idx] }))
      setPoints(refactory)

    } catch (e) {
      notify("Não foi possível capturar os pontos!")
    }
  }

  const removeData = indice => {
    setPoints(s => s.filter((i, idx) => idx !== indice))
    notifySuccess(`Os pontos selecionados foram deletados.`)
  }

  const notify = (msg) => toast.error(msg, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifySuccess = (msg) => toast.success(msg, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  const initialState = [
    { x: 0.3, y: 1.8, newY: '1.7369', newX: '0.0631' },
    { x: 2.7, y: 1.9, newY: '2.3845', newX: '-0.4845' },
    { x: 4.5, y: 3.1, newY: '2.8702', newX: '0.2298' },
    { x: 5.9, y: 3.9, newY: '3.2479', newX: '0.6521' },
    { x: 7.8, y: 3.3, newY: '3.7606', newX: '-0.4606' }
  ]

  const TextPlaceholder = `Adicione seus pontos em formato json: \n{\n   "x": [0.3, 2.7, 4.5, 5.9, 7.8],\n   "y": [1.8, 1.9, 3.1, 3.9, 3.3]\n}`

  useEffect(() => {
    const handleResize = () => setDataResizeWindow(window.innerWidth)
    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {

    let newWidthGraph
    let newHeightGraph

    if (dataResizeWindow < 1090 && dataResizeWindow > 0) {
      newWidthGraph = dataResizeWindow - 30
      newHeightGraph = ((dataResizeWindow / 1.5) - 30)
    } else if (dataResizeWindow > 1500) {

      const totalWindow = document.documentElement.clientWidth
      const totalSideBar = document.getElementById("SideBar").clientWidth

      newWidthGraph = totalWindow - totalSideBar - 30
      newHeightGraph = document.documentElement.clientHeight - 30

    } else {
      if (document.documentElement.clientWidth < 1090) {
        newWidthGraph = document.documentElement.clientWidth
        newHeightGraph = (document.documentElement.clientHeight / 2) - 30
      } else {
        newWidthGraph = (document.documentElement.clientWidth / 2)
        newHeightGraph = document.documentElement.clientHeight - 30
      }
    }

    setHeightGraph(newHeightGraph)
    setWidthGraph(newWidthGraph)
  }, [dataResizeWindow])


  return (
    <Container>
      <Side id="SideBar">
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
              placeholder={TextPlaceholder}
              value={textExample}
              onChange={e => setTextExample(e.target.value)}
            />

            <p>
              Exemplos de entrada:
              <a onClick={() => setTextExample(exempleData[0])}>Exemplo 01</a>
              <a onClick={() => setTextExample(exempleData[1])}>Exemplo 02</a>
              <a onClick={() => setTextExample(exempleData[2])}>Exemplo 03</a>
              <a className="clear" onClick={() => setTextExample("")}>Limpar</a>
            </p>

            <button onClick={registerNewPointsTextArea}>Adicionar e Calcular</button>
          </ContentInputJson>

          {
            points.length > 0 && <>
              <TabelaPontos points={points} removeData={removeData} />
              <TabelaResultado
                dataGraph={dataGraph}
                additionalInformation={additionalInformation}
              />
              <TextResponse>
                D({additionalInformation?.B1}; {additionalInformation?.B0}) = {additionalInformation?.SomaQuadradoDistacia}
              </TextResponse>
            </>
          }
        </div >

        <Footer>
          <p>Desenvolvido por <a target="_blank" href="https://github.com/samlucas">Samuel Lucas</a></p>
          <img src={IconGitHub} alt="githubicon" /><br />
        </Footer>
      </Side >

      <ContentGraph id="contentGrap">
        <LineChart
          width={widthGraph}
          height={heightGraph}
          data={dataGraph}
        >
          <Line type="monotone" dataKey="y" stroke="#8884d8" />
          <Line type="monotone" dataKey="newY" stroke="red" />
          <XAxis dataKey="x" />
          <XAxis dataKey="newX" />
          <CartesianGrid stroke="#ccc" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ContentGraph>

      <ToastContainer />

    </Container >
  );
}

export default App;
