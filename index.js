//variable global para llevar el registro del turn actual
var turn = "x";
var playerX = [];
var playerO = [];
let contador = 0;


function getTiles(){
    return document.getElementsByClassName('tile')
}
const tiles = getTiles()


function getPlayers(){
    return document.getElementsByClassName('player')
}
const players = getPlayers()


document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("restart-btn").style = 'display:none';
    players[0].classList.remove("active")
})

// Función para cambiar el turno después de cada jugada
function cambiarTurno() {
  if (turn === "x") {
    turn = "o";
    players[1].classList.add("active")
    players[0].classList.remove("active")
  } else {
    turn = "x";
    players[0].classList.add("active")
    players[1].classList.remove("active")
  }
}

// Función que se ejecuta al hacer clic en una casilla
function marcarCasilla(tiles) {
  // Si la tiles ya está marcada, no hacemos nada
  if (tiles.textContent !== "") {
    return;
  }

  // Marcamos la tiles con el símbolo del jugador actual
  tiles.textContent = turn;

}

function setStatus(string) {
  document.getElementById("status").innerText = string;
}

// Función para comprobar si hay un ganador


// Función para reiniciar el juego
function reiniciarJuego() {
   
players[0].classList.add("active")
players[1].classList.remove("active")

// document.getElementById("player1").classList.add("active")
// document.getElementById("player2").classList.remove("active")
  playerO = [];
  playerX = [];
  contador = 0;
  

  // Borramos el contenido de todas las casillas
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].textContent = "";
  }

  // Reiniciamos la variable de turn
  turn = "X";

  document.getElementById("status").innerText = "Game in progress..";
  document.getElementById("restart-btn").style = 'display:none';
}

// Añadimos un evento de clic a todas las casillas del tablero

for (var i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", function () {
    marcarCasilla(this);
    clicarCasilla(this);
    incrementarContador();
    hayGanador();
    cambiarTurno();
  });
}


// Añadir función Restar-Game:

document.getElementById("restart-btn").addEventListener("click", function () {
  reiniciarJuego();
});

// Función tiles clicada

function clicarCasilla(tiles) {
  console.log(tiles);
  var tile = tiles.className.split(" ")[1];
 

  if (turn === "x") {
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

   
        if (turn === "x" && checkComb(playerX.map(Number), element)){
            setStatus("Player 1 won!");
            document.getElementById("restart-btn").style = 'display:block';
                return
        }
        if (turn === "o" && checkComb(playerO.map(Number), element)){
            setStatus("Player 2 won!");
            document.getElementById("restart-btn").style = 'display:block';
                return
        }else if(contador == 16){
            setStatus("Draw!")
            document.getElementById("restart-btn").style = 'display:block';
        }
    
       
    });
  }



  let checkComb = (array1, array2) => {
    return array2.every((x) => {
        return array1.includes(x)
    })
}

function incrementarContador(){
    contador++
}
