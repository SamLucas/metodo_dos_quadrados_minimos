export default QuadradosMinimos = (x, y) => {

  let n = x.length

  let somaX = x.reduce((s, a) => s += a, 0);
  let somaQuadradosX = x.reduce((s, a) => s += a * a, 0);
  let somaXMultiplicadoY = 0;
  let somaY = y.reduce((s, a) => s += a, 0);

  y.forEach((e, idx) => somaXMultiplicadoY += e * x[idx]);

  let QuadradoDaSomaX = somaX * somaX

  let B1 = ((somaX * somaY) - n * somaXMultiplicadoY) / (QuadradoDaSomaX - (n * somaQuadradosX));
  let B0 = (somaY - (B1 * somaX)) / n;

  let D = 0.0;

  let SomaQuadradoDistacia = []

  x.forEach((a, idx) => {

    let data = {}

    data.x = a
    data.y = y[idx]

    data.newY = (B0 + (B1 * a)).toFixed(2);
    data.newX = (y[idx] - data.mi).toFixed(2);

    SomaQuadradoDistacia += data.dis * data.dis;
    pontos.push(data)
  })

  return {
    pontos,
    SomaQuadradoDistacia
  }
}