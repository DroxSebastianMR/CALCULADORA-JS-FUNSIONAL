function calculadora() {
    let operacion = prompt("Ingrese la operación (+, -, *, /):");
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("Error: No se puede dividir por 0");
                return;
            }
            break;
        default:
            alert("Operación no válida");
            return;
    }

    console.log(`Resultado: ${resultado}`);
    alert(`El resultado es: ${resultado}`);
}

calculadora();