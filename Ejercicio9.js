function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

const numero = 5;
console.log("Tabla de multiplicar del número", numero + ":");
tablaMultiplicar(numero);
