// Declaring constants to be used in game
const playerTurn = document.getElementById('player-turn')
const newGame = document.getElementById('restart')
const tiles = Array.from(document.getElementsByClassName('tile'))
const textPlayerX = "X"
const textPlayerO = "O"

const gameStart = () => {
    tiles.forEach(tile => tile.addEventListener('click', tileClicked))
}


// Declare variables and create an empty array consisting of each tile on the Tic Tac Toe board
let currentPlayer = textPlayerX
let freeTiles = Array(9).fill(null)

// Create a function that checks tile I.D. and current player and then updates that tile with current player text when clicked
function tileClicked(player) {
    const id = player.target.id

    if (freeTiles[id] == null) {
        freeTiles[id] = currentPlayer
        player.target.innerText = currentPlayer
        currentPlayer = currentPlayer == textPlayerX ? textPlayerO : textPlayerX
    }
}

gameStart();