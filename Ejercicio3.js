const ordenarAscendente = array => {
    return array.sort((a, b) => a - b);
};

const numeros = [3, 1, 5, 2, 4];
const numerosOrdenados = ordenarAscendente(numeros);
console.log("Números ordenados de manera ascendente:", numerosOrdenados);

