// score: 90
// function getIndexsForPalindrome(word) {
//     let res = null
//     for (const a of Array.from({ length: word.length }).keys()) {
//         for (const b of Array.from({ length: word.length }).keys()) {
//             let swapped = [...word]
//             let aux = word[a]
//             swapped[a] = word[b]
//             swapped[b] = aux

//             let left = swapped.slice(0, Math.floor(word.length / 2)).join("")
//             let right = swapped.slice(Math.ceil(word.length / 2)).reverse().join("")

//             res = [
//                 [
//                     null
//                     , [
//                         []
//                         , [a, b]
//                     ][+((a + b) > 0)]
//                 ][+(left == right)]
//                 , res
//             ][+!!res]
//         }
//     }
//     return res
// }

// score: 100
// function getIndexsForPalindrome(word) {
//     const halfLength = Math.floor(word.length / 2);

//     const isPalindrome = [...word].slice(0, halfLength).every((letter, i) => {
//         return letter === word[word.length - (i + 1)];
//     });
//     if (isPalindrome) return [];

//     for (let i = 0; i <= halfLength; i++) {
//         for (let j = 1; j < word.length; j++) {
//             const w = [...word];
//             [w[i], w[j]] = [w[j], w[i]];
//             const isPalindrome = w.slice(0, halfLength).every((letter, i) => {
//                 return letter === w[w.length - (i + 1)];
//             });
//             if (isPalindrome) return [i, j];
//         }
//     }

//     return null;
// }

// score: 130
// function getIndexsForPalindrome(word) {
//     const wordArray = [...word];
//     const wordEntries = wordArray.slice(0, wordArray.length / 2 + 1).entries();

//     if (
//         wordArray
//             .slice(0, wordArray.length / 2)
//             .every((c, i) => c === wordArray[wordArray.length - 1 - i])
//     )
//         return [];

//     for (let [i, c1] of wordEntries) {
//         for (let [j, c2] of wordArray.entries()) {
//             let wordToModify = [...wordArray];

//             wordToModify[i] = c2;
//             wordToModify[j] = c1;

//             if (
//                 wordToModify
//                     .slice(0, wordToModify.length / 2)
//                     .every((c, i) => c === wordToModify[wordToModify.length - 1 - i])
//             ) {
//                 return [i, j];
//             }
//         }
//     }
//     return null;
// }

// score: 180
function getIndexsForPalindrome(word) {
    const index = word.split('').findIndex((letter, i) => letter != word.at(-i - 1))
    const index2 = word.length - 1 - index
    if (index == -1) return []
    for (let i = index + 1; i < index2; i++) {
        const arr = word.split('')
        arr[index] = word.at(i)
        arr[i] = word.at(index)
        if (arr.every((l, i) => l == arr.at(arr.length - 1 - i))) return [index, i]

        arr[index] = word.at(index)
        arr[i] = word.at(index2)
        arr[index2] = word.at(i)
        if (arr.every((l, i) => l == arr.at(arr.length - 1 - i))) return [index + i, index2]
    }
    return null
}

module.exports = getIndexsForPalindrome;

console.log(getIndexsForPalindrome('anna')); // []
console.log(getIndexsForPalindrome('abab')); // [0, 1]
console.log(getIndexsForPalindrome('abac')); // null
console.log(getIndexsForPalindrome('aaaaaaaa')); // []
console.log(getIndexsForPalindrome('aaababa')); // [1, 3]
console.log(getIndexsForPalindrome('caababa')); // null