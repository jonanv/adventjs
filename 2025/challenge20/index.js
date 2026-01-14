/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
    // copiamos la matriz para no mutar la original
    const grid = warehouse.map(row => [...row])
    const rows = grid.length

    for (const col of drops) {

        // recorremos desde abajo hacia arriba
        for (let r = rows - 1; r >= 0; r--) {
            if (grid[r][col] === '.') {
                grid[r][col] = '#'
                break // dejamos de buscar en esta columna
            }
        }
    }

    return grid
}

module.exports = dropGifts;