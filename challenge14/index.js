// score: 40
// function getOptimalPath(path) {
//     const helper = (path, i, j) => {
//         if (path.length === i) return 0;
//         return path[i][j] + Math.min(
//             helper(path, i + 1, j),
//             helper(path, i + 1, j + 1)
//         );
//     }
//     const result = helper(path, 0, 0);
//     return result;
// }

// score: 260
// function getOptimalPath(path) {
//     const p = path.slice();
//     for (let i = p.length - 2; i >= 0; i--) {
//         p[i].forEach((_, j) => {
//             p[i][j] += Math.min(p[i + 1][j], p[i + 1][j + 1]);
//         });
//     }
//     return p[0][0];
// }

// 1 - invertimos el arreglo
// 2 - tomando como arreglo inicial la primera
//     fila del arreglo invertido sumamos hacia abajo
// 3 - en cada iteración obtendremos un arreglo con los 
//     valores mínimos del camino acumulado
// 4 - el resultado final sería el elemento 0 del
//     arreglo obtenido en la última iteración

// score: 300
// function getOptimalPath(path) {
//     const reversed = path.reverse();
//     console.log(reversed[0]);
//     return reversed
//         .slice(1)
//         .reduce((list, way = []) => {
//             list = way.map((num, i) => Math.min(list[i], list[i + 1]) + num);
//             return list;
//         }, reversed[0])[0];
// }

// score: 400
function getOptimalPath(path) {
    const res = path.reduceRight((previous, current) => {
        return current.map((value, index) => {
            return value + Math.min(previous[index], previous[index + 1]);
        });
    });
    return res[0];
}

// score: 400 sin returns
// function getOptimalPath(path) {
//     return path
//         .reduceRight((acc, curr) => curr
//             .map((num, i) => num + Math.min(acc[i], acc[i + 1])))[0]
// }

module.exports = getOptimalPath;

console.log(getOptimalPath([[0], [2, 3]])) // 2
// 0 -> 2

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])) // 5
// 0 -> 4 -> 1
//     [0], 
//    [3, 4], 
//   [9, 8, 1]

console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8
// 1 -> 1 -> 5 -> 1
//     [1],
//    [1, 5],
//   [7, 5, 8],
//  [9, 4, 1, 3]