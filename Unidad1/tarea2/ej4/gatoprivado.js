/**
 * @author: Héctor Cevallos Paredes
 */

class LindoGatito {
    #nombre;
    #fechaNacimiento;
    #raza;
    #peso;
  
    constructor(nombre, fechaNacimiento, raza, peso) {
      if (peso < 1 || peso > 15) {
        throw new Error("Peso inadecuado para el gato");
      }
      this.#nombre = nombre;
      this.#fechaNacimiento = fechaNacimiento;
      this.#raza = raza;
      this.#peso = peso;
    }
  
    jugar() {
      if (this.#peso - 1 < 1) {
        throw new Error("El gato no puede perder más peso o morirá de inanición");
      }
      this.#peso--;
    }
  
    comer() {
      if (this.#peso + 1 > 15) {
        throw new Error("El gato no puede ganar más peso o morirá de sobrepeso");
      }
      this.#peso++;
    }
  
    getPeso() {
      return this.#peso;
    }
  
    setPeso(peso) {
      if (peso < 1 || peso > 15) {
        throw new Error("Peso inadecuado para el gato");
      }
      this.#peso = peso;
    }
  
    // Agregamos getters para los otros atributos también
    getNombre() {
      return this.#nombre;
    }
  
    getFechaNacimiento() {
      return this.#fechaNacimiento;
    }
  
    getRaza() {
      return this.#raza;
    }
  }
  

const gatito1 = new LindoGatito("Felix el gato", "05-11-2020", "Persa", 5);

console.log(gatito1.getNombre()); // Ahora usamos el getter para acceder al nombre
console.log(gatito1.getPeso()); // Usamos el getter para acceder al peso

// Los siguientes accesos directos a atributos privados lanzarán un error que no he conseguido capturarlos.
// console.log(gatito1.#nombre); // Error
// console.log(gatito1.#peso); // Error
  
  