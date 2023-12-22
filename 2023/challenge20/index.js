// score: 190
function distributeGifts(weights) {
    const res = [];
    let topRow = [];
    let bottomRow = [];

    for (const [y, weight] of weights.entries()) {
        topRow = weights[y - 1];
        bottomRow = weights[y + 1];
        res[y] = [];

        for (const [x, w] of weight.entries()) {
            let top = topRow?.[x], bottom = bottomRow?.[x];
            let left = weight?.[x - 1], right = weight?.[x + 1];
            const divisor = !!w + !!top + !!bottom + !!left + !!right;
            top ??= 0, bottom ??= 0, left ??= 0, right ??= 0;

            const newValue = Math.round((w + top + bottom + left + right) / divisor);
            res[y][x] = newValue;
        }
    }
    return res;
}

module.exports = distributeGifts;

const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
];

distributeGifts(input);

// Resultado paso a paso de los primeros cálculos:

// En la posición [0][0] tenemos el valor 4
// Sus vecinos son los valores 5 y 6
// (4 + 5 + 6) / 3 = 5

// En la posición [0][1] tenemos el valor 5
// Sus vecinos son los valores 4 y 1
// (5 + 4 + 1) / 3 = 3.33
// Math.round(3.33) = 3

// En la posición [0][2] tenemos el valor 1
// Sus vecinos son los valores 5 y 3
// (1 + 5 + 3) / 3 = 3

// En la posición [1][0] tenemos el valor 6
// Sus vecinos son los valores 4, 8
// (6 + 4 + 8 ) / 3 = 6

// En la posición [1][1] tenemos el valor null
// Sus vecinos son los valores 5, 6 y 3
// (5 + 6 + 3) / 3 = 4.66
// Math.round(4.66) = 5
// ... y así con el resto de posiciones
// [
//     [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
//     [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
//     [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]
// ]

// Resultado final tras redondear con Math.round()
// [
//     [5, 3, 3],
//     [6, 5, 3],
//     [7, 6, 4]
// ]