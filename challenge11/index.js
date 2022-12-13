// score: 260
// function getCompleted(part, total) {
//     let secT = total.split(":").reverse()
//         .reduce((a, b, i) => a + parseInt(b * (Math.pow(60, i))), 0);
//     let secP = part.split(":").reverse()
//         .reduce((a, b, i) => a + parseInt(b * (Math.pow(60, i))), 0);

//     let numeroGrande = secT / secP;
//     let cont = 1;

//     while (numeroGrande % 1 !== 0) {
//         cont++;
//         numeroGrande = numeroGrande * cont;
//     }
//     return `${cont}/${(secT / secP) * cont}`;
// }

// score: 220
// function getCompleted(part, total) {
//     let secT = total.split(":");
//     secT = (parseInt(secT[0]) * 3600) + (parseInt(secT[1] * 60)) + (parseInt(secT[2]));
//     let secP = part.split(":");
//     secP = (parseInt(secP[0]) * 3600) + (parseInt(secP[1] * 60)) + (parseInt(secP[2]));

//     let numeroGrande = secT / secP;
//     let cont = 1;

//     while (numeroGrande % 1 !== 0) {
//         cont++;
//         numeroGrande = numeroGrande * cont;
//     }
//     return `${cont}/${(secT / secP) * cont}`;
// }

// score: 360
// function getCompleted(part, total) {
//     const arrPart = part.split(':');
//     const arrTotal = total.split(':');
//     const partSeconds = arrPart[0] * 3600 + arrPart[1] * 60 + arrPart[2] * 1;
//     const totalSeconds = arrTotal[0] * 3600 + arrTotal[1] * 60 + arrTotal[2] * 1;
//     let gcd = partSeconds;
//     let tmp = totalSeconds;
//     while (tmp) {
//         const t = tmp;
//         tmp = gcd % tmp;
//         gcd = t;
//     }
//     return `${partSeconds / gcd}/${totalSeconds / gcd}`;
// }

// score: 260 - Mia
function getCompleted(part, total) {
    let time = [3600, 60, 1];
    let totalTime = total
        .split(':')
        .map((value, index) => value * time[index])
        .reduce((a, c) => a + c, 0);
    let partTime = part
        .split(':')
        .map((value, index) => value * time[index])
        .reduce((a, c) => a + c, 0);

    let fraction = totalTime / partTime;
    let cont = 1;
    while (fraction % 1 !== 0) {
        cont++;
        fraction = fraction * cont;
    }
    return `${ cont }/${ (totalTime / partTime) * cont }`;
}

module.exports = getCompleted;

console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')) // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5'