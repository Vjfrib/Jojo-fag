const rls = require("readline-sync")

//L.A.D.S
// sig function

/// calls

function inicio() {
var time = rls.question("digite o tempo de esperar");
tempo = parseInt(time);
espera(tempo);

console.clear();
console.log("digite de 1 a 4")

//comando de finalização 
process.exit();
}

function espera(icognita) {
  setTimeout(function () {
  msgFinal(icognita)}, icognita*1000);
  // 2000 milissegundos = 2 seg
}

function msgFinal(numberAbstract) {
  console.log("Esta é a mensagem após: "+numberAbstract+" segundos.");
}

//start here:
inicio();
