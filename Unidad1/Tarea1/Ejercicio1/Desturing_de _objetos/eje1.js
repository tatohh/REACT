/**
 * Escribe un ejemplo de cada una de estas asignaciones con destructuring:
   Destructuring de objetos:
   Asignación simple de los atributos de un objeto
   Asignación simple de los atributos de un objeto cambiando el nombre a las variables
   Asignación de un valor anidado dentro de un objeto
   Asignación con valores por defecto en caso de no existir
   En los parámetros de una función
   Valores por defecto en los parámetros de una función. Invoca varias veces y sin argumentos
   Asignación de los valores de un objeto devuelto por una función
 * Autor: Héctor Cevallos Paredes.
 */

// Asignación simple de los atributos de un objeto.
const alumno = {
    nombre: 'Héctor',
    edad: 42,
    ciudad: "Madrid"
};
const { nombre, edad, ciudad} = alumno;

console.log(nombre);
console.log(ciudad);
console.log(edad)

// Asignación simple de los atributos de un objeto cambiando el nombre a las variables.

const persona = {nombre: "Honorato", edad: 42, ciudad: "Pontevedra"};
const {nombre: n, edad: e, ciudad: c} = persona;

// Asignación simple de los atributos de un objeto
const empresa = {nombre: "IES Gran Capitan", direccion: {ciudad1: "Córdoba", pais: "España"}};
const {direccion: {ciudad1, pais}} = empresa;

// Asignación con valores por defecto en caso de no existir

const empleado1 = { username: "tatohh", email: "tatohh@unemail.com"};
const { username, nombre1 = "Héctor", email, telefono = "999888777"} = empleado1;

// En los parámetros de una función

function imprimeAlumno({nombre, edad}) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

// Valores por defecto en los parámetros de una función. Invoca varias veces y sin argumentos

function saludo({ nombre = "Invitado"} = {}) {
  console.log(`Hola. ${nombre}!`);
}
saludo();

// Asignación de los valores de un objeto devuelto por una función

function obtenerDatos() {
  return {titulo: "JavaScript", duracion: "4 horas los Jueves"};
}
const {titulo, duracion} = obtenerDatos();



