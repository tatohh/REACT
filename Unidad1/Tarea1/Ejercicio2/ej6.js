/** 
Ejercicio 6

Usa el Array Destructuring para obtener el último nombre del Array 


{
    console.log("Ejercicio 6");
  
    const students = ['Christina', 'Jon', 'Alexandare'];
  
    // Write your code here
    const [] = students;
  
    console.log(lastName);
    console.log();
  }
*/

/**
 * Autor: Héctor Cevallos Paredes
 */

{
    console.log("Ejercicio 6");
  
    const students = ['Christina', 'Jon', 'Alexandare'];
    const [, , lastName] = students;
  
    console.log(lastName);
    console.log();
  }

