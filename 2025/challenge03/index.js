/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
// Score: 8
// function drawGift(size, symbol) {
//     if (size < 2) return '';
//     let gift = '';

//     for (let i = 0; i < size; i++) {
//         let line = '';
//         for (let j = 0; j < size; j++) {
//             if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
//                 line += symbol;
//             } else {
//                 line += ' ';
//             }
//         }
//         gift += line + (i < size - 1 ? '\n' : '');
//     }
//     return gift;
// }

function drawGift(size, symbol) {
    if (size < 2) return '';

    const border = symbol.repeat(size);
    const middle = symbol + ' '.repeat(size - 2) + symbol;

    return [
        border,
        ...Array(size - 2).fill(middle),
        border
    ].join('\n');
}

// function drawGift(size, symbol) {
//     if (size < 2) return '';
//     let gift = symbol.repeat(size) + '\n';
//     const middle = symbol + ' '.repeat(size - 2) + symbol + '\n';

//     for (let i = 0; i < size - 2; i++) {
//         gift += middle;
//     }
//     return gift + symbol.repeat(size);
// }

module.exports = drawGift