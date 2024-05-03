function validarContrasena(contrasena) {
    // Criterios de validación
    const longitudMinima = 8; // Longitud mínima de la contraseña
    const caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; // Expresión regular para buscar caracteres especiales

    // Verificar la longitud mínima
    if (contrasena.length < longitudMinima) {
        return "La contraseña debe tener al menos " + longitudMinima + " caracteres.";
    }

    // Verificar la presencia de caracteres especiales
    if (!caracteresEspeciales.test(contrasena)) {
        return "La contraseña debe contener al menos un caracter especial (!@#$%^&*()_+-=[]{};':\"\\|,.<>/?).";
    }

    // La contraseña cumple con todos los criterios
    return "La contraseña es válida.";
}

// Ejemplo de uso de la función:
const contrasena1 = "abc123";
console.log(validarContrasena(contrasena1)); // Output: La contraseña debe tener al menos 8 caracteres.

const contrasena2 = "abcd@123";
console.log(validarContrasena(contrasena2)); // Output: La contraseña es válida.

