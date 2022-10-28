/* Declaramos la función anónima ejecutar, que es la que se ejecutará con el evento onload() del 
body del html. Se declara como constante global. */
const ejecutar = () => {
  // * Las cajas 1, 2, 3 y 4 son variables locales que utilizaremos para hacer referencia a los main>section#inicioX del HTML
  let caja1 = document.getElementById("inicio1");
  let caja2 = document.getElementById("inicio2");
  let caja3 = document.getElementById("inicio3");
  let caja4 = document.getElementById("inicio4");
  // * Apartado 125 / 8
  // * Con las dos variables locales siguientes establecemos los parámetros de la operación
  let valor1 = 125;
  let valor2 = 8;
  /* El número de lugares que tenemos que desplazar se obtiene de la siguiente forma:
    8 = 2^X -> ln 8 = ln 2^X -> ln 8 = X ln 2 -> X = (ln 8 / ln 2).
    Para el cálculo del desplazamientoLugares utilizaremos la función Math.log  */
  let desplazamientoLugares = Math.log(valor2) / Math.log(2);
  /* Al desplazar los bits del DIVIDENDO hacia la derecha, se va dividiendo por 2 y, a la izquierda
    se van añadiendo ceros con >>> */
  let valor3 = valor1 >>> desplazamientoLugares;
  // * Apartado 40 x 4
  let valor4 = 40;
  let valor5 = 4;
  desplazamientoLugares = Math.log(valor5) / Math.log(2);
  /* Al desplazar los bits del MULTIPLICANDO hacia la izquierda, se va multiplicando por 2 y, a la derecha
  se van añadiendo ceros con << */
  let valor6 = valor4 << desplazamientoLugares;
  // * Apartado 25 / 2
  let valor7 = 25;
  let valor8 = 2;
  desplazamientoLugares = Math.log(valor8) / Math.log(2);
  /* Al desplazar los bits del DIVIDENDO hacia la derecha, se va dividiendo por 2 y, a la izquierda
  se van añadiendo ceros con >>> */
  let valor9 = valor7 >>> desplazamientoLugares;
  // * Apartado 10 x 16
  let valor10 = 10;
  let valor11 = 16;
  /* El número de lugares que tenemos que desplazar se obtiene de la siguiente forma:
  16 = 2^X -> ln 16 = ln 2^X -> ln 16 = X ln 2 -> X = (ln 16 / ln 2).
  Para el cálculo del desplazamientoLugares utilizaremos la función Math.log  */
  desplazamientoLugares = Math.log(valor11) / Math.log(2);
  /* Al desplazar los bits del MULTIPLICANDO hacia la izquierda, se va multiplicando por 2 y, a la derecha
  se van añadiendo ceros con << */
  let valor12 = valor10 << desplazamientoLugares;
  // * Se envía el resultado a main>section#inicio del fichero ejercicio1.html
  caja1.innerHTML = "<p>" + valor1 + " / " + valor2 + " = " + valor3 + "</p>";
  caja2.innerHTML = "<p>" + valor4 + " x " + valor5 + " = " + valor6 + "</p>";
  caja3.innerHTML = "<p>" + valor7 + " / " + valor8 + " = " + valor9 + "</p>";
  caja4.innerHTML = "<p>" + valor10 + " x " + valor11 + " = " + valor12 + "</p>";
};
