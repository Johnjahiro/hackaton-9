let apuesta = 0;
let numApuesta;
let presupuesto = 5;
let ganado = 0;
let tirar;

do {
  lanzarDado();
  jugar();
} while (tirar === true);

function lanzarDado() {
  return Math.floor(Math.random() * 6 + 1);
}

function jugar() {
  numApuesta = Number(prompt("A que numero quiere apostar?"));
  apuesta = Number(prompt("Cuanto dinero quiere apostar? "));

  console.log("Se lanza el dado: ", lanzarDado());
  console.log("Numero apostado: ", numApuesta);
  console.log("Cantidad apostada: ", apuesta);

  if (lanzarDado() === numApuesta) {
    ganado = apuesta * 2;
    presupuesto += ganado;
    console.log("Ganaste", ganado, "soles");
    console.log("Tienes", presupuesto, "soles");
  } else {
    console.log("Perdiste");
    presupuesto = presupuesto - apuesta;
    console.log("Te quedan", presupuesto, "soles");
  }

  tirar = confirm("Quieres volver a jugar?");
  if (presupuesto === 0) {
    tirar = false;
    alert("Lo siento, ya no cuentas con dinero");
  } else if (presupuesto >= 200) {
    tirar = false;
    alert("Ya ganaste todo");
  }
}
