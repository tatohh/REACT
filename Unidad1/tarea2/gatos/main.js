/**
 * @author: Héctor Cevallos Paredes
 */

import LindoGatito from '../gatete/gato';

const gatito1 = new LindoGatito("Pelusa", "2021-05-20", "Persa", 5);
const gatito2 = new LindoGatito("Garfield", "2020-06-19", "Exótico", 7);

console.log(gatito1.nombre); // Visible
console.log(gatito2.peso); // Visible

// Intentemos jugar y comer con los gatos
gatito1.jugar();
gatito2.comer();

console.log(gatito1.peso); // Visible, debería ser 4
console.log(gatito2.peso); // Visible, debería ser 8