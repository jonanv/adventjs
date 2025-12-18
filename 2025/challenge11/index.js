/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
    const rows = warehouse.length;
    const cols = warehouse[0].length;
    let unsafe = 0;

    // Movimientos cardinales: arriba, abajo, izquierda, derecha
    const dirs = [
        [-1, 0],    // Arriba
        [1, 0],     // Abajo
        [0, -1],    // Izquierda
        [0, 1]      // Derecha
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (warehouse[r][c] !== '*') continue;  // No es regalo

            // Verificar si tiene cámara (#) alrededor
            let watched = false;

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                // Verificar límites
                if ((nr >= 0 && nr < rows) && (nc >= 0 && nc <= cols)) {
                    if (warehouse[nr][nc] === '#') {
                        watched = true;
                        break;
                    }
                }
            }
            if (!watched) unsafe++;
        }
    }
    return unsafe;
}

module.exports = findUnsafeGifts;