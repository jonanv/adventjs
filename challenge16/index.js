// score: 200
// function fixLetter(letter) {
//     return letter
//         // ✓ Las preguntas sólo deben terminar con un signo de interrogación
//         .replace(/\?+/g, "?")
//         .replace(/\!+/g, "!")
//         // ✓ Quitar espacios antes de coma o punto
//         .replace(/(\s+([,.?!]))/g, (m, $1, $2) => $2)
//         // ✓ Dejar un espacio después de cada coma
//         .replace(/(^|[.!?]+)([a-zA-Z])/g, (m, $1, $2) => `${$1} ${$2}`)
//         // ✓ La primera letra de cada oración debe estar en mayúscula
//         .replace(/(^|[.!?]\s+)([a-z])/g, (m, $1, $2) => $1 + $2.toUpperCase())
//         // ✓ Eliminar múltiples espacios en blanco y dejar sólo uno
//         .replace(/\s+/g, " ")
//         // ✓ Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
//         .replace(/(santa claus)/gi, 'Santa Claus')
//         // ✓ Eliminar espacios al inicio y al final
//         .trim()
//         .replace(/(^[a-z])/g, (m, $1) => $1.toUpperCase())
//         // ✓ Poner un punto al final de la frase si no tiene puntuación
//         .replace(/([A-z])$/, (m, p) => `${p}.`)
// }

// score: 300
function fixLetter(letter) {
    return letter
        // Remove spaces at the beginning and end of the phrase
        .trim()
        // Remove multiple spaces and leave only one
        .replace(/\s+/g, ' ')
        // Remove spaces before comma or point
        .replace(/\s+([?,.])/g, '$1')
        // Leave a space after each comma and point
        .replace(/([.,])\s+/g, '$1 ')
        // Questions must only end with a question mark
        .replace(/\?+/g, '?')
        // The first letter of each sentence must be capitalized
        .replace(/^([a-z])/i, p => p.toUpperCase())
        .replace(/([?.!]\s)([a-z])/gi, (_, p1, p2) => `${p1}${p2.toUpperCase()}`)
        // Put the word "Santa Claus" in uppercase if it appears in the letter
        .replace(/santa claus/gi, 'Santa Claus')
        // Put a point at the end of the sentence if it does not have punctuation
        .replace(/([a-z])$/i, '$1.')
}

// score: 200
// function fixLetter(letter) {
//     return letter.trim()
//         .replaceAll('santa', 'Santa')
//         .replaceAll('claus', 'Claus')
//         .replace(/ ,/g, ', ')
//         .replace(/ [.]/g, '. ')
//         .replace(/  +/g, ' ')
//         .replace(/[??]+/g, '?')
//         .replace(/(\s+([,.?!]))/g, (m, s1, s2) => s2)
//         .replace(/^([A-z])/, (m, p) => p.toUpperCase())
//         .replace(/([?.!])\s+([A-z])/g, (m, s1, s2) => `${s1} ${s2.toUpperCase()}`)
//         .replace(/([A-z])$/, (m, s) => `${s}.`);
// }

module.exports = fixLetter;

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `));
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"));
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?