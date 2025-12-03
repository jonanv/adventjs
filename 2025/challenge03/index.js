/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
    if (size < 2) return '';
    let gift = '';

    for (let i = 0; i < size; i++) {
        let line = '';
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                line += symbol;
            } else {
                line += ' ';
            }
        }
        gift += line + (i < size - 1 ? '\n' : '');
    }
    return gift;
}

module.exports = drawGift