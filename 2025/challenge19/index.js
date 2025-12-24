/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
    const map = new Map()

    // Creamos un mapa origen -> destino
    for (const [from, to] of routes) {
        map.set(from, to)
    }

    // El inicio SIEMPRE es el origen del primer tramo
    const route = []
    let current = routes[0][0]

    route.push(current)

    // Vamos encadenando mientras exista siguiente destino
    while (map.has(current)) {
        const next = map.get(current)
        route.push(next)
        current = next
    }

    return route
}

module.exports = revealSantaRoute;