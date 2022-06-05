// Una función sin parámetros que devuelva siempre "true".
function alwaysTrue(value) {
  return true;
}

alwaysTrue();

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado.
function asyncFunction(value) {
  setTimeout(function () {
    console.log("Hola soy una promesa");
  }, 5000);
}
asyncFunction();

// Una función generadora de índices pares automáticos.
function* indexGenerator(value) {
  let index = 0;
  while (true) {
    yield index;
    index += 2;
  }
}
indexGenerator();
