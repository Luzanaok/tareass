let btnEnv = document.getElementById("btnEnv");
btnEnv.addEventListener("click", () => {
  let precio: number = Number(dato.value);
  const descuento: number = 0.1;
  if (precio >= 1000) {
    let descAp: number = precio * descuento;
    let finalDesc: number = precio - descAp;
    console.log(finalDesc);
  } else {
    console.log("Total a Pagar:" + precio);
  }
});
