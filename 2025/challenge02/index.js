/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
// Score: 8
function manufactureGifts(giftsToProduce) {
    const result = [];

    for (const { toy, quantity } of giftsToProduce) {
        if (Number.isFinite(quantity) && quantity > 0) {
            for (let i = 0; i < quantity; i++) {
                result.push(toy);
            }
        }
    }

    return result;
}

module.exports = manufactureGifts;