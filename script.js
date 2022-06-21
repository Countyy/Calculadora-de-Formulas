//  Código JavaScript das fómulas e cálculos
//  Aprecie com moderação

function hipotenusa() {
    const cateto1 = document.getElementById("number1").value;           // Pega o valor do primeiro cateto
    const cateto2 = document.getElementById("number2").value;           // Pega o valor do segundo cateto
    const sqr = cateto1 * cateto1 + cateto2 * cateto2                   // Diz ao programa a fórmula que ele deve utilizar 
    const result = Math.sqrt(sqr)                                       // Faz a raíz quadrada da fórmula
    document.getElementById("output").setAttribute("value", result)     // Coloca o resultado no campo de "output" do aplicativo
}

function kmhToMs() {
    const kmH = document.getElementById("km/h-m/s").value;
    console.log(kmH)
    const result = kmH / 3.6
    const round = Math.round(result * 100) / 100
    console.log(round)
    document.getElementById("km/h-m/s-result").setAttribute("value", round)
}