// score: 10
// function howManyReindeers(reindeerTypes, gifts) {
//     reindeerTypes = reindeerTypes
//         .sort((a, b) => a.weightCapacity - b.weightCapacity)
//     return gifts.map(city => {
//         let list = {}
//         let check = city.weight
//         let reindeers = reindeerTypes.filter(x => x.weightCapacity < city.weight)
//         while (check != 0) {
//             reindeers.map(r => {
//                 if (check - r.weightCapacity >= 0) {
//                     list[r.type] ? list[r.type] += 1 : list[r.type] = 1
//                     check -= r.weightCapacity
//                 }
//             })
//         }
//         return ({
//             country: city.country,
//             reindeers: reindeers.map(y => {
//                 return {
//                     type: y.type,
//                     num: list[y.type]
//                 }
//             }).reverse()
//         })
//     })
// }

// score: 200
function howManyReindeers(reindeerTypes, gifts) {
    return gifts.map(({ country, weight }) => {
        let currentMax = weight;
        let weights = reindeerTypes
            .filter(({ type, weightCapacity }) => weightCapacity < weight)
            .sort((a, b) => b.weightCapacity - a.weightCapacity);
        let currentCapacity = weights
            .reduce((acc, curr) => (acc += curr.weightCapacity), 0);
        let reindeers = weights.map(({ type, weightCapacity }) => {
            let num = (currentMax / currentCapacity) >> 0;
            currentCapacity -= weightCapacity;
            currentMax -= num * weightCapacity;
            return { type, num };
        });
        return { country, reindeers };
    });
}

module.exports = howManyReindeers;

const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
];

const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
];

console.log(howManyReindeers(reindeerTypes, gifts));
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]