function calcularAreaCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
}

const radio = 5;
const area = calcularAreaCirculo(radio);
console.log("El área del círculo con radio", radio, "es:", area);

