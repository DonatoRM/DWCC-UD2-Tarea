/* Declaramos la función anónima ejecutar, que es la que se ejecutará con el evento onload() del 
body del html. Se declara como constante global. */
const ejecutar = () => {
  // * caja1,2 y 3 son las variables locales que utilizaremos para hacer referencia a los main>section>ul#inicioX del HTML
  let caja1 = document.getElementById("inicio1");
  let caja2 = document.getElementById("inicio2");
  let caja3 = document.getElementById("inicio3");
  let valor = 7; // valor es una variable local para indicar el valor de la tabla
  let salida1 = ""; // Variable local String en donde almacenaremos el resultado 1
  let salida2 = ""; // Variable local String en donde almacenaremos el resultado 2
  let salida3 = ""; // Variable local String en donde almacenaremos el resultado 3
  let contador = 0; // Variable local contador incremental positivo
  // * Se realiza el bloque 1 vez como mínimo mientras contador sea inferior o igual a 10
  do {
    // * Se va configurando la variable salida con cada iteración añadiendo un elemento a la lista
    salida1 = salida1 + "<li>" + valor + " x " + contador + " = " + valor * contador + "</li>";
    contador++; // Se incrementa la variable para iterar
  } while (contador <= 10);
  // * Ahora vamos a realizar la Tabla de sumar del 8
  valor = 8; // valor es una variable local para indicar el valor de la tabla
  contador = 0; // Se inicializa de nuevo el contador para por iterar de nuevo
  // * Se ejecuta el bucle siempre y cuando la variable contador sea menor o igual que 10
  while (contador <= 10) {
    // * Incrementamos la variable contador con contador++ después de haber multiplicado valor * contador
    salida2 += "<li>" + valor + " + " + contador + " = " + (contador++ + valor) + "</li>";
  }
  // * Ahora vamos a realizar la Tabla de dividir del 9
  // * Usamos un bucle For iterando la variable local contador mientras sea menor o igual que 10
  for (let contador = 0; contador <= 10; contador++) {
    salida3 += "<li>" + contador * valor + " / " + valor + " = " + contador + "</li>";
    // * La variable local contador se incrementa automáticamente en cada iteración
  }
  // * Se envía el resultado a main>section>ul#inicio del fichero ejercicio1.html
  caja1.innerHTML = salida1;
  caja2.innerHTML = salida2;
  caja3.innerHTML = salida3;
};
