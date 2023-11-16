/**
 * @author:Héctor Cevallos Paredes
 */

// Exportaciones con nombre y un alias

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

const PI = 3.14159;

// Exportando con alias
export { sumar as add, restar, PI };