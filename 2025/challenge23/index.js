/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
    const rows = map.length
    const cols = map[0].length

    let start = null
    const goals = []

    // Buscar S y G
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (map[r][c] === 'S') start = [r, c]
            if (map[r][c] === 'G') goals.push([r, c])
        }
    }

    // Si no hay regalos
    if (goals.length === 0) return 0

    // BFS desde S
    const queue = [[...start, 0]] // [r, c, dist]
    const visited = new Set([start.toString()])

    const distances = new Map()

    const dirs = [
        [1, 0], [-1, 0],
        [0, 1], [0, -1]
    ]

    while (queue.length) {
        const [r, c, d] = queue.shift()

        if (map[r][c] === 'G') {
            distances.set(`${r},${c}`, d)
        }

        for (const [dr, dc] of dirs) {
            const nr = r + dr
            const nc = c + dc

            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                map[nr][nc] !== '#' &&
                !visited.has(`${nr},${nc}`)
            ) {
                visited.add(`${nr},${nc}`)
                queue.push([nr, nc, d + 1])
            }
        }
    }

    // Verificar si todas las G fueron alcanzadas
    let total = 0
    for (const [r, c] of goals) {
        const key = `${r},${c}`
        if (!distances.has(key)) return -1
        total += distances.get(key)
    }

    return total
}

module.exports = minStepsToDeliver;