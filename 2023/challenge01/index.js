// score: 160
function findFirstRepeated(gifts) {
    const seen = {};
    for (const id of gifts) {
        if (seen[id]) return id;
        seen[id] = true;
        console.log(seen);
    }
    return -1;
}

// score: 330
// function findFirstRepeated(gifts) {
//     const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
//     return repeated.length > 0 ? repeated[0] : -1;
// }

// score: 340
// function findFirstRepeated(gifts) {
//     return gifts.find((elem, index) => {
//         return (gifts.slice(0, index).includes(elem));
//     }) ?? -1;
// }

module.exports = findFirstRepeated;

const gifts = [1, 2, 2, 3, 4];
const firstGiftRepeated = findFirstRepeated(gifts);
console.log(firstGiftRepeated);