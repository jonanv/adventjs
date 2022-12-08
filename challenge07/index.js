// score: 400
function getGiftsToRefill(a1, a2, a3) {
    let gifts = [...new Set(a1.concat(a2, a3))]; // Crea el arreglo sin elementos repetidos
    return [...gifts.filter((gift) => {
        return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1;
    })];
}

// score: 200
// function getGiftsToRefill(a1, a2, a3) {
//     const stores = [...new Set([...a1, ...a2, ...a3])];
//     return stores.filter((gift) => {
//         return (a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1);
//     });
// }

// score: 120
// function getGiftsToRefill(a1, a2, a3) {
//     let gifts = [...a1, ...a2, ...a3]
//     let nonRepeated = {}
//     gifts.map(gift => {
//         if ((a1.includes(gift) + a2.includes(gift) + a3.includes(gift)) == 1) {
//             nonRepeated[gift] = 1
//         }
//     });
//     return (Object.keys(nonRepeated));
// }

module.exports = getGiftsToRefill;

const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']
console.log(gifts);