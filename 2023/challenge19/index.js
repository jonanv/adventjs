// score: 160
function revealSabotage(store) {
    let prevRow;
    let nextRow;
    for (const [i, row] of store.entries()) {
        nextRow = store[i + 1];
        for (const [b, cell] of row.entries()) {
            if (cell != '*') {
                const calc = +(prevRow?.[b - 1] == '*')
                    + +(prevRow?.[b] == '*')
                    + +(prevRow?.[b + 1] == '*')
                    + +(row?.[b - 1] == '*')
                    + +(row?.[b + 1] == '*')
                    + +(nextRow?.[b - 1] == '*')
                    + +(nextRow?.[b] == '*')
                    + +(nextRow?.[b + 1] == '*');
                row[b] = calc > 0 ? calc.toString() : ' ';
            }
        }
        prevRow = row;
    }
    return store;
}

module.exports = revealSabotage;

const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
];

console.log(revealSabotage(store));
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/

// 00  01  02
// 10      12
// 20  21  22