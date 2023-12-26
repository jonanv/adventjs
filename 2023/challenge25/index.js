// score: 160
// function travelDistance(map) {
//     const pos = {}
//     let x = 0
//     let distance = 0

//     for (let line of map.split('\n')) {
//         for (let i of ["S", 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
//             line.includes(i) ? pos[i] = [x, line.indexOf(i)] : null
//         }
//         x++
//     }

//     pos[0] = pos["S"]

//     for (let i = 0; i < Object.keys(pos).length - 2; i++) {
//         distance += Math.abs(pos[i][0] - pos[i + 1][0]) +
//             Math.abs(pos[i][1] - pos[i + 1][1])
//     }

//     return distance
// }

// score: 290
function travelDistance(map) {
    const roadmapArr = map.split('\n')
    const roadmap = roadmapArr.join('')
    const cols = roadmapArr[0].length
    const santaPos = roadmap.indexOf('S')

    let gift = 1
    let distance = 0
    let santaCol = santaPos % cols
    let santaRow = (santaPos / cols) | 0

    const numbers = roadmap.match(/\d/g)

    const rowValues = [0, 0]
    const colValues = [0, 0]

    for (const _number of numbers) {
        const giftPos = roadmap.indexOf(`${gift}`)
        const giftCol = giftPos % cols
        const giftRow = (giftPos / cols) | 0

        const row = santaRow - giftRow
        const col = santaCol - giftCol

        rowValues[0] = row
        rowValues[1] = -row
        colValues[0] = col
        colValues[1] = -col

        distance += rowValues[+(row < 0)] + colValues[+(col < 0)]

        santaCol = giftCol
        santaRow = giftRow

        gift++
    }

    return distance
}

module.exports = travelDistance;

const map = `.....1....
..S.......
..........
....3.....
......2...
`

console.log(travelDistance(map)); // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

console.log(travelDistance(`..S.1...`)); // -> 2 km