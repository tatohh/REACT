/**
 * Escribe una función llamada muestraNombre() que tome un objeto como argumento 
 * (4 propiedades) e imprima el nombre y apellido de la persona.
 * 
 * Autor: Héctor Cevallos Paredes 
 */

function muestraNombre(persona) {
    const { nombre, apellido, edad, ciudad } = persona;
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}, Ciudad: ${ciudad}`);
  }
  
  const persona = { nombre: "Héctor", apellido: "Cevallos", edad: 42, ciudad: "Madrid" };
  muestraNombre(persona);
