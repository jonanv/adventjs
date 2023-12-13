// score: 160
function checkIsValidCopy(original, copy) {
    let characters = ['#', '+', ':', '.', ' '];

    for (let [i, v] of Object.entries(original)) {
        let letters = [...characters, v, v.toLowerCase()];
        let includes = letters.includes(copy[i]);
        let isSpace = (v === ' ' & copy[i] !== ' ') ? true : false;
        if (!includes | isSpace) return false;
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

// score: 290
// function checkIsValidCopy(original, copy) {
//     // generar la regex
//     let regex = "^";
//     const orden = "#+:. ";
//     for (const char of original) {
//         let pos = "";
//         pos += (char);
//         pos += (char.toLowerCase());

//         let ind = orden.indexOf(char);
//         // convertir -1 a 0 sin modificar el resto
//         ind = ind + 1;
//         ind = ind - !!ind;

//         const tmp = orden.slice(ind);
//         pos += tmp;

//         regex += `[${pos}]`;
//     }
//     regex += "$";

//     // comprobar la regex
//     const reg = new RegExp(regex);
//     return reg.test(copy);
// }

module.exports = checkIsValidCopy;

console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'));  // true
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')); // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')); // false (hay un # donde no debería)