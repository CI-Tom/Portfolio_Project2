const playerTurn = document.getElementById('player-turn')
const newGame = document.getElementById('restart')
const tiles = Array.from(document.getElementsByClassName('tile'))
const textPlayerX = "X"
const textPlayerO = "O"

// console.log(tiles)

let currentPlayer = textPlayerX
let freeTiles = Array(9).fill(null)

// console.log(freeTiles)

const gameStart = () => {
    tiles.forEach(tile => tile.addEventListener('click', tileClicked))
}

function tileClicked(player) {
    const id = player.target.id
    // console.log(id)
    if (freeTiles[id] == null) {
        freeTiles[id] = currentPlayer
        player.target.innerText = currentPlayer
        currentPlayer = currentPlayer == textPlayerX ? textPlayerO : textPlayerX
    }
}

gameStart();