/**
 * @author: Héctor Cevallos Paredes.
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

try {
    // Intentamos crear un nuevo LindoGatito con un peso de 0, lo cual no es permitido
    const gatitoInadecuado = new LindoGatito('Bigotes', '20-08-2023', 'Callejero', 0);
} catch (error) {
    console.error(error.message);
}