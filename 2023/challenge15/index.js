// score: 120
// function autonomousDrive(store, movements) {
//     let robotRow = 0;
//     let robotCol = 0;

//     store.forEach((row, rowIndex) => {
//         const colIndex = row.indexOf('!');
//         if (colIndex !== -1) {
//             robotRow = rowIndex;
//             robotCol = colIndex;
//         }
//     });

//     for (let move of movements) {
//         let newRow = robotRow;
//         let newCol = robotCol;

//         switch (move) {
//             case 'R':
//                 newCol++;
//                 break;
//             case 'L':
//                 newCol--;
//                 break;
//             case 'U':
//                 newRow--;
//                 break;
//             case 'D':
//                 newRow++;
//                 break;
//         }
//         if (newRow >= 0 && newRow < store.length &&
//             newCol >= 0 && newCol < store[0].length &&
//             store[newRow][newCol] !== '*') {
//             store[robotRow] = store[robotRow].substring(0, robotCol)
//                 + '.' 
//                 + store[robotRow].substring(robotCol + 1);
//             store[newRow] = store[newRow].substring(0, newCol) 
//                 + '!'
//                 + store[newRow].substring(newCol + 1);
//             robotRow = newRow;
//             robotCol = newCol;
//         }
//     }
//     return store;
// }

// score: 270
function autonomousDrive(store, movements) {
    let row = store.findIndex(_ => _.includes('!'));
    let col = store[row].indexOf('!');
    store[row] = store[row].replace('!', '.');
    for (const mv of movements) {
        col += +(store[row][col + 1] === '.') * +(mv === 'R');
        col -= +(store[row][col - 1] === '.') * +(mv === 'L');
        row += +(store.at(row + 1)?.at(col) === '.') * +(mv === 'D');
        row -= +(store.at(row - 1)?.at(col) === '.') * +(mv === 'U');
    }
    const str = store[row];
    store[row] = str.substring(0, col) + '!' + str.substring(col + 1);
    return store;
}

// score: 170
// function autonomousDrive(store, movements) {
//     const row = store.findIndex(r => r.includes('!'));
//     const col = store[row].indexOf('!');
//     store[row] = store[row].replace("!", ".");
//     const m = {
//         "L": [-1, 0],
//         "R": [1, 0],
//         "U": [0, -1],
//         "D": [0, 1],
//     }
//     let x = col, y = row;
//     for (const move of movements) {
//         const [mx, my] = m[move];
//         x += mx * +(store.at(y + my)?.at(x + mx) == '.');
//         y += my * +(store.at(y + my)?.at(x + mx) == '.');
//     }
//     store[y] = store[y].substring(0, x) + '!' + store[y].substring(x + 1);
//     return store;
// }

// score: 290
// function autonomousDrive(store, movements) {
//     const w = store[0].length;
//     const mi = store.join('').indexOf('!');
//     let si = (mi / w) | 0;
//     let sj = mi % w;
//     store[si] = store[si].substring(0, sj) + '.' + store[si].substring(sj + 1);

//     for (const movement of movements) {
//         const nextI = si -(movement === 'U') + (movement === 'D');
//         const nextJ = sj -(movement === 'L') + (movement === 'R');
//         const canMove = +(store[nextI]?.[nextJ] === '.')
//         si = [si, nextI][canMove];
//         sj = [sj, nextJ][canMove];
//     }
//     store[si] = store[si].substring(0, sj) + '!' + store[si].substring(sj + 1);
//     return store;
// }

module.exports = autonomousDrive;

const store = [
    '..!....',
    '...*.*.'
];
const movements = ['R', 'R', 'D', 'L'];
console.log(autonomousDrive(store, movements));