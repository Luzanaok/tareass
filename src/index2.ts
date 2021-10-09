//Desarrolle un algoritmo que, de acuerdo a la altura de una persona, decida si puede entrar a un juego en un parque de diversiones
//Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más
let btnEnv = document.getElementById("btnEnv");
btnEnv.addEventListener("click", () => {
  let altura: number = Number(dato.value);
  if (altura >= 1.3) {
    console.log("¡Felicidades!, usted puede continuear su aventura");
  } else {
    console.log("Creo que usted no es apto para continuar.");
  }
});
