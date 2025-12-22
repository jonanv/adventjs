/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
    const rows = board.length
    const cols = board[0].length

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const color = board[r][c]
            if (color === '.') continue

            // Horizontal →
            if (c + 3 < cols) {
                if (
                    board[r][c + 1] === color &&
                    board[r][c + 2] === color &&
                    board[r][c + 3] === color
                ) {
                    return true
                }
            }

            // Vertical ↓
            if (r + 3 < rows) {
                if (
                    board[r + 1][c] === color &&
                    board[r + 2][c] === color &&
                    board[r + 3][c] === color
                ) {
                    return true
                }
            }
        }
    }

    return false
}

module.exports = hasFourLights;