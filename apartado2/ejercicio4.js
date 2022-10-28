/* Declaramos la función anónima ejecutar, que es la que se ejecutará con el evento onload() del 
body del html. Se declara como constante global. */
const ejecutar = () => {
  // * caja es la variable local que utilizaremos para hacer referencia al main>section>ul#inicio del html
  let caja = document.getElementById("inicio");
  // * Con las dos constantes locales siguientes establecemos los parámetros de la operación
  const MULTIPLICANDO = 10;
  const MULTIPLICADOR = 16;
  /* El número de lugares que tenemos que desplazar se obtiene de la siguiente forma:
  16 = 2^X -> ln 16 = ln 2^X -> ln 16 = X ln 2 -> X = (ln 16 / ln 2).
  Para el cálculo del desplazamientoLugares utilizaremos la función Math.log  */
  let desplazamientoLugares = Math.log(MULTIPLICADOR) / Math.log(2);
  /* Al desplazar los bits del MULTIPLICANDO hacia la izquierda, se va multiplicando por 2 y, a la derecha
  se van añadiendo ceros con << */
  let producto = MULTIPLICANDO << desplazamientoLugares;
  // * Se envía el resultado a main>section#inicio del fichero ejercicio1.html
  caja.innerHTML = "<p>" + MULTIPLICANDO + " x " + MULTIPLICADOR + " = " + producto + "</p>";
};
