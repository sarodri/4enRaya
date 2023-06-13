//variables globales
let player1 = true; //true es X, false es O
let gameOver = false;
const tiles = document.querySelectorAll('.tile');
const restartBtn = document.querySelector('#restart-btn');
const status = document.querySelector('#status');

//función para reiniciar el juego
function restartGame() {
  player1 = true;
  gameOver = false;
  status.textContent = '';
  tiles.forEach(tile => {
    tile.classList.remove('x');
    tile.classList.remove('o');
  });
}

//función que verifica si hay un ganador
function checkWinner() {
  //verificar en horizontal
  for (let i=1; i<tiles.length; i+=4) {
    if (tiles[i].classList.contains('x') && tiles[i+1].classList.contains('x') &&
        tiles[i+2].classList.contains('x') && tiles[i+3].classList.contains('x')) {
      status.textContent = '¡Player 1 ha ganado!';
      gameOver = true;
      return;
    }
    if (tiles[i].classList.contains('o') && tiles[i+1].classList.contains('o') &&
        tiles[i+2].classList.contains('o') && tiles[i+3].classList.contains('o')) {
      status.textContent = '¡Player 2 ha ganado!';
      gameOver = true;
      return;
    }
  }
  
  //verificar en vertical
  for (let i=1; i<5; i++) {
    if (tiles[i].classList.contains('x') && tiles[i+4].classList.contains('x') &&
        tiles[i+8].classList.contains('x') && tiles[i+12].classList.contains('x')) {
      status.textContent = '¡Player 1 ha ganado!';
      gameOver = true;
      return;
    }
    if (tiles[i].classList.contains('o') && tiles[i+4].classList.contains('o') &&
        tiles[i+8].classList.contains('o') && tiles[i+12].classList.contains('o')) {
      status.textContent = '¡Player 2 ha ganado!';
      gameOver = true;
      return;
    }
  }
}

//función para marcar una casilla
function markTile() {
  if (!gameOver && !tiles.classList.contains('x') && !tiles.classList.contains('o')) {
    if (player1) {
      tiles.classList.add('x');
      checkWinner();
      if (!gameOver) {
        status.textContent = 'Turno del jugador 2 (O)';
        player1 = false; 
      }
    } else {
      tiles.classList.add('o');
      checkWinner();
      if (!gameOver) {
        status.textContent = 'Turno del jugador 1 (X)';
        player1 = true;
      }
    }
  }
}

//llamar a la función restartGame() cuando se haga clic en el botón de reinicio
restartBtn.addEventListener('click', restartGame);

//marcar una casilla cuando se haga clic en ella
tiles.forEach(tile => {
  tile.addEventListener('click', markTile);
});


// 	//Variables para controlar el juego
// let turno = 1;
// let jugador = "player1";
// let ganador = null;
// let celdas = document.querySelectorAll(".tile");

// //Funciones auxiliares
// function cambiarTurno() {
//   turno++;
//   jugador = jugador === "player1" ? "player2" : "player1";
//   document.getElementById("status").textContent = "Turno del " + jugador;
// }

// function verificarGanador() {
//   //Verificar ganador horizontal
//   for (let i = 1; i <= 12; i += 4) {
//     if (celdas[i].classList.contains(jugador) &&
//         celdas[i+1].classList.contains(jugador) &&
//         celdas[i+2].classList.contains(jugador) &&
//         celdas[i+3].classList.contains(jugador)) {
//       ganador = jugador;
//       break;
//     }
//   }

//   //Verificar ganador vertical
//   for (let i = 1; i <= 4; i++) {
//     if (celdas[i].classList.contains(jugador) &&
//         celdas[i+4].classList.contains(jugador) &&
//         celdas[i+8].classList.contains(jugador) &&
//         celdas[i+12].classList.contains(jugador)) {
//       ganador = jugador;
//       break;
//     }
//   }

//   //Verificar ganador diagonal
//   if (celdas[1].classList.contains(jugador) &&
//       celdas[6].classList.contains(jugador) &&
//       celdas[11].classList.contains(jugador) &&
//       celdas[16].classList.contains(jugador)) {
//     ganador = jugador;
//   }

//   if (celdas[4].classList.contains(jugador) &&
//       celdas[7].classList.contains(jugador) &&
//       celdas[10].classList.contains(jugador) &&
//       celdas[13].classList.contains(jugador)) {
//     ganador = jugador;
//   }
// }

// function reiniciar() {
//   turno = 1;
//   jugador = "player1";
//   ganador = null;
//   document.getElementById("status").textContent = "Turno del " + jugador;
//   for (let i = 0; i < celdas.length; i++) {
//     celdas[i].className = "tile";
//   }
// }

// //Eventos del juego
// for (let i = 0; i < celdas.length; i++) {
//   celdas[i].addEventListener("click", function() {
//     if (!ganador && !this.classList.contains("player1") && !this.classList.contains("player2")) {
//       this.classList.add(jugador);
//       verificarGanador();
//       if (ganador) {
//         document.getElementById("status").textContent = "Ganador: " + ganador;
//       } else if (turno === 16) {
//         document.getElementById("status").textContent = "Empate!";
//       } else {
//         cambiarTurno();
//       }
//     }
//   });
// }

// document.getElementById("restart-btn").addEventListener("click", function() {
//   reiniciar();
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("status").textContent = "Turno del " + jugador;
// });
	
	// // Selecting DOM elements
	// const tiles = document.querySelectorAll('.tile');
	// const player1Label = document.querySelector('.player1');
	// const player2Label = document.querySelector('.player2');
	// const restartBtn = document.querySelector('.restart')
	// const statusbar = document.querySelector('#status')

	// // Game variables
	// let currentPlayer = 1;
	// let winner = null;
	// let moves = 0;
	// let xMoves = [ [], [], [], [] ]
	// let oMoves = [ [], [], [], [] ]
	// let winCombos = [
		[1,2,3,4], 
        [5,6,7,8], 
        [9,10,11,12], 
        [13,14,15,16],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [4,8,12,16],
        [1,2,5,6],
        [3,4,7,8],
        [9,10,13,14],
        [11,12,15,16],
        [2,3,6,7],
        [10,12,14,15],
        [5,6,9,10],
        [7,8,11,12],
        [6,7,10,11]
	// ];

	// // Functions
	// function handleMove(e) {
	// 	if (winner !== null) {
	// 		return;
	// 	}
	// 	const tile = e.target;
	// 	const row = parseInt(tile.getAttribute('row'));
	// 	const col = parseInt(tile.getAttribute('tile'));
	// 	const markings = (currentPlayer === 1) ? xMoves : oMoves;
	// 	const otherMarkings = (currentPlayer === 1) ? oMoves : xMoves;

	// 	if (isNaN(row) || isNaN(col) || tile.classList.contains('x') || tile.classList.contains('o')) {
	// 		return;
	// 	}
	// 	tile.classList.add((currentPlayer === 1) ? 'x' : 'o');
	// 	markings[row-1].push(col)
	// 	moves++;}

// let turn = 1;
// let value = ["o", "x"];
// let matches = 0;
// let finishGame = false;
// let winnerMessage = 
// 	document.getElementById("status");
// let tile = 
// 	Array.from(document.querySelectorAll('.tile'));

// tile.forEach(
// 	x => x.addEventListener("click", ponerFicha)
// );

// function ponerFicha(event){
// 	let tileSelected = event.target;
// 	if(!finishGame && tileSelected.innerHTML == ""){
// 		tileSelected.innerHTML = value[turn];
// 		matches += 1;
		
// 		let estadoPartida = estado();
// 		if(estadoPartida == 0){
// 			cambiarTurn();
// 			if(matches < 9){
// 				estadoPartida = estado();
// 				matches += 1;
// 				cambiarTurn();	
// 			}	
// 		}
		
// 		if(estadoPartida == 1){
//             winnerMessage.innerHTML = "Player 1 won"
// 			finishGame = true;
// 		}
// 		else if(estadoPartida == -1){
// 			winnerMessage.innerHTML = "Player 2 won"
// 			finishGame = true;
//             winnerMessage.innerHTML = "Draw"
// 		}
// 	}	
// }

// function cambiarTurn(){
// 	if(turn==1){
// 		turn = 0;
// 	}
// 	else{
// 		turn = 1;
// 	}
// }

// function estado(){
// 	winningCombinations = 0;
// 	nEstado = 0;

// 	function combination(...args){
// 		valores = args.map(x=>x.innerHTML);
// 		if(valores[0] != "" && valores.every((x, i, arr) => x===arr[0])){
// 			return true;
// 		}
// 		else{
// 			return false;
// 		}
// 	}


// 	if(combination(tile[1], tile[2], tile[3], tile[4])){
// 		winningCombinations = 1;
// 	}

// 	else if(combination(tile[5], tile[6], tile[7], tile[8])){
// 		winningCombinations = 2;
// 	}

// 	else if(combination(tile[9], tile[10], tile[11], tile[12])){
// 		winningCombinations = 3;
// 	}

// 	else if(combination(tile[13], tile[14], tile[15], tile[16])){
// 		winningCombinations = 4;
// 	}

// 	else if(combination(tile[1], tile[5], tile[9], tile[13])){
// 		winningCombinations = 5;
// 	}

// 	else if(combination(tile[2], tile[6], tile[10], tile[14])){
// 		winningCombinations = 6;
// 	}

// 	else if(combination(tile[3], tile[7], tile[11], tile[15])){
// 		winningCombinations = 7;
// 	}

// 	else if(combination(tile[4], tile[8], tile[12], tile[16])){
// 		winningCombinations = 8;
// 	}
//     else if(combination(tile[1], tile[2], tile[5], tile[6])){
// 		winningCombinations = 9;
// 	}
//     else if(combination(tile[3], tile[4], tile[7], tile[8])){
// 		winningCombinations = 10;
// 	}
//     else if(combination(tile[9], tile[10], tile[13], tile[14])){
// 		winningCombinations = 11;
// 	}
//     else if(combination(tile[11], tile[12], tile[15], tile[16])){
// 		winningCombinations = 12;
// 	}
//     else if(combination(tile[2], tile[3], tile[6], tile[7])){
// 		winningCombinations = 13;
// 	}
//     else if(combination(tile[10], tile[11], tile[14], tile[15])){
// 		winningCombinations = 14;
// 	}
//     else if(combination(tile[5], tile[6], tile[9], tile[10])){
// 		winningCombinations = 15;
// 	}
//     else if(combination(tile[7], tile[8], tile[11], tile[12])){
// 		winningCombinations = 16;
// 	}
//     else if(combination(tile[6], tile[7], tile[10], tile[11])){
// 		winningCombinations = 17;
// 	}

// 	//Comprobamos quien ha ganado
// 	if(winningCombinations > 0){
// 		if(turn == 1){
// 			nEstado = 1;
// 		}
// 		else{
// 			nEstado = -1;
// 		}
// 	}

// 	return nEstado;
// }



