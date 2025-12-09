/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
    // 1. Convertir el board en matriz válida (eliminar primera y última línea en blanco)
    const rows = board.trim().split('\n');

    // 2. Encontrar posición inicial del reno (@)
    let startRow = -1;
    let startCol = -1;

    for (let r = 0; r < rows.length; r++) {
        let c = rows[r].indexOf('@');
        if (c !== -1) {
            startRow = r;
            startCol = c;
            break;
        }
    }

    let row = startRow;
    let col = startCol;
    let success = false;

    const movesMap = {
        U: [-1, 0],
        D: [1, 0],
        L: [0, -1],
        R: [0, 1]
    };

    // 3. Procesar cada movimiento
    for (const m of moves) {
        const [dr, dc] = movesMap[m];
        row += dr;
        col += dc;

        // 4. Crash si sale del tablero
        if (row < 0 || row >= rows.length || col < 0 || col >= rows[row].length) {
            return success ? 'success' : 'crash';
        }

        const cell = rows[row][col];

        // 5. Crash si toca obstáculo
        if (cell === '#') {
            return success ? 'success' : 'crash';
        }

        // 6. Éxito si recoge algo
        if (cell === '*') {
            success = true;
        }
    }

    // 7. Si no crash y no success → fail
    return success ? 'success' : 'fail';
}

module.exports = moveReno;