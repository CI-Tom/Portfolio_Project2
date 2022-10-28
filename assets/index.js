const boxes = document.querySelectorAll(".tile");
const messages = document.querySelector("#message");
const resetBtn = document.querySelector("#reset");

let cells = ["", "", "", "", "", "", "", "", "", ];
let currentPlayer = "X";
let gameRunning = false;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

startGame();

function startGame() {
    boxes.forEach(cell => cell.addEventListener("click", boxClicked));
    resetBtn.addEventListener("click", restartGame);
    messages.textContent = `${currentPlayer}'s turn`;
    gameRunning = true;
};

function boxClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (cells[cellIndex] != "" || !gameRunning) {
        return;
    }

    updateTile(this, cellIndex);
    updateWinner();
};

function updateTile(tile, index) {
    cells[index] = currentPlayer;
    tile.textContent = currentPlayer;
};

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    messages.textContent = `${currentPlayer}'s turn`;
};

function updateWinner() {
    let winner = false;

    for (let i = 0; i < winningCombos.length; i++) {
        const winCondition = winningCombos[i];
        const cellA = cells[winCondition[0]];
        const cellB = cells[winCondition[1]];
        const cellC = cells[winCondition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            winner = true;
            break;
        }
    }

    if (winner) {
        messages.textContent = `${currentPlayer} wins!`;
        gameRunning = false;
    } else if (!cells.includes("")) {
        messages.textContent = `Draw!`;
        gameRunning = false;
    } else {
        changePlayer();
    }
};

function restartGame() {
    currentPlayer = "X";
    cells = ["", "", "", "", "", "", "", "", "", ];
    messages.textContent = `${currentPlayer}'s turn`;
    boxes.forEach(cell => cell.textContent = "");
    gameRunning = true;
};