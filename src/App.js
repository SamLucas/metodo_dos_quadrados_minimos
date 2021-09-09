import React, { useEffect, useState } from 'react';

import QuadradosMinimos from './QuadradosMinimos';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function App() {

  const [data, setData] = useState()

  useEffect(() => {

    let x = [0.3, 2.7, 4.5, 5.9, 7.8];
    let y = [1.8, 1.9, 3.1, 3.9, 3.3];

    const { pontos } = QuadradosMinimos(x, y)
    setData(pontos)
  }, [])


  return <div>
    <LineChart width={800} height={300} data={data}>
      <Line type="monotone" dataKey="y" stroke="#8884d8" />
      <Line type="monotone" dataKey="mi" stroke="red" />
      <XAxis dataKey="x" />
      <XAxis dataKey="dis" />
      <CartesianGrid stroke="#ccc" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </div>;
}

export default App;
