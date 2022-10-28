/* Declaramos la función anónima ejecutar, que es la que se ejecutará con el evento onload() del 
body del html. Se declara como constante global. */
const ejecutar = () => {
  // * caja es la variable local que utilizaremos para hacer referencia al main>section>ul#inicio del html
  let caja = document.getElementById("inicio");
  const VALOR = 7; // VALOR es una constante local para la tabla de multiplicar
  let salida = ""; // Variable local String en donde almacenaremos el resultado
  let contador = 0; // Variable local contador incremental positivo
  // * Se realiza el bloque 1 vez como mínimo mientras contador sea inferior o igual a 10
  do {
    // * Se va configurando la variable salida con cada iteración añadiendo un elemento a la lista
    salida = salida + "<li>" + VALOR + " x " + contador + " = " + VALOR * contador + "</li>";
    contador++; // Se incrementa la variable para iterar
  } while (contador <= 10);
  // * Se envía el resultado a main>section>ul#inicio del fichero ejercicio1.html
  caja.innerHTML = salida;
};
