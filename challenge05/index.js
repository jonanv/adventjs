// score: 163 - No valida por arrow function
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

// score: 137
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

// score: 128
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

// score: 150
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

// score: 167
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   let filteredGifts = giftsCities
//     .sort((a, b) => b - a)
//     .filter(cityGifts => cityGifts < maxGifts)
//     .splice(0, maxCities);
//   if (filteredGifts.length <= 0) return 0;
//   let numberOfGifts = filteredGifts.reduce((a, b) => a + b);
//   return (numberOfGifts > maxGifts) ? maxGifts : numberOfGifts;
// }


// score: 103
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   let combinaciones = [];
//   combinaciones.push([], [giftsCities[0]]);
//   giftsCities.shift();

//   giftsCities.map(x => {
//     const newList = combinaciones.map(combinacion => {
//       let _combinacion = [...combinacion]
//       if (_combinacion.length < maxCities) {
//         _combinacion.push(x);
//       }
//       return _combinacion;
//     });
//     combinaciones = combinaciones.concat(newList);
//   })

//   combinaciones.shift();

//   return Math.max(
//     ...combinaciones.map(x => {
//       let sum = x.reduce((total, num) => total + num);
//       return sum > maxGifts ? 0 : sum;
//     })
//   );
// }

// score: 170 - El que más me gusta
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   return Math.max(...giftsCities
//     .reduce((previousValue, accumulatedValue) =>
//       previousValue.concat(previousValue.map((value) => [accumulatedValue].concat(value))),
//       [[]])
//     .filter((array) => (array.length <= maxCities))
//     .map((array) => array.reduce((acc, cur) => acc + cur, 0))
//     .filter((num) => (num <= maxGifts))
//   );
// }

// score: 170
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   const solve = (giftsCities, maxGifts, maxCities) => {
//     let maxGiftsValid = 0
//     const cityLength = giftsCities.length

//     giftsCities.map(() => {
//       let cityCount = 0
//       let acc = 0

//       for (let idx = 0; idx < cityLength; idx++) {
//         if (cityCount === maxCities) break
//         if (acc + giftsCities[idx] <= maxGifts) {
//           acc += giftsCities[idx]
//           cityCount++
//         }
//       }
//       if (acc > maxGiftsValid) maxGiftsValid = acc

//       giftsCities.push(giftsCities[0])
//       giftsCities.shift()
//     })
//     return maxGiftsValid
//   }
//   return solve(giftsCities, maxGifts, maxCities)
// }

// score: 183
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   let maxGiftsValid = 0;
//   giftsCities.forEach((item, index) => {
//     let cityCount = 0;
//     let acc = 0;
//     for (index; index < giftsCities.length; index++) {
//       if (cityCount === maxCities) break;
//       if (acc + giftsCities[index] <= maxGifts) {
//         acc += giftsCities[index];
//         cityCount++;
//       }
//     }
//     if (acc > maxGiftsValid) maxGiftsValid = acc;
//   })
//   return maxGiftsValid;
// }

// score: 201
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   return Math.max(
//     ...giftsCities
//       .sort((x, y) => y - x)
//       .reduce((result, _, i) => {
//         if (i) giftsCities.unshift(giftsCities.pop());

//         i = giftsCities
//           .slice(0, maxCities)
//           .reduce((acc, curr) => (acc += curr), 0);
//         i <= maxGifts && result.push(i);

//         i - giftsCities[maxCities - 1] <= maxGifts &&
//           result.push(i - giftsCities[maxCities - 1]);
//         return result;
//       }, []),
//     0
//   );
// }

// score: 203
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   return Math.max(
//     ...giftsCities
//       .sort((x, y) => y - x)
//       .reduce(
//         (result, _, i) => (
//           i && giftsCities.unshift(giftsCities.pop()),
//           (i = giftsCities
//             .slice(0, maxCities)
//             .reduce((acc, curr) => (acc += curr), 0)),
//           i <= maxGifts && result.push(i),
//           i - giftsCities[maxCities - 1] <= maxGifts &&
//             result.push(i - giftsCities[maxCities - 1]),
//           result
//         ),
//         []
//       ),
//     0
//   );
// }

// score: 220 - ahora 200
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      .sort((x, y) => y - x)
      .reduce((result, value, i) => (
          i && giftsCities.unshift(giftsCities.pop()),
          (i = giftsCities
            .slice(0, maxCities)
            .reduce((acc, curr) => (acc += curr), 0)),
          i <= maxGifts && result.push(i),
          i - giftsCities[maxCities - 1] <= maxGifts &&
          result.push(i - giftsCities[maxCities - 1]),
          result
        ), []),
    0
  );
}

module.exports = getMaxGifts;

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

let giftsNumber = getMaxGifts(giftsCities, maxGifts, maxCities); // 20
console.log(giftsNumber);





// 1) Sacar todas las posibles combinaciones de elementos del array:

// [[12],[3],[11],[5],[7],[12,3],[12,11],[3,11],[12,5],[3,5],[11,5],[12,7],[3,7],[11,7],[5,7],[12,3,11],[12,3,5],[12,11,5],[3,11,5],[12,3,7],[12,11,7],[3,11,7],[12,5,7],[3,5,7],[11,5,7],[12,3,11,5],[12,3,11,7],[12,3,5,7],[12,11,5,7],[3,11,5,7],[12,3,11,5,7]]

// 2) Filtrar las que tengan un tamaño igual o menor que maxCities (3):

// [[12],[3],[11],[5],[7],[12,3],[12,11],[3,11],[12,5],[3,5],[11,5],[12,7],[3,7],[11,7],[5,7],[12,3,11],[12,3,5],[12,11,5],[3,11,5],[12,3,7],[12,11,7],[3,11,7],[12,5,7],[3,5,7],[11,5,7]]

// 3) Hacer la suma de los elementos de cada sub-array:

// [12,3,11,5,7,15,23,14,17,8,16,19,10,18,12,26,20,28,19,22,30,21,24,15,23]

// 4) Filtrar aquellos que sean menores que maxGifts (20):

// [20,19,19,18,17,16,15,15,14,12,12,11,10,8,7,5,3]

// 5) Devolver el máximo de ese array: 20