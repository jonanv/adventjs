// score: 
// function createChristmasTree(ornaments, height) {
//     let response = "";
//     return response;
// }

// score: 190
// function createChristmasTree(ornaments, height) {
//     let response = "";
//     const width = (height * 2) - 1;

//     ornaments = [...ornaments.repeat(60)];

//     for (const h of Array.from({ length: height }).keys()) {
//         const layerWidth = (h * 2) + 1;

//         response += " ".repeat(
//             (width - layerWidth) / 2
//         )
//             + ornaments.splice(0, h + 1).join(" ")
//             + "\n";
//     }
//     response += " ".repeat(width / 2) + "|" + "\n";
//     return response;
// }

// score: 270
// function createChristmasTree(ornaments, height) {
//     let res = [];
//     let j = 0;
//     for (let k = 1; k <= height; k++) {
//         let str = '';
//         for (let i = 0; i < k; i++) {
//             str += `${ornaments.charAt(j)} `;
//             j = (j + 1) % ornaments.length;
//         }
//         res.push(" ".repeat(height - k) + str.trimEnd());
//     }
//     res.push(" ".repeat(height - 1) + '|')
//     return res.join('\n') + '\n'
// }

// score: 280
function createChristmasTree(ornaments, height) {
    let totalOrnaments = (height * (height + 1)) / 2;
    let ornamentsToUse = ornaments.repeat(totalOrnaments);
    let lastIndex = 0;
    let result = '';

    for (let i = 0; i < height; i++) {
        result += `${' '.repeat(height - i - 1)}${ornamentsToUse
            .slice(lastIndex, lastIndex + i + 1)
            .split('')
            .join(' ')}\n`;
        lastIndex += i + 1;
    }
    return `${result}${'|'.padStart(height, ' ')}\n`;
}

module.exports = createChristmasTree;

console.log(createChristmasTree('123', 4));
console.log(createChristmasTree('*@o', 3));