# Exportando desde un modulo.

## Exportación por Defecto
Significa que cuando un módulo es exportado usando export default, puede ser importado en otro módulo sin tener que usar exactamente el mismo nombre que se definió en el módulo original. Esto se usa para exportar una sola entidad, como una clase, función o un objeto.

## Cuántas exportaciones por defecto puede haber en un módulo
Solo puede haber una exportación por defecto en cada módulo. Esto es porque la exportación por defecto está pensada para representar la "exportación principal" o el "elemento principal" de ese módulo.

## Cómo sabe el navegador que un script es un módulo
Un navegador identifica que un script es un módulo cuando se incluye el atributo type="module" en la etiqueta &lt;script&gt;

## Cuándo se ejecuta un módulo
Un módulo se ejecuta cuando se importa por primera vez. Los módulos son evaluados solo una vez, y luego su exportación se guarda y se reutiliza en todas las importaciones posteriores.

## Ámbito dentro de un módulo
Cada módulo en JavaScript tiene su propio ámbito o contexto. Esto significa que las variables, funciones, clases, etc., definidas en un módulo no son accesibles directamente en otros módulos a menos que sean explícitamente exportadas.

## Exportación con nombre. Qué significa. Ejemplo
Significa que las entidades (variables, funciones, clases, etc.) se exportan con un nombre específico y deben ser importadas usando ese mismo nombre Ejemplo:
### Archivo: uso_operaciones.js

## Alias. Cómo se establecen. Ejemplos
Los alias se utilizan para renombrar exportaciones o importaciones. Esto es útil cuando quieres evitar conflictos de nombres o simplificar los nombres para los consumidores del modulo.
### Archivo: uso_con_alias.js

