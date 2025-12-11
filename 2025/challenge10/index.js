/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
    let depth = 0;
    let max = 0;

    for (const char of s) {
        if (char === '[') {
            depth++;
            if (depth > max) max = depth;
        } else if (char === ']') {
            depth--;
            if (depth < 0) return -1;  // se cerró antes de abrir
        }
    }

    return depth === 0 ? max : -1;  // si queda algo sin cerrar → inválido
}

console.log(maxDepth('[]')); // -> 1
maxDepth('[[]]') // -> 2
maxDepth('[][]') // -> 1
maxDepth('[[][]]') // -> 2
maxDepth('[[[]]]') // -> 3
maxDepth('[][[]][]') // -> 2

maxDepth('][') // -> -1 (cierra antes de abrir)
maxDepth('[[[') // -> -1 (faltan cierres)
maxDepth('[]]]') // -> -1 (sobran cierres)
maxDepth('[][][') // -> -1 (queda uno sin cerrar)

module.exports = maxDepth;