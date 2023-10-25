/**
 * Considere el siguiente array colores: let colores = ["blanco", "azul", "amarillo", "negro", "rojo", "verde"]; 
 * Usando la desestructuración de matrices, asigne los primeros 2 elementos a las variables primerColor y segundoColor 
 * y asigna los elementos restantes a la variable otrosColores. Muestra los valores de estas 3 variables por consola
 * 
 * Autor: Héctor Cevallos Paredes
 */

let colores = ["blanco", "azul", "amarillo", "negro", "rojo", "verde"];
const [primerColor, segundoColor, ...otrosColores] = colores;
console.log(primerColor, segundoColor, otrosColores);

