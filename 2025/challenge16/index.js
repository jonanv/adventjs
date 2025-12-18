/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
    if (gifts.length === 0) return 0;

    let sleds = 1;
    let currentWeight = 0;

    for (const gift of gifts) {
        if (gift > maxWeight) return null;

        if (currentWeight + gift <= maxWeight) {
            currentWeight += gift;
        } else {
            sleds++;
            currentWeight = gift;
        }
    }

    return sleds;
}

module.exports = packGifts;