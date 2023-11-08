/**
 * @author: Hector Cevallos Paredes
 */

import LindoGatito from "../gatete/gato";

try {
    // Intentamos crear un nuevo LindoGatito con un peso de 0, lo cual no es permitido
    const gatitoInadecuado = new LindoGatito('Bigotes', '20-08-2023', 'Callejero', 0);
} catch (error) {
    console.error(error.message);
}