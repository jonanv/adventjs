// score: 400
// function checkStepNumbers(systemNames, stepNumbers) {
//     return systemNames.reduce((curr, _, index) => {
//         let check = stepNumbers[index] <=
//             stepNumbers[
//             index + 1 + systemNames.slice(index + 1).indexOf(systemNames[index])
//             ];
//         return curr + check;
//     }, 0) == systemNames.length;
// }

// score: 500
// function checkStepNumbers(systemNames, stepNumbers) {
//     return systemNames.every((e, index) => stepNumbers[index] <= stepNumbers[
//         index + systemNames.slice(index + 1).indexOf(e) + 1
//     ])
// }

// score: 280
function checkStepNumbers(systemNames, stepNumbers) {
    const stored = {};
    return systemNames.every((systemName, index) => {
        const previousStepForSystem = stored[systemName];
        const currentStepForSystem = stepNumbers[index];

        if (typeof previousStepForSystem !== undefined
            && previousStepForSystem >= currentStepForSystem) {
            return false;
        }
        stored[systemName] = currentStepForSystem;
        return true;
    });
}

module.exports = checkStepNumbers;

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

console.log(checkStepNumbers(systemNames, stepNumbers)); // => true

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])); // => false

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente