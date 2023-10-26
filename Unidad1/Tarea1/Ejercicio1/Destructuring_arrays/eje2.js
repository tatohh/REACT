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
console.log(primerNumero, ultimoNumero);

// Asignación del primer y del resto de elementos de un array (rest operator)

const letras = ["a", "b", "c", "d", "e"];
const [primerLetra, ...restoLetras] = letras;
console.log(primerLetra, `Resto de array ${restoLetras}`);

// Asignación de un valor anidado dentro de un array
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [segundoElemento]] = matriz
console.log(segundoElemento);

// Intercambio de variables

let a = 5, b = 10;
console.log(`a antes del cambio ${a}, b antes del cambio ${b}`);
[a, b] = [b, a];
console.log(`a después del cambio ${a}, b después del cambio ${b}`);

// Asignación de los valores de un array devuelto por una función

function obtenerColores() {
    return ["amarillo", "verde", "azul"];
}
const [color1, color2, color3] = obtenerColores();
console.log(color1, color2, color3);

