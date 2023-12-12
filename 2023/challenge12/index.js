// score: 
function checkIsValidCopy(original, copy) {
    let characters = ['#', '+', ':', '.', ' '];

    for (const [i, v] of Object.entries(original)) {
        let letters = [...characters, v, v.toLowerCase()];

        let includes = letters.includes(copy[i]);
        let isSpace = (v === ' ' & copy[i] !== ' ') ? true : false;
        // console.log(v, copy[i], includes, isSpace);
        if (!includes | isSpace) return false;

        // characters = new RegExp(/([#+:.\s])+/g);
        // let c = copy[i].match(characters) ? true : false;
        // console.log(v, copy[i], c);
        // console.log(v, copy[i], v.toLowerCase() === copy[i], c, v === ' ', copy[i] === ' ');
        // if (!(v.toLowerCase() === copy[i]
        //     | c
        //     | (v === ' ' & copy[i] === ' '))) return false;
    }
    return true;
}

// score: 270
// function checkIsValidCopy(original, copy) {
//     let i = -1
//     let res = true

//     for (let o of [...original]) {
//         i++;
//         if (o.toLowerCase() == copy[i]) continue;
//         let simbolos = [o, o.toLowerCase(), "#", "+", ":", ".", " ", ""];

//         res = [false, [false, true][
//             +(
//                 simbolos
//                     .slice(
//                         (/([A-Z])|([a-z])|(\#)|(\+)|(\:)|(\.)|(\s)/g
//                             .exec(o)?.lastIndexOf(o) ?? 1) - 1
//                     )
//                     .includes(copy[i])
//             )
//         ]][+res]
//     }
//     return res
// }

module.exports = checkIsValidCopy;

console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'));  // true
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')); // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')); // false (hay un # donde no debería)