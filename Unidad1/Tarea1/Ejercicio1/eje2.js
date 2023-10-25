/**
 * Destructuring de arrays:
   Asignación del primer y del último elemento de un array
   Asignación del primer y del resto de elementos de un array (rest operator)
   Asignación de un valor anidado dentro de un array
   Intercambio de variables
   Asignación de los valores de un array devuelto por una función
* 
* Autor: Héctor Cevallos Paredes
 */

// Asignación del primer y del último elemento de un array

const numeros = [1, 2, 3, 4, 5];
const [primerNumero, , , , ultimoNumero] = numeros;


// Asignación del primer y del resto de elementos de un array (rest operator)

const letras = ["a", "b", "c", "d", "e"];
const [primerLetra, ...restoLetras] = letras;

// Asignación de un valor anidado dentro de un array
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [segundoElemento]] = matriz

// Intercambio de variables

let a = 5, b = 10;
[a, b] = [b, a];

// Asignación de los valores de un array devuelto por una función

function obtenerColores() {
    return ["amarillo", "verde", "azul"];
}
const [color1, color2, color3] = obtenerColores();

