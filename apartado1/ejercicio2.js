/* Declaramos la función anónima ejecutar, que es la que se ejecutará con el evento onload() del 
body del html. Se declara como constante global. */
const ejecutar = () => {
  // * caja es la variable local que utilizaremos para hacer referencia al main>section>ul#inicio del html
  let caja = document.getElementById("inicio");
  const VALOR = 8; // Calor es la constante local en donde definimos qué tabla realizar
  let resultado = ""; // Es una variable local en donde almacenamos el String que enviaremos al HTML
  let contador = 0; // Variable local que usamos para iterar
  // * Se ejecuta el bucle siempre y cuando la variable contador sea menor o igual que 10
  while (contador <= 10) {
    // * Incrementamos la variable contador con contador++ después de haber multiplicado VALOR * contador
    resultado += "<li>" + VALOR + " + " + contador + " = " + (contador++ + VALOR) + "</li>";
  }
  // * Se envía el resultado a main>section>ul#inicio del fichero ejercicio1.html
  caja.innerHTML = resultado;
};
