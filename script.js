//  Código JavaScript das fómulas e cálculos
//  Aprecie com moderação

function hipotenusa() {
    const cateto1 = document.getElementById("number1").value;           // Pega o valor do primeiro cateto
    const cateto2 = document.getElementById("number2").value;           // Pega o valor do segundo cateto
    const sqr = cateto1 * cateto1 + cateto2 * cateto2                   // Diz ao programa a fórmula que ele deve utilizar 
    const result = Math.sqrt(sqr)                                       // Faz a raíz quadrada da fórmula
    document.getElementById("output").setAttribute("value", result)     // Coloca o resultado no campo de "output" do aplicativo
}

function kmhToMs(a) {
    if (a === 0) {
        const kmH = document.getElementById("km/h-m/s").value;
        const result = kmH / 3.6
        const round = Math.round(result * 100) / 100
        console.log(round)
        document.getElementById("km/h-m/s-result").setAttribute("value", round)
    }
    if (a === 1) {
        const kmH = document.getElementById("km/h-m/s1").value;
        const result = kmH * 3.6
        const round = Math.round(result * 100) / 100
        console.log(round)
        document.getElementById("m/s-km/h-result").setAttribute("value", round)
    }
}

function velocidademedia(a) {
    if (a === 0) {
        const distancia = document.getElementById("distancia1").value
        const Vm = document.getElementById("Vm1").value
        const result = distancia / Vm
        document.getElementById("outputtempo").setAttribute("value", result)
    }
    if (a === 1) {
        const distancia = document.getElementById("distancia2").value
        const tempo = document.getElementById("tempo2").value
        const result = distancia / tempo
        document.getElementById("outputvm2").setAttribute("value", result)
    }

    if (a === 2) {
        const Vm = document.getElementById("Vm3").value
        const tempo = document.getElementById("tempo3").value
        const result = Vm * tempo
        document.getElementById("outputdistancia3").setAttribute("value", result)
    }
}