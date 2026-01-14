/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
    const rows = maze.length
    const cols = maze[0].length

    let start = null

    // buscar S
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (maze[r][c] === 'S') {
                start = [r, c]
                break
            }
        }
    }

    const queue = [start]
    const visited = new Set([start.toString()])

    const directions = [
        [1, 0], [-1, 0],
        [0, 1], [0, -1]
    ]

    while (queue.length) {
        const [r, c] = queue.shift()

        if (maze[r][c] === 'E') return true

        for (const [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc

            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                maze[nr][nc] !== '#' &&
                !visited.has([nr, nc].toString())
            ) {
                visited.add([nr, nc].toString())
                queue.push([nr, nc])
            }
        }
    }

    return false
}

module.exports = canEscape;