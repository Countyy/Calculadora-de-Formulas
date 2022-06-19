function hipotenusa() {
    const cateto1 = document.getElementById("number1").value;
    const cateto2 = document.getElementById("number2").value;
    const sqr = cateto1 * cateto1 + cateto2 * cateto2
    const result = Math.sqrt(sqr)

    document.getElementById("output").setAttribute("value", result)
}