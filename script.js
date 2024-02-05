const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameWon = false;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !gameWon) {
            cell.textContent = currentPlayer;
            if (checkWin()) {
                gameWon = true;
                alert(`${currentPlayer} wins!`);
            } else if (checkDraw()) {
                gameWon = true;
                alert("It's a draw!");
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWin() {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            cells[a].style.backgroundColor = '#88ff88';
            cells[b].style.backgroundColor = '#88ff88';
            cells[c].style.backgroundColor = '#88ff88';
            return true;
        }
    }

    return false;
}

function checkDraw() {
    for (const cell of cells) {
        if (!cell.textContent) {
            return false;
        }
    }
    return true;
}
