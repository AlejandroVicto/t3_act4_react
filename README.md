# Organizador de Tareas - Actividad 4 (Fundamentos de React)

## Explicación Breve de la Mini Aplicación
Esta mini aplicación web es un Organizador de Tareas interactivo desarrollado con React y Vite. Su objetivo es facilitar la organización personal de actividades del día a día mediante una interfaz clara. La aplicación integra los conceptos básicos de React aprendidos en el curso: componentes funcionales simples, comunicación mediante props, reactividad del estado con useState y renderizado dinámico de arreglos con .map().

---

## Cumplimiento de los Requisitos

* **a) Un componente funcional simple:**
  * **Componente:** `Titulo.jsx`
  * **Explicación:** Es una función pura de JavaScript que obtiene la fecha actual formateada en español y retorna elementos JSX para el encabezado de la aplicación, sin depender de estado interno ni de props obligatorias.

* **b) Un componente que reciba y muestre props:**
  * **Componentes:** `Resumen.jsx` y `Tarea.jsx`
  * **Explicación:**
    * `Resumen.jsx`: Recibe las propiedades `total`, `completadas` y `pendientes` calculadas por el componente padre para proyectar los contadores numéricos en pantalla.
    * `Tarea.jsx`: Recibe por props los datos individuales de cada tarea (`id`, `texto`, `completada`, `fecha`, `onToggle`, `onEliminar`) y renderiza su estructura con su checkbox, texto y botón de acción.

* **c) Un componente que use estado (`useState`) para cambiar algo en pantalla:**
  * **Componente:** `TodoApp.jsx`
  * **Explicación:** Implementa el `useState` para controlar múltiples elementos reactivos en la interfaz:
    1. **Contador interactivo de meta diaria:** Permite aumentar o disminuir el objetivo de tareas del día mediante botones `+` y `-` (`metaDiaria`).
    2. **Botón para alternar visibilidad:** Un botón que muestra u oculta un panel de consejos de productividad en tiempo real (`mostrarNotas`).
    3. **Captura de texto y filtrado:** Controla el valor del input de nueva tarea (`nuevaTarea`) y la pestaña de visualización activa (`filtro`).

* **d) Una lista renderizada dinámicamente a partir de un arreglo (usando .map()):**
  * **Componente:** `TodoApp.jsx`
  * **Explicación:** Transforma dinámicamente el arreglo de tareas filtradas en componentes `<Tarea />` utilizando la sintaxis `{tareasFiltradas.map((tarea) => <Tarea key={tarea.id} {...} />)}`. A cada elemento se le asigna una clave única obligatoria (`key={tarea.id}`) para optimizar el trabajo.

---

## Estructura del Proyecto

```text
src/
├── App.jsx            # Contenedor principal de la aplicación
├── App.css            # Estilos de la aplicación y componentes
├── index.css          # Estilos globales y reset
├── main.jsx           # Punto de entrada de React con createRoot
└── components/
    ├── Titulo.jsx     # Componente funcional simple para el encabezado
    ├── Resumen.jsx    # Subcomponente para visualización de métricas (props)
    ├── Tarea.jsx      # Subcomponente para renderizar cada tarea (props)
    └── TodoApp.jsx    # Componente principal con lógica de estado y lista dinámica (.map)
```

---

## Funcionalidad de la Aplicación

1. **Encabezado con fecha dinámica:** Muestra de forma automática el día de la semana, día del mes y mes actual.
2. **Resumen numérico de actividades:** Contadores en tiempo real que reflejan el total de tareas registradas, cuántas faltan por realizar y cuántas han sido completadas.
3. **Meta diaria con contador:** Permite al usuario establecer su objetivo diario de tareas completadas, incrementando o reduciendo el valor con botones `+` y `-`.
4. **Agregar nuevas tareas:** Formulario para ingresar texto y agregarlo al listado.
5. **Filtrado por estado:** Botones para alternar de forma inmediata entre ver Todas, únicamente las Pendientes o únicamente las Hechas.
6. **Marcado de tareas:** Checkbox que al seleccionarse tacha el texto de la tarea y actualiza automáticamente los contadores.
7. **Eliminación de tareas:** Botón con icono de papelera para suprimir tareas que ya no se requieran.
8. **Consejos:** Botón interactivo que muestra/oculta recomendaciones para mejorar el enfoque personal (como la técnica Pomodoro).

---

## Preguntas y Respuestas Teóricas

### a) ¿Qué diferencia hay entre props y state en React?
El props es información de lectura, en donde se pasa de un componente a otro, y esto no puede ser modificado por el componente que lo recibe, el state es información la cual al ser actualizada o cambiada se recarga ese componente para ver los nuevos datos.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Ayuda para conocer que elementos han sido agregados, modificados o eliminados dentro del virtual DOM, sin ella puede perderse información o causar errores visuales.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
Es una herramienta la cual sirve para guardar los datos que pueden ser modificados después, y así de esa manera se actualiza automáticamente ese componente o parte de la interfaz para mostrar lo que se ha actualizado.

* Ejemplo en la mini aplicación: Se utilizó en `TodoApp.jsx` para el arreglo de tareas, para el contador de la meta diaria y para el botón que muestra/oculta los consejos de productividad.

### d) Enlace del repositorio de GitHub:
https://github.com/AlejandroVicto/t3_act4_react

### e) Enlace del proyecto desplegado en GitHub Pages:
https://alejandrovicto.github.io/t3_act4_react/
