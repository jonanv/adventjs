// score: 250
// function manufacture(gifts, materials) {
//     let giftsManufacure = [];

//     gifts.map((gift) => {
//         let made = true;
//         let arrayGift = gift.split('');
//         arrayGift.map((material) => {
//             if (!materials.includes(material)) return made = false;
//         });
//         if (made) giftsManufacure.push(gift);
//     });
//     return giftsManufacure;
// }

// score: 280
// function manufacture(gifts, materials) {
//     const regexp = new RegExp(`[^${ materials }]+`);
//     return gifts.filter(gift => !regexp.test(gift));
// }

function manufacture(gifts, materials) {
    return gifts.filter(g => g.split('').every(m => materials.includes(m)));
}

module.exports = manufacture;

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

const giftsManufacure = manufacture(gifts, materials);
console.log(giftsManufacure);