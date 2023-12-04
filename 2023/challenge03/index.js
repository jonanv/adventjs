// score: 270
// function findNaughtyStep(original, modified) {
//     const [lessWords, mostWords] = 
//         [original, modified].sort((a, b) => a.length - b.length);
//     return [...mostWords].find((x, i) => lessWords[i] != x) ?? '';
// }

// score: 360
// function findNaughtyStep(original, modified) {
//     const limit = Math.max(original.length, modified.length);
//     for (let i = 0; i < limit; i++) {
//         if (original[i] !== modified[i])
//             return original.length > modified.length 
//                 ? original[i] 
//                 : modified[i];
//     }
//     return '';
// }

// score: 370
function findNaughtyStep(original, modified) {
    const oLength = original.length
    const mLength = modified.length
    const biggerString = oLength > mLength
        ? original : modified
    return [...biggerString].find((_, i) => original[i] !== modified[i]) ?? ''
}

module.exports = findNaughtyStep;

const original = 'abcd';
const modified = 'abcde';
let naughtyStep = findNaughtyStep(original, modified);
console.log(naughtyStep);