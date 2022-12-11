// score: 10
// function checkJump(heights) {
//     console.log(heights)
//     let midium = heights.indexOf(Math.max(...heights));
//     console.log(midium)
//     let left = heights.slice(0, midium);
//     console.log(left)
//     let right = heights.slice(midium);
//     console.log(right)

//     let isJumpLeft = true;
//     for (let index = 0; index < left.length - 1; index++) {
//         if(left[index] > left[index + 1]) {
//             isJumpLeft = false;
//             break;
//         }
//     }

//     let isJumpRight = true;
//     for (let index = 0; index < right.length - 1; index++) {
//         if(right[index] < right[index + 1]) {
//             isJumpRight = false;
//             break;
//         }
//     }
//     return isJumpLeft && isJumpRight && !!left.length && right.length > 1;
// }

// score: 220
function checkJump(heights) {
    let midium = heights.indexOf(Math.max(...heights));
    let leftSide = heights.slice(0, midium);
    let rightSide = heights.slice(midium);

    let isJumpLeft = leftSide
        .slice(1)
        .every((value, index) => value >= leftSide[index]);
    let isJumpRight = rightSide
        .slice(1)
        .every((value, index) => value <= rightSide[index]);
    return isJumpLeft && isJumpRight && !!leftSide.length && rightSide.length > 1;
}

// score: 260
// function checkJump(heights) {
//     const left = heights.splice(0, heights.indexOf(Math.max(...heights)))
//     const goodForLeft = left
//         .slice(1)
//         .every((l, i) => l >= left[i])
//     const goofForRight = heights
//         .slice(1)
//         .every((h, i) => h <= heights[i])

//     return goodForLeft && goofForRight && !!left.length && heights.length > 1
// }

module.exports = checkJump;

console.log(checkJump([1, 3, 8, 5, 2])) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

console.log(checkJump([1, 7, 3, 5])) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/

console.log(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1]));
console.log(checkJump([2, 2, 2, 2]));
console.log(checkJump([1, 2, 3]));