// score: 360
// function selectSleigh(distance, sleighs) {
//     let list = sleighs.filter(x => (20 / x.consumption) >= distance).at(-1)
//     return list ? list.name : null
// }

// score: 320
// function selectSleigh(distance, sleighs) {
//     const valid = sleighs.reverse().find(sleigh => sleigh.consumption * distance <= 20)
//     return valid ? valid.name : null
// }

// // score: 260
// function selectSleigh(distance, sleighs) {
//     const valid = sleighs.filter(s => s.consumption * distance <= 20)
//     return valid.length ? valid.at(-1).name : null
// }

// score: 220
// function selectSleigh(distance, sleighs) {
//     const battery = 20;
//     const res = sleighs.reverse().find(item => item.consumption * distance <= battery);
//     return res ? res.name : null
// }

// score: 400
// function selectSleigh(distance, sleighs) {
//     let sleighs = sleighs.filter((x) => x.consumption * distance <= 20)
//     sleighs.unshift({ name: null })
//     return sleighs[sleighs.length - 1].name
// }

// score: 310
function selectSleigh(distance, sleighs) {
    let battery = 20;
    let sleighsAvaileble = sleighs.filter((sleigh) => sleigh.consumption * distance <= battery);
    return sleighsAvaileble.length
        ? sleighsAvaileble[sleighsAvaileble.length - 1].name
        : null;
}

module.exports = selectSleigh;

const distance = 30;
const sleighs = [
    { name: "Dasher", consumption: 0.3 },
    { name: "Dancer", consumption: 0.5 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
];

console.log(selectSleigh(distance, sleighs)); // => "Dancer"