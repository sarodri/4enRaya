//variable global para llevar el registro del turn actual
var turn = "X";
var playerX = [];
var playerO = [];
let contador = 0;

// Función para cambiar el turno después de cada jugada
function cambiarTurno() {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

// Función que se ejecuta al hacer clic en una casilla
function marcarCasilla(casilla) {
  // Si la casilla ya está marcada, no hacemos nada
  if (casilla.textContent !== "") {
    return;
  }

  // Marcamos la casilla con el símbolo del jugador actual
  casilla.textContent = turn;

}

function setStatus(string) {
  document.getElementById("status").innerText = string;
}

// Función para comprobar si hay un ganador


// Función para reiniciar el juego
function reiniciarJuego() {
  playerO = [];
  playerX = [];
  contador = 0;
  // Obtenemos todas las casillas del tablero
  var casillas = document.querySelectorAll(".tile");

  // Borramos el contenido de todas las casillas
  for (var i = 0; i < casillas.length; i++) {
    casillas[i].textContent = "";
  }

  // Reiniciamos la variable de turn
  turn = "X";

  document.getElementById("status").innerText = "Game in progress..";
}

// Añadimos un evento de clic a todas las casillas del tablero
var casillas = document.querySelectorAll(".tile");
for (var i = 0; i < casillas.length; i++) {
  casillas[i].addEventListener("click", function () {
    marcarCasilla(this);
    clicarCasilla(this);
    incrementarContador();
    hayGanador();
    cambiarTurno();
  });
}
console.log(casillas);

// Añadir función Restar-Game:

document.getElementById("restart-btn").addEventListener("click", function () {
  reiniciarJuego();
});

// Función casilla clicada

function clicarCasilla(casilla) {
  console.log(casilla);
  var tile = casilla.className.split(" ")[1];
 

  if (turn === "X") {
    playerX.push(tile);
  } else {
    playerO.push(tile);
  }
}

function hayGanador() {
    combGanadora = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [4, 8, 12, 16],
      [1, 2, 5, 6],
      [3, 4, 7, 8],
      [9, 10, 13, 14],
      [11, 12, 15, 16],
      [2, 3, 6, 7],
      [10, 11, 14, 15],
      [5, 6, 9, 10],
      [7, 8, 11, 12],
      [6, 7, 10, 11],
    ];

    combGanadora.forEach(element => {

        var message = "Gana el jugador " + turn
        if (turn === "X" && checkSubset(playerX.map(Number), element)){
            setStatus(message);
                return
        }
        if (turn === "O" && checkSubset(playerO.map(Number), element)){
            setStatus(message);
                return
        }else if(contador == 16){
            setStatus("Partida acabada")
        }
    

    });
  }

  let checkSubset = (parentArray, subsetArray) => {
    return subsetArray.every((el) => {
        return parentArray.includes(el)
    })
}

function incrementarContador(){
    contador++
}
