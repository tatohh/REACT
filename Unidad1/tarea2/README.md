# Clases en JavaScript - Implementaciones de Ejemplo

Este repositorio contiene implementaciones de ejemplo de clases en JavaScript basadas en varios requisitos y ejemplos del video sobre React
de OpenWebinars.

## Implementaciones

- `Greeter`
- `User`
- `LindoGatito`
- `PerfilJugador`

### Greeter y User (commit: Greeter y User)

Implementación de las clases `Greeter` y `User` como se muestra en el vídeo proporcionado. La clase `Greeter` sirve para saludar a los usuarios por su nombre, en el podemos ver atributos de clase, atributos estaticos un constructor, mientras que la clase `User` representa a un usuario con un nombre y proporciona un método para obtener ese nombre, nos llega con la capacidad de Herencia ya que esta clase extiende la otra llamandolo con el super.

### LindoGatito (commit: LindoGatito)

Se creó la clase `LindoGatito` con las siguientes características:
- Cada gato tiene un nombre, una fecha de nacimiento, una raza y un peso (entre 1 y 15).
- Los gatos pueden jugar, lo que reduce su peso, o comer, lo que aumenta su peso.
- Si el peso de un gato cae por debajo de 1 o supera los 15, el gato muere de inanición o por sobrepeso, respectivamente.
- Se manejan excepciones para la creación de gatos con un peso inadecuado.

Además, se crearon dos objetos de la clase `LindoGatito` y se intentó acceder a sus atributos para verificar su visibilidad.

### Visibilidad (commit: visibilidad)

En este commit, se exploró la visibilidad de los atributos de la clase `LindoGatito`. Se confirmó que todos los atributos eran inicialmente públicos y accesibles desde fuera de la clase.

### Privatizando (commit: privatizando)

Se modificó la clase `LindoGatito` para hacer que sus atributos y métodos sean privados en la medida de lo posible. Se utilizó la sintaxis de JavaScript moderna para hacer privados los atributos, asegurándonos de que sólo puedan ser accedidos y modificados mediante métodos públicos (getters y setters).

### Getters y Setters (commit: getters y setters)

Se implementaron getters y setters en la clase `PerfilJugador` utilizando la sintaxis moderna proporcionada por ECMAScript 5. Estos permiten un control seguro sobre el acceso y la modificación de los atributos privados de la clase.


