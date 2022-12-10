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

// score: 360
function checkPart(part) {
    const middle = part.length / 2;
    return [...part.slice(0, middle)].every((currentLeftLetter, index) => {
        const nextLeftLetter = part[index + 1];
        const currentRightLetter = part[part.length - index - 1];
        const nextRightLetter = part[part.length - index - 2];

        return (
            currentLeftLetter === currentRightLetter ||
            currentLeftLetter === nextRightLetter ||
            nextLeftLetter === currentRightLetter
        );
    });
}

// score: 300 Excelente solución some y every
// function checkPart(part) {
//     const arrayPart = part.split('');
//     const isPalindrome = arrayPart.some((value, index) => {
//         const copy = [...arrayPart];
//         copy.splice(index, 1);
//         const copyR = [...copy].reverse();
//         return copy.every((element, index) => element === copyR[index]);
//     });
//     return isPalindrome;
// }

// score: 220 Mia
function checkPart(part) {
    if ([...part].reverse().join('') === part) {
        return true;
    } else {
        return [...part].some((letter, index, array) => { // Se utiliza el método some que comprueba si al menos un elemento del array cumple con la condición y termina
            let newArray = array.filter((value, i) => i != index); // Se utliza filter para devolver el elemento diferente a la posicion actual
            return newArray.join('') === newArray.reverse().join(''); // condicion del some
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

