// score: 150
// function compile(code) {
//     let pointer = 0;
//     let counter = 0;
//     let indexOfReturn = -1;

//     let commands = {
//         '+': () => counter++,
//         '-': () => counter--,
//         '*': () => (counter *= 2),
//         '%': () => (indexOfReturn = pointer),
//         '<': () =>
//             indexOfReturn >= 0
//                 ? ((pointer = indexOfReturn), (indexOfReturn = -1))
//                 : (pointer = pointer),
//         '¿': () =>
//             (pointer = counter > 0 
//                 ? pointer 
//                 : code.slice(pointer).indexOf('?') + pointer),
//     };

//     while (code[pointer]) commands[code[pointer++]]?.();
//     return counter;
// }

// score: 170
function compile(code) {
    let counter = 0;
    let ret = null;
    for (let i = 0; i < code.length; i++) {
        counter += +(code[i] == '+');
        counter -= +(code[i] == '-');
        counter = [counter, counter * 2][+(code[i] == '*')];
        ret = [ret, counter][+(code[i] == '%')];
        counter += [0, 0, counter - ret][+(ret != null) + +(code[i] == '<')];
        i = [i, i, code.indexOf('?')][+(counter <= 0) + +(code[i] == '¿')];
    }
    return counter;
}

module.exports = compile;

// console.log(compile('++*-')); // 3
// (1 + 1) * 2 - 1 = 3

console.log(compile('++%++<')) // 6
// // 1 + 1 + 1 + 1 + 1 + 1 = 6

// console.log(compile('++<--')) // 0
// // 1 + 1 - 1 - 1 = 0

// console.log(compile('++¿+?')) // 3
// // 1 + 1 + 1 = 3

// console.log(compile('--¿+++?')) // -2
// // - 1 - 1 = -2
