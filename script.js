function hipotenusa() {
    const cateto1 = document.getElementById("number1").value;           // Pega o valor do primeiro cateto
    const cateto2 = document.getElementById("number2").value;           // Pega o valor do segundo cateto
    const sqr = cateto1 * cateto1 + cateto2 * cateto2                   // Diz ao programa a fórmula que ele deve utilizar 
    const result = Math.sqrt(sqr)                                       // Faz a raíz quadrada da fórmula
    document.getElementById("output").setAttribute("value", result)     // Coloca o resultado no campo de "output" do aplicativo
}