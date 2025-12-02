/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
// Score: 8
function filterGifts(gifts) {
    return gifts.filter(gift => !gift.includes('#'));
}

module.exports = filterGifts;