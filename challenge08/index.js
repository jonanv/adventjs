// // score: 300
// function checkPart(part) {
//     return [...part].some((item, index) => {
//         const str = part.substring(0, index) + part.substring(index + 1);
//         return str === [...str].reverse().join('')
//     })
// }

// // score: 200
// function checkPart(part) {
//     return [...part].some((x, i, arr) => {
//         let w = arr.filter((_, y) => y != i)
//         return w.join("") == w.reverse().join("")
//     })
// }

// // score: 360 - No funciona con palabras como rdadar -> radar
// function checkPart(part) {
//     let array = [...part].slice(1);
//     let reverse = [...part].reverse();
//     let x = array.join("") == array.reverse().join('');
//     let y = [...part].reduce((x, y, i) => x + (reverse[i] != y), 0);
//     return x || y <= 2;
// }

// score: 220
function checkPart(part) {
    if ([...part].reverse().join('') === part) {
        return true;
    } else {
        return [...part].some((letter, index, array) => {
            let newArray = array.filter((value, i) => i != index);
            return newArray.join('') === newArray.reverse().join('');
        });
    }
}

module.exports = checkPart;

console.log(checkPart("uwu")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter

console.log(checkPart("rdadar")); // true
// "rdadar" puede ser un palíndromo después de eliminar la primera "d"
// ya que "radar" es un palíndromo

