/**
 * Crea una función denominada irTerceraHora() que acepte un objeto desestructurado como parámetro. 
 * El parámetro extrae la propiedad "segundaHora" del objeto. 
 * La función debe devolver esta declaración: "¡Hora de ir a clase de {tercera}!"
const misClases= {
  primera: "Diseño ",
  segunda: "Diseño ",
  tercera: "Servidor", 
  cuarta: "Servidor",
  quinta: "Cliente",
  sexta: "Cliente"};
 */

/**
 * Autor: Héctor Cevallos Paredes
 */

// Definición del objeto misClases
const misClases = {
    primera: "Diseño ",
    segunda: "Diseño ",
    tercera: "Servidor",
    cuarta: "Servidor",
    quinta: "Cliente",
    sexta: "Cliente"
  };
  
// Creación de la función irTerceraHora
function irTerceraHora({ tercera: segundaHora }) {
    // Utilizamos template literals para construir el mensaje
    return `¡Hora de ir a clase de ${segundaHora}!`;
  }
  
  // Llamada a la función con el objeto misClases
  const mensaje = irTerceraHora(misClases);
  
  // Imprimimos el resultado
  console.log(mensaje);