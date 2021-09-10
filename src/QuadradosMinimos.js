const QuadradosMinimos = (points) => {

  // let x = [0.3, 2.7, 4.5, 5.9, 7.8];
  // let y = [1.8, 1.9, 3.1, 3.9, 3.3];

  let x = points.map(e => parseFloat(e.x))
  let y = points.map(e => parseFloat(e.y))

  let n = x.length

  let somaX = x.reduce((s, a) => s += a, 0);
  let somaQuadradosX = x.reduce((s, a) => s += a * a, 0);
  let somaXMultiplicadoY = 0;
  let somaY = y.reduce((s, a) => s += a, 0);

  y.forEach((e, idx) => somaXMultiplicadoY += e * x[idx]);

  let QuadradoDaSomaX = somaX * somaX

  let B1 = ((somaX * somaY) - n * somaXMultiplicadoY) / (QuadradoDaSomaX - (n * somaQuadradosX));
  let B0 = (somaY - (B1 * somaX)) / n;

  let SomaQuadradoDistacia = 0.0;

  let pontos = []

  x.forEach((a, idx) => {

    let data = {}

    data.x = a
    data.y = y[idx]

    data.newY = (B0 + (B1 * a)).toFixed(4);
    data.newX = (y[idx] - data.newY).toFixed(4);

    SomaQuadradoDistacia += data.newX * data.newX;
    pontos.push(data)
  })

  return {
    straightPoints: pontos,
    SomaQuadradoDistacia: SomaQuadradoDistacia.toFixed(4),
    B0: B0.toFixed(4),
    B1: B1.toFixed(4),
  }
}

export default QuadradosMinimos;