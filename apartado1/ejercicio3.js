/* Declaramos la función anónima ejecutar, que es la que se ejecutará con el evento onload() del 
body del html. Se declara como constante global. */
const ejecutar = () => {
  // * caja es la variable local que utilizaremos para hacer referencia al main>section>ul#inicio del html
  let caja = document.getElementById("inicio");
  const VALOR = 9; // Calor es la constante local en donde definimos qué tabla realizar
  let resultado = ""; // Es una variable local en donde almacenamos el String que enviaremos al HTML
  // * Usamos un bucle For iterando la variable local contador mientras sea menor o igual que 10
  for (let contador = 0; contador <= 10; contador++) {
    resultado += "<li>" + contador * VALOR + " / " + VALOR + " = " + contador + "</li>";
    // * La variable local contador se incrementa automáticamente en cada iteración
  }
  // * Se envía el resultado a main>section>ul#inicio del fichero ejercicio1.html
  caja.innerHTML = resultado;
};
