/** 
Ejercicio 1

Reescribe el siguiente código para usar la destructuración de matrices 
en lugar de asignar cada valor a una variable.
{
    console.log("Ejercicio 1");
  
    let item = ["Egg", 0.25, 12];
  
    let name = item[0];
    let price = item[1];
    let quantity = item[2];
  
    console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
    console.log();
  } 
  */
 
 /**
  * Autor: Héctor Cevallos Paredes
  */
  
  {
    console.log("Ejercicio 1");
  
    let item = ["Egg", 0.25, 12];
    let [name, price, quantity] = item;
  
    console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
    console.log();
  }

