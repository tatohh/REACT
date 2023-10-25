/** 
Ejercicio 3

Dado un objeto llamado 'user'.

Escriba la siguiente destructuración:

- propiedad 'name' en la variable 'name'.
- propiedad 'years' en la variable 'age'.
- Propiedad 'isAdmin' en la variable 'isAdmin' (false, si no existe tal propiedad)

{
    console.log("Ejercicio 3");
  
    let user = { name: "John", years: 30 };
  
    // your code to the left side:
    let {} = user;
  
    console.log(name); // John
    console.log(age); // 30
    console.log(isAdmin); // false
    console.log();
  }
*/

/**
 * Autor: Héctor Cevallos Paredes
 */

{
    console.log("Ejercicio 3");
  
    let user = { name: "John", years: 30 };
    let { name, years: age, isAdmin = false } = user;
  
    console.log(name); // John
    console.log(age); // 30
    console.log(isAdmin); // false
    console.log();
  }
