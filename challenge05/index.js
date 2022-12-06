// // 163 - No valida por arrow function
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   return solve(giftsCities, maxGifts, maxCities);
// }

// solve = (giftsCities, maxGifts, maxCities, index=0, cantity=0, amt=0) => {
//   if(amt == maxCities || index == giftsCities.length) {
//     return cantity;
//   }
//   if(cantity + giftsCities[index] <= maxGifts) {
//     return Math.max(
//       solve(giftsCities, maxGifts, maxCities, index+1, cantity+giftsCities[index], amt+1),
//       solve(giftsCities, maxGifts, maxCities, index+1, cantity, amt)
//     );
//   }
//   return solve(giftsCities, maxGifts, maxCities, index+1, cantity, amt);
// }

// // 137
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   const solve = (giftsCities, maxGifts, maxCities, index=0, cantity=0, amt=0) => {
//     if(amt == maxCities || index == giftsCities.length) {
//       return cantity;
//     }
//     if(cantity + giftsCities[index] <= maxGifts) {
//       return Math.max(
//         solve(giftsCities, maxGifts, maxCities, index+1, cantity+giftsCities[index], amt+1),
//         solve(giftsCities, maxGifts, maxCities, index+1, cantity, amt)
//       );
//     }
//     return solve(giftsCities, maxGifts, maxCities, index+1, cantity, amt);
//   }
//   return solve(giftsCities, maxGifts, maxCities);
// }

// // 128
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   let res = 0;
//   const getCombinations = (after, before = []) => {
//     for (let i = 0; i < after.length; i++) {
//       const combination = [...before, after[i]];
//       const sum = combination.reduce((t, c) => t + c);
//       if (combination.length <= maxCities && sum <= maxGifts) {
//         res = Math.max(res, sum);
//       }
//       getCombinations(after.slice(i + 1), combination);
//     }
//     return res;
//   }
//   return getCombinations(giftsCities);
// }

// // 150
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   return (
//     giftsCities
//       .reduce((previousValue, accumulatedValue) => 
//         previousValue.concat(previousValue.map((value) => [accumulatedValue].concat(value))), 
//         [[]])
//       .filter((array) => (array.length <= maxCities))
//       .map((array) => array.reduce((acc, cur) => acc + cur, 0))
//       .filter((num) => (num <= maxGifts))
//       .sort((a, b) => b - a)[0] || 0
//   );
// }

// 167
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let filteredGifts = giftsCities
    .sort((a, b) => b - a)
    .filter(cityGifts => cityGifts < maxGifts)
    .splice(0, maxCities);
  if (filteredGifts.length <= 0) return 0;
  let numberOfGifts = filteredGifts.reduce((a, b) => a + b);
  return (numberOfGifts > maxGifts) ? maxGifts : numberOfGifts;
}

const giftsCities = [50, 10, 40, 1000, 500, 200];
const maxGifts = 199;
const maxCities = 4;

// const giftsCities = [12, 3, 11, 5, 7];
// const maxGifts = 20;
// const maxCities = 3;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

let giftsNumber = getMaxGifts(giftsCities, maxGifts, maxCities); // 20
console.log(giftsNumber);