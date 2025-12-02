/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
// flatMap + fill	Código limpio, moderno	⭐⭐⭐
// function manufactureGifts(giftsToProduce) {
//     return giftsToProduce
//         .filter(({ quantity }) => Number.isFinite(quantity) && quantity > 0)
//         .flatMap(({ quantity, toy }) => Array(quantity).fill(toy));
// }

// push + fill	Balance entre limpieza y rendimiento	⭐⭐⭐⭐
// function manufactureGifts(giftsToProduce) {
//     const result = [];
//     for (const { toy, quantity } of giftsToProduce) {
//         if (Number.isFinite(quantity) && quantity > 0) {
//             result.push(...Array(quantity).fill(toy));
//         }
//     }
//     return result;
// }

// Score: 8
// for interno (tu versión optimizada)	Grandes cantidades	⭐⭐⭐⭐⭐
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