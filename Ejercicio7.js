function esPalindromo(palabra) {

    palabra = palabra.toLowerCase().replace(/\s/g, '');

    return palabra === palabra.split('').reverse().join('');
}

const palabra = "reconocer";
if (esPalindromo(palabra)) {
    console.log(palabra + " es un palíndromo.");
} else {
    console.log(palabra + " no es un palíndromo.");
}
