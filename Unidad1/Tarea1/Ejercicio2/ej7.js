/** 
Ejercicio 7

Usa el Array Destructuring para obtener todos los nombres del Array anidado

{
    console.log("Ejercicio 7");
  
    const moreStudents = [
      'Chris', 
      ['Ahmad', 'Antigoni'], 
      ['Toby', 'Sam']
    ];
  
    // Write your code here
    const [] = moreStudents;
  
    console.log(student1, student2, student3, student4, student5);
    console.log();
  }
*/

/**
 * Autor: Héctor Cevallos Paredes
 */

{
    console.log("Ejercicio 7");
  
    const moreStudents = [
      'Chris',
      ['Ahmad', 'Antigoni'],
      ['Toby', 'Sam']
    ];
    const [student1, [student2, student3], [student4, student5]] = moreStudents;
  
    console.log(student1, student2, student3, student4, student5);
    console.log();
  }

  