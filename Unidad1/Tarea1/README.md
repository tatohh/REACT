


En React se utiliza mucho la asignación por destructuring, por lo que vas a practicar con los siguientes ejercicios. Entrégalos en este repositorio:
1. *Escribe un ejemplo de cada una de estas asignaciones con destructuring:*
    *Destructuring de objetos:*
    - Asignación simple de los atributos de un objeto
    - Asignación simple de los atributos de un objeto cambiando el nombre a las variables
    - Asignación de un valor anidado dentro de un objeto
    - Asignación con valores por defecto en caso de no existir
    - En los parámetros de una función
    - Valores por defecto en los parámetros de una función. Invoca varias veces y sin argumentos
    - Asignación de los valores de un objeto devuelto por *una función
    *Destructuring de arrays:*
    - Asignación del primer y del último elemento de un array
    - Asignación del primer y del resto de elementos de un array (rest operator)
    - Asignación de un valor anidado dentro de un array
    - Intercambio de variables
    - Asignación de los valores de un array devuelto por una función
2. *Entrega los ejemplos adjuntos.*
3. *Utiliza la destructuración  en estos ejercicios, así como los template literals:*
    - Escribe una función llamada muestraNombre() que tome un objeto como argumento (4 propiedades) e imprima el nombre y apellido de la persona. 
    - Considere el siguiente array colores: let colores = ["blanco", "azul", "amarillo", "negro", "rojo", "verde"]; Usando la desestructuración de matrices, asigne los primeros 2 elementos a las variables primerColor y segundoColor y asigna los elementos restantes a la variable otrosColores. Muestra los valores de estas 3 variables por consola
    - Crea una función denominada irTerceraHora() que acepte un objeto desestructurado como parámetro. El parámetro extrae la propiedad "segundaHora" del objeto. La función debe devolver esta declaración: "¡Hora de ir a clase de {tercera}!"
    const misClases= {
    primera: "Diseño ",
    segunda: "Diseño ",
    tercera: "Servidor", 
    cuarta: "Servidor",
    quinta: "Cliente",
    sexta: "Cliente"};