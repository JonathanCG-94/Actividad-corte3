const calcularImpuestos = (monto, porcentajeImpuestos) => {
    return (monto * porcentajeImpuestos) / 100;
};

const montoCompra = 100;
const porcentajeImpuestos = 15; 
const impuestos = calcularImpuestos(montoCompra, porcentajeImpuestos);
console.log("El monto de impuestos a pagar es:", impuestos);

