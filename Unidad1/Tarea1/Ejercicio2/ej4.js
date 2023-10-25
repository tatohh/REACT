/** 
Ejercicio 4

Reescribe el siguiente código para usar el array destructuring en vez de la 
asignación de cada valor a una variable

{
    console.log("Ejercicio 4");
  
    let person = [12, "Chris", "Owen"];
  
    let firstName = person[1];
    let lastName = person[2];
    let age = person[0];
  
    console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
    console.log();
  }
*/

/**
 * Autor: Héctor Cevallos Paredes
 */

{
    console.log("Ejercicio 4");
  
    let person = [12, "Chris", "Owen"];
    let [age, firstName, lastName] = person;
  
    console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
    console.log();
  }

  