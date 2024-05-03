const contarPalabras = function(cadena) {
    // Eliminar los espacios en blanco al inicio y al final de la cadena
    cadena = cadena.trim();
    // Dividir la cadena en palabras utilizando los espacios como delimitadores
    const palabras = cadena.split(/\s+/);
    // Retornar la cantidad de palabras encontradas
    return palabras.length;
};

const texto = "Esta es una cadena de ejemplo con varias palabras";
const cantidadPalabras = contarPalabras(texto);
console.log("La cantidad de palabras en la cadena es:", cantidadPalabras);
