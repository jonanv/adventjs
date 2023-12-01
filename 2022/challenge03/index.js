// score: 122
// function distributeGifts(packOfGifts, reindeers) {
//     let weightOfGifts = 0;
//     let reindeersCapacity = 0;

//     packOfGifts.map(gift => {
//         weightOfGifts += gift.length;
//     });
//     reindeers.map(reindeer => {
//         reindeersCapacity += reindeer.length * 2;
//     });
//     return Math.floor(reindeersCapacity/weightOfGifts);
// }

// score: 135
function distributeGifts(packOfGifts, reindeers) {
    let weightOfGifts = packOfGifts.join('').length;
    let reindeerCapacity = reindeers.join('').length * 2;
    return Math.floor(reindeerCapacity / weightOfGifts);
}

// score: 164
// function distributeGifts(packOfGifts, reindeers) {
//     return Math.floor((reindeers.join('').length * 2)/(packOfGifts.join('').length));
// }

// score: 198 - No valida
// distributeGifts = (packOfGifts, reindeers) => {
//     let maxLength = (packOfGifts.length > reindeers.length) 
//                         ? packOfGifts.length 
//                         : reindeers.length;
//     let giftWeight = 0;
//     let reindeersCapacity = 0;

//     for (let i = 0; i < maxLength; i++) {
//       if (packOfGifts[i]) giftWeight += packOfGifts[i].length;
//       if (reindeers[i]) reindeersCapacity += reindeers[i].length * 2;
//     }
//     return Math.floor(reindeersCapacity / giftWeight);
// };

// score: 132
// function distributeGifts(packOfGifts, reindeers) {
//     let weightOfGifts = 0;
//     let reindeersCapacity = 0;

//     packOfGifts.map(gift => {
//         weightOfGifts += gift.length;
//     });
//     reindeers.map(reindeer => {
//         reindeersCapacity += reindeer.length * 2;
//     });
//     return Math.floor(reindeersCapacity/weightOfGifts);
// }

module.exports = distributeGifts;

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos


const packageNumber = distributeGifts(packOfGifts, reindeers); // 2
console.log(packageNumber);