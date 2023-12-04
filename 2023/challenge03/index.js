// score: 270
function findNaughtyStep(original, modified) {
    const [lessWords, mostWords] = 
        [original, modified].sort((a, b) => a.length - b.length);
    return [...mostWords].find((x, i) => lessWords[i] != x) ?? "";
}

module.exports = findNaughtyStep;

const original = 'abcd';
const modified = 'abcde';
let naughtyStep = findNaughtyStep(original, modified);
console.log(naughtyStep);