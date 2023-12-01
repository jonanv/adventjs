// score. 400
function sortToys(toys, positions) {
    return toys.sort((a, b) => {
        return positions[toys.indexOf(a)] - positions[toys.indexOf(b)];
    });
}

module.exports = sortToys;

const toys = ['ball', 'doll', 'car', 'puzzle'];
const positions = [2, 3, 1, 0];

console.log(sortToys(toys, positions));
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
const morePositions = [8, 6, 5, 7, 9];

console.log(sortToys(moreToys, morePositions));
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']