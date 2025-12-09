/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
// Score: 8
function matchGloves(gloves) {
    const counts = {};

    for (const { hand, color } of gloves) {
        if (!counts[color]) counts[color] = { L: 0, R: 0 };
        counts[color][hand]++;
    }

    const result = [];
    for (const color in counts) {
        const pairs = Math.min(counts[color].L, counts[color].R);
        for (let i = 0; i < pairs; i++) {
            result.push(color);
        }
    }
    return result;
}

module.exports = matchGloves;