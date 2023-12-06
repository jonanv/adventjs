// score: 370
function maxDistance(movements) {
    let left = 0;
    let right = 0;
    let leftRight = 0;

    for (const m of movements) {
        if (m === '<') left++;
        else if (m === '>') right++;
        else leftRight++;
    };
    return Math.abs(left - right) + leftRight;
}

// score: 390
function maxDistance(movements) {
    let leftRight = movements.replaceAll('*', '');
    let left = leftRight.replaceAll('<', '');
    let right = leftRight.replaceAll('>', '');
    return movements.length - 2 * Math.min(left.length, right.length);
}

// score: 370
// function maxDistance(movements) {
//     let l = 0;
//     let r = 0;
//     let n = 0;

//     for (const m of movements) {
//         if (m === ">") r++;
//         else if (m === "<") l++;
//         else n++;
//     }
//     return Math.max(Math.abs(r - l) + n, Math.abs(l - r) + n);
// }

module.exports = maxDistance;

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2