/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
// Score: 8
// function matchGloves(gloves) {
//     const counts = {};

//     for (const { hand, color } of gloves) {
//         if (!counts[color]) counts[color] = { L: 0, R: 0 };
//         counts[color][hand]++;
//     }

//     const result = [];
//     for (const color in counts) {
//         const pairs = Math.min(counts[color].L, counts[color].R);
//         for (let i = 0; i < pairs; i++) {
//             result.push(color);
//         }
//     }
//     return result;
// }

function matchGloves(gloves) {
    const waiting = new Map(); // color -> { L:count, R:count }
    const pairs = [];

    for (const g of gloves) {
        // normalizar entrada por si vienen en minúsculas u otros valores
        const hand = (g.hand || '').toUpperCase();
        const color = g.color;

        if (hand !== 'L' && hand !== 'R') continue; // ignorar entradas inválidas

        const rec = waiting.get(color) || { L: 0, R: 0 };

        const opposite = hand === 'L' ? 'R' : 'L';
        if (rec[opposite] > 0) {
            // existe el opuesto esperando: consume uno y registramos el par ahora
            rec[opposite]--;
            pairs.push(color);
        } else {
            // no hay opuesto esperando: aumentamos el contador de este hand
            rec[hand] = rec[hand] + 1;
        }

        waiting.set(color, rec);
    }

    return pairs;
}

module.exports = matchGloves;