/* Declaramos la función anónima ejecutar, que es la que se ejecutará con el evento onload() del 
body del html. Se declara como constante global. */
const ejecutar = () => {
  // * caja es la variable local que utilizaremos para hacer referencia al main>section#inicio del html
  let caja = document.getElementById("inicio");
  // * Con las dos constantes locales siguientes establecemos los parámetros de la operación
  const DIVIDENDO = 125;
  const DIVISOR = 8;
  /* El número de lugares que tenemos que desplazar se obtiene de la siguiente forma:
  8 = 2^X -> ln 8 = ln 2^X -> ln 8 = X ln 2 -> X = (ln 8 / ln 2).
  Para el cálculo del desplazamientoLugares utilizaremos la función Math.log  */
  let desplazamientoLugares = Math.log(DIVISOR) / Math.log(2);
  /* Al desplazar los bits del DIVIDENDO hacia la derecha, se va dividiendo por 2 y, a la izquierda
  se van añadiendo ceros con >>> */
  let cociente = DIVIDENDO >>> desplazamientoLugares;
  // * Se envía el resultado a main>section#inicio del fichero ejercicio1.html
  caja.innerHTML = "<p>" + DIVIDENDO + " / " + DIVISOR + " = " + cociente + "</p>";
};
