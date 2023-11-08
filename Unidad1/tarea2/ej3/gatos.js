/**
 * @author: Héctor Cevallos Paredes
 */

class LindoGatito {
    constructor(nombre, fechaNacimiento, raza, peso) {
     if (peso < 1 || peso > 15) {
         throw new Error("Peso inadecuado para el gato");
     }
     this.nombre = nombre;
     this.fechaNacimiento = fechaNacimiento;
     this.raza = raza;
     this.peso = peso;
    } 
 // Comportamiento del gato
    jugar() {
     if (this.peso - 1 < 1) {
         throw new Error("El gato no puede perder más peso está a punto del amoche");
     }
     this.peso--;
    }
 
    comer() {
     if (this.peso + 1 > 15) {
         throw new Error("El gato no pude engordar más o morirá de sobrepeso");
     }
     this.peso++;
    }
 }
 
 // export default LindoGatito;
 
 const gatito1 = new LindoGatito("Pelusa", "2021-05-20", "Persa", 5);
 const gatito2 = new LindoGatito("Garfield", "2020-06-19", "Exótico", 7);
 
 console.log(gatito1.nombre); // Visible
 console.log(gatito2.peso); // Visible
 
 // Intentemos jugar y comer con los gatos
 gatito1.jugar();
 gatito2.comer();
 
 console.log(gatito1.peso); // Visible, debería ser 4
 console.log(gatito2.peso); // Visible, debería ser 8