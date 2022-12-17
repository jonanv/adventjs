// score: 140
function carryGifts(gifts, maxWeight) {
    let bags = [''];
    let count = 0;
    gifts.map((gift) => {
        let bag = bags[count].replace(' ', '');
        if ((bag.length + gift.length) <= maxWeight) {
            bags[count] += ' ' + gift;
            bags[count] = bags[count].trim();
            return;
        }
        count++;
        bags[count] = gift.length <= maxWeight ? gift : '';
    });
    return bags.filter((bag) => bag != '');
}

// score: 180
// function carryGifts(gifts, maxWeight) {
//     if (!gifts.every(gift => maxWeight >= gift.length)) {
//         return []
//     }
//     let carry = ['']
//     gifts.forEach(gift => {
//         const previousWeight = carry.at(-1).replace(/ /g, '').length
//         if ((previousWeight + gift.length) <= maxWeight) {
//             carry[carry.length - 1] += ' ' + gift
//             carry[carry.length - 1] = carry[carry.length - 1].trim()
//             return
//         }
//         carry.push(gift)
//     })
//     return carry
// }

// score: 180
// function carryGifts(gifts, maxWeight) {
//     if (gifts.every(n => n.length > maxWeight)) return []
//     let currentWeight = 0
//     return gifts.reduce((result, n) => {
//         if (maxWeight - (currentWeight + n.length) >= 0) {
//             result[result.length - 1] += ' ' + n
//             currentWeight += n.length
//             result[result.length - 1] = result[result.length - 1].trim()
//             return result
//         }
//         currentWeight = n.length
//         result.push(n)
//         return result
//     }, [''])
// }

// score: 220
// function carryGifts(gifts, maxWeight) {
//     return gifts
//         .filter(gift => gift.length <= maxWeight)
//         .reduce(
//             (acc, gift) =>
//                 acc.at(-1).replace(/\s/g, '').length + gift.length <= maxWeight
//                     ? [...acc.slice(0, acc.length - 1), `${acc.at(-1)} ${gift}`.trim()]
//                     : [...acc, gift],
//             ['']
//         )
//         .filter((el) => el);
// }

// score: 260
// function carryGifts(gifts, maxWeight) {
//     const regex = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g');
//     const res = gifts.join(' ').match(regex);
//     return res ? res : [];
// }

module.exports = carryGifts;

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10));
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7));
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4));
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6));
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro

console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 2));
console.log(carryGifts(['toy', 'toy', 'robot', 'to'], 12));