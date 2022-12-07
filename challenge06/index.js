// 100
// function createCube(size) {
//     let cube = '';
//     for (let i = 0; i < size; i++) {
//         cube += (' ').repeat(size - 1 - i);
//         cube += ('/\\').repeat(i + 1);
//         cube += ('_\\').repeat(size - 1);
//         cube += '_\\\n';
//     }
//     for (let j = size; j > 0; j--) {
//         cube += (' ').repeat(size - j);
//         cube += ('\\/').repeat(j);
//         cube += ('_/').repeat(size - 1);
//         cube += '_/';
//         if (j !== 1) cube += '\n'
//     }
//     return cube;
// }

// 160
// function createCube(size) {
//     let cubeUp = '';
//     let cubeDown = '';
//     for (let index = 0; index < size; index++) {
//         cubeUp += `${ (' ').repeat(size - 1 - index) }${ ('/\\').repeat(index + 1) }${ ('_\\').repeat(size - 1) }${ ('_\\\n') }`;
//         cubeDown += `${ (' ').repeat(index) }${ ('\\/').repeat(size - index) }${ ('_/').repeat(size - 1) }${ ('_/\n') }`;
//     }
//     return cubeUp + cubeDown.slice(0, -1);
// }

// 160
function createCube(size) {
    let cubeUp = [];
    let cubeDown = [];
    for (let index = 1; index <= size; index++) {
        cubeUp.push(' '.repeat(size - index) + '/\\'.repeat(index) + '_\\'.repeat(size));
        cubeDown.push(' '.repeat(index - 1) + '\\/'.repeat(size - index + 1) + '_/'.repeat(size));
    }
    return [...cubeUp, ...cubeDown].join('\n');
}

// 160
// function createCube(size) {
//     let up = "", down = "";
//     for (let i = 1; i <= size; i++) {
//         up += " ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size) + "\n"
//         down = " ".repeat(size - i) + "\\/".repeat(i) + "_/".repeat(size) + "\n" + down
//     }
//     return up + down.trim("\n");
// }

// 120 - Midu
// function createCube(size) {
//     let cubeRubik = [];
//     for (let index = 1; index <= size; index++) 
//         cubeRubik.push(' '.repeat(size - index) + '/\\'.repeat(index) + '_\\'.repeat(size));
//     for (let index = size; index >= 1; index--) 
//         cubeRubik.push(' '.repeat(size - index) + '\\/'.repeat(index) + '_/'.repeat(size));
//     return cubeRubik.join('\n');
// }

module.exports = createCube;

const cube = createCube(3);
console.log(cube);

// ```js
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/
// ```