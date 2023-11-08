/**
 * @author: Héctor Cevallos Paredes
 */

class PerfilJugador {
    #nombreUsuario;
    #puntuacionMaxima;
    #nivelActual;
    #amigos;
  
    constructor(nombreUsuario) {
      this.#nombreUsuario = nombreUsuario;
      this.#puntuacionMaxima = 0;
      this.#nivelActual = 1;
      this.#amigos = ["Arguiñano", "Berasategui", "RobinFood", "Honorato"];
    }
  
    // Getter para el nombre de usuario (sin setter, ya que no lo vamois a cambiar)
    get nombreUsuario() {
      return this.#nombreUsuario;
    }
  
    // Getter y setter para la puntuación máxima
    get puntuacionMaxima() {
      return this.#puntuacionMaxima;
    }
  
    set puntuacionMaxima(nuevaPuntuacion) {
      if (nuevaPuntuacion < this.#puntuacionMaxima) {
        throw new Error('La nueva puntuación no puede ser inferior a la puntuación máxima actual.');
      }
      this.#puntuacionMaxima = nuevaPuntuacion;
      this.#actualizarNivel(); // Supongamos que actualizar el nivel depende de la puntuación máxima
    }
  
    // Método privado para actualizar el nivel en función de la puntuación máxima
    #actualizarNivel() {
      // Supongamos que cada 1000 puntos incrementan el nivel
      this.#nivelActual = Math.floor(this.#puntuacionMaxima / 1000) + 1;
    }
  
    // Getter para el nivel actual (sin setter, ya que depende de la puntuación)
    get nivelActual() {
      return this.#nivelActual;
    }
  
    // Getter para la lista de amigos
    get amigos() {
      return this.#amigos;
    }
  
    // Método para añadir amigos
    añadirAmigo(nombreAmigo) {
      if (this.#amigos.includes(nombreAmigo)) {
        throw new Error(`${nombreAmigo} ya está en tu lista de amigos.`);
      }
      this.#amigos.push(nombreAmigo);
    }
  }
  
  // Uso de la clase PerfilJugador
  const perfil = new PerfilJugador('TATOHH');
  
  console.log(perfil.nombreUsuario); 
  console.log(perfil.nivelActual); 
  
  // Actualización de la puntuación máxima y nivel
  try {
    perfil.puntuacionMaxima = 2000;
  } catch (e) {
    console.error(e.message);
  }
  
  console.log(perfil.puntuacionMaxima); 
  console.log(perfil.nivelActual); 
  
  // Añadir amigos
  try {
    perfil.añadirAmigo('ALI');
  } catch (e) {
    console.error(e.message);
  }
  
  console.log(perfil.amigos); 
  