/** 
Ejercicio 5

Reescribe el siguiente código para usar el array destructuring 
array destructuring en vez de la asignación de cada valor a una variable
Asegúrate de no dejar variables sin usar

{
    console.log("Ejercicio 5");
  
    let person = ["Chris", 12, "Owen"];
  
    let firstName = person[0];
    let lastName = person[2];
  
    console.log(`Name: ${firstName} ${lastName}`);
    console.log();
  }
*/

/**
 * Autor: Héctor Cevallos Paredes
 */

{
    console.log("Ejercicio 5");
  
    let person = ["Chris", 12, "Owen"];
    let [firstName, , lastName] = person;
  
    console.log(`Name: ${firstName} ${lastName}`);
    console.log();
  }
  