# Feedback

## App.jsx

- Existen varias funciones en app que pueden ser extraídas a un archivo aparte para mejorar la legibilidad del código. Cuando queramos usar una de las funciones, no hará falta pasarla por props al componente, sino que podremos importarla directamente.

- ¿El estado de travels es realmente necesario en todos los componentes? Si es así, podemos utilizar un context.

- Buena idea poner un elemento contenedor de las rutas. Así se hace mas fácil a la hora de añadir estilos. Aún así, tened en cuenta que toda la app ya está dentro de un div con la id `root`, por lo que no es necesario añadir otro div en el App.js.

## Naming de los componentes/pages

- Parece que hay algunas incoherencias entre los nombres de los componentes. Si son pages está bien que añadamos el sufijo `Page`, pero hay algunas que lo tienen y otras que no a pesar de estar todas en la misma carpeta `Pages`. También, al ordenarlas en App, están ordenadas como si algunas fueran pages y otras no, a pesar de que se renderizan en rutas.

```jsx
//components
import Navbar from "./components/Navbar";
import TravelsCommunity from "./pages/TravelsCommunity";
import Footer from "./components/footer";

//routes
import MyTravelsPage from "./pages/MyTravelsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFound";
import Dashboardpage from "./pages/DashboardPage";
```

- **Importante** : los nombres de los componentes deben empezar por mayúscula así como el nombre de los archivos. Por ejemplo, `footer.jsx` debería ser `Footer.jsx`. De lo contrario podemos tener problemas a la hora de importarlos.

## Redundancia en comentarios

- Está muy bien que añadamos comentarios en el código, pero a veces puede resultar redundante. Por ejemplo:

```jsx
// CREATION FILTER BY PRICE
// 2. HANDLE FUNCTION
const handleMaxPrice = (event) => {
  const value = Number(event.target.value);

  if (value < 0 || !Number.isInteger(Number(value))) {
    setShowPriceError(true);
    setMaxPrice("");
    setTimeout(() => setShowPriceError(false), 4000);
  } else if (value < 1 || !Number.isInteger(Number(value))) {
    setMaxPrice("");
  } else {
    setMaxPrice(value);
  }
};
```

En el ejemplo, el comentario `// 2. HANDLE FUNCTION` es redundante, la función ya se llama `handleMaxPrice`. Parece que habéis intentado ordenar el código con comentarios, pero al final se repite el mismo comentario, hay distintas numeraciones...

Hay una forma de añadir documentación a las funciones en el caso de que queráis usarlo en el futuro. Podéis usar JSDoc, que es un estándar para documentar código en JavaScript. Por ejemplo:

```jsx
/**
 * Handle the max price input
 * @param {Event} event - The event object
 */
const handleMaxPrice = (event) => {
  const value = Number(event.target.value);

  if (value < 0 || !Number.isInteger(Number(value))) {
    setShowPriceError(true);
    setMaxPrice("");
    setTimeout(() => setShowPriceError(false), 4000);
  } else if (value < 1 || !Number.isInteger(Number(value))) {
    setMaxPrice("");
  } else {
    setMaxPrice(value);
  }
};
```

El comentario de encima de la función nos dice qué hace la función, y el comentario dentro de la función nos dice qué tipo de parámetros recibe. Cada vez que pongamos el cursor sobre la función, veremos la documentación.
Es algo que no hemos visto en clase pero que podéis investigar por vuestra cuenta ya que veo muchos comentarios en el código.

Valorad también si los comentarios son necesarios. Por ejemplo, si tengo una función que se llama `handleMaxPrice`, ¿necesito un comentario que me diga que esa función maneja el precio máximo?
¿Necesitamos un comentario encima de cada input que nos diga qué tipo de input es cuando éste ya está bien gestionado y tiene un htmlFor?

## Estilos

- Parece haber discrepancias a la hora de nombrar clases. Hay algunos archivos de css nombrando las clases con camelCase, PascalCase y otros con guiones. Es importante que seáis consistentes en el nombre de las clases.

- También he visto que usáis nesting en algunos archivos y en otros no. 

## Uso de hooks

- Muy buen uso de los hooks que hemos visto en clase. Habéis aprendido a usar `useNavigate`, `useParams`, `useState` y `useEffect` y los usáis correctamente. El siguiente paso sería aprender a usar `useContext`. No es malo pasar props de un componente a otro, pero a veces hay datos que tenemos que usar en la mayoría de los componentes. ¿Se os ocurre algún caso en el que sería útil usar `useContext` en vuestra app?

## Integración de supabase

- Supabase está muy bien integrado y habéis conseguido realizar la lógica completa relacionando distintas tablas. 

- Habéis usado los métodos que nos aporta el cliente de Supabase para hacer las consultas a la base de datos tal y como vimos en clase.

- La asincronía está bien gestionada. Parece que hay coherencia en todos los métodos excepto uno llamado getData que usáis una sintaxis diferente a la de los otros métodos.

## Conclusiones

### Glows

- ¡Enhorabuena por el trabajo 😁! Habéis conseguido integrar Supabase en vuestra app y hacer una app completa con rutas, estilos y lógica. Habéis aprendido a usar hooks y a estructurar una app de React.

- Habéis conseguido un diseño muy limpio y agradable. La app es fácil de usar y de entender.

- Os ha dado tiempo a terminar el proyecto dentro del plazo. 🎉

### Grows

- La falta de consistencia en el código es mayormente debida a la falta de planificación. Estaría bien que inicialmente toméis nota de las directivas que queréis seguir en el código y que os aseguréis de que todos los miembros del equipo las siguen como si fuera una norma. 

- Cuidado con copiar y pegar directamente de chatGPT. Al ver componentes con mucho código copiado me da la sensación de que hay conceptos que no habéis entendido. Si tenéis dudas y usáis IA, preguntad a la IA antes de copiar y pegar (en el caso de que no tengáis otras personas disponibles), recordad que el objetivo principal es aprender.