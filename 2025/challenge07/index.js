/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
    let result = []
    let position = 1   // contador global

    for (let i = 1; i <= height; i++) {
        const stars = 2 * i - 1
        let row = ""

        for (let j = 1; j <= stars; j++) {
            if (position % frequency === 0) {
                row += ornament
            } else {
                row += "*"
            }
            position++
        }

        result.push(" ".repeat(height - i) + row)
    }

    // tronco centrado
    result.push(" ".repeat(height - 1) + "#")

    return result.join("\n")
}

module.exports = drawTree;