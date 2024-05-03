function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

const num = 5;
const resultadoFactorial = factorial(num);
console.log("El factorial de", num, "es:", resultadoFactorial);
