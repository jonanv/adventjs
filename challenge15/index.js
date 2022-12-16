// score: 200
// function decorateTree(base) {
//     let tree = [base.split(" ")];
//     const dict = {
//         "PP": "P",
//         "BB": "B",
//         "RR": "R",
//         "BP": "R",
//         "PB": "R",
//         "BR": "P",
//         "RB": "P",
//         "PR": "B",
//         "RP": "B"
//     };
//     tree[0].slice(1).forEach(() => {
//         let row = [];
//         tree[0].slice(1).forEach((_, j) => {
//             row.push(dict[tree[0][j] + tree[0][j + 1]]);
//         })
//         tree.unshift(row);
//     })
//     return tree.map(row => row.join(" "));
// }

// score: 300
// function decorateTree(base) {
//     const splitedBase = base.split(' ');
//     const decorator = {
//         BB: 'B',
//         RR: 'R',
//         PP: 'P',
//         PR: 'B',
//         RP: 'B',
//         RB: 'P',
//         BR: 'P',
//         PB: 'R',
//         BP: 'R',
//     };
//     const tree = [];
//     splitedBase.slice(0, -1).reduce((accumulator, _) => {
//         accumulator = accumulator.slice(0, -1).map((value, index) =>
//             decorator[accumulator[index] + accumulator[index + 1]]
//         );
//         tree.unshift(accumulator.join(' '));
//         return accumulator;
//     }, splitedBase);
//     return [...tree, base];
// }

// score: 300
function decorateTree(base) {
    const decorations = {
        PP: 'P',
        BP: 'R',
        RP: 'B',
        BR: 'P',
        PR: 'B',
        RR: 'R',
        RB: 'P',
        PB: 'R',
        BB: 'B',
    }
    let splitBase = base.split(' ');
    let tree = [];
    splitBase.slice(0,-1)
        .reduce((accumulator, value) => {
            accumulator = accumulator
                            .slice(0,-1)
                            .map((decorator, index) => {
                return decorations[accumulator[index] + accumulator[index + 1]];
            });
            tree.push(accumulator.join(' '));
            return accumulator;
        }, splitBase);
    return [base, ...tree].reverse();
}

module.exports = decorateTree;

console.log(decorateTree('B P R P'));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree('B B'));
// [
// 'B',
// 'B B'
// ]