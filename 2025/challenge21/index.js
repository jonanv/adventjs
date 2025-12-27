/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
    const grid = warehouse.map(r => [...r])
    const rows = grid.length
    const cols = grid[0].length

    const isFullRow = row => row.every(c => c === '#')

    for (const col of drops) {
        // buscar hueco desde abajo
        let placed = false

        for (let r = rows - 1; r >= 0; r--) {
            if (grid[r][col] === '.') {
                grid[r][col] = '#'
                placed = true
                break
            }
        }

        if (!placed) continue // columna llena

        // revisar filas completas
        for (let r = rows - 1; r >= 0; r--) {
            if (isFullRow(grid[r])) {
                grid.splice(r, 1)                 // eliminar fila
                grid.unshift(Array(cols).fill('.')) // agregar fila vacía arriba
            }
        }
    }

    return grid
}

module.exports = clearGifts;