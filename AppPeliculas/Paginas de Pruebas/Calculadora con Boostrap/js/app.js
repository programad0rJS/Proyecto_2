function sumar() {

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}



function Restar() {

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}




function Multiplicar() {

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}