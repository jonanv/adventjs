// score: 360
function maxGifts(houses) {
    let prevMax = 0;
    let currMax = 0;

    for (let i = 0; i < houses.length; i++) {
        console.log(currMax, prevMax);
        let newMax = currMax > prevMax + houses[i]
            ? currMax 
            : prevMax + houses[i];
        prevMax = currMax;
        currMax = newMax;
    }
    return currMax;
}

// score: 290
// function maxGifts(houses) {
//     let prevMax = 0;
//     let currMax = 0;

//     for (const house of houses) {
//         let newMax = Math.max(currMax, prevMax + house);
//         prevMax = currMax;
//         currMax = newMax;
//     }
//     return currMax;
// }

// score: 290
// function maxGifts(houses) {
//     const dp = houses.slice(0, 2);
//     for (const house of houses.slice(2)) {
//         dp.push(Math.max(dp[dp.length - 1], dp[dp.length - 2] + house))
//     }
//     return dp[dp.length - 1];
// }

module.exports = maxGifts;

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
console.log(maxGifts([1, 10, 1, 3, 100])); // 110 (10 + 100)
console.log(maxGifts([1, 2, 3, 4, 5])); // 9 (1 + 3 + 5)