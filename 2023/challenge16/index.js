// score: 190
function transformTree(tree) {
    const If = [false];
    const index = arguments[1] ?? 0;
    const value = tree[index];
    let base;
    let res;
    If[+(value != null)] ?? (
        base = index * 2,
        res = {
            value: value,
            left: transformTree(tree, base + 1),
            right: transformTree(tree, base + 2)
        }
    )
    return res ?? null
}

// score: 90
// function transformTree(tree) {
//     let idx = tree.length - 1;
//     for (let t of tree) {
//         tree[idx] = [{
//             value: tree[idx],
//             left: tree[idx * 2 + 1] ?? null,
//             right: tree[idx * 2 + 2] ?? null
//         }, null][+(tree[idx] == null)]
//         idx--;
//     }
//     return [null, tree[0]][+(tree.length > 0)]
// }

// score: 140
// function transformTree(tree) {
//     function insertInTree(tree, i = 0) {
//         let root = null;
//         if (i < tree.length && tree[i] != null) {
//             root = {
//                 value: tree[i],
//                 left: insertInTree(tree, 2 * i + 1),
//                 right: insertInTree(tree, 2 * i + 2),
//             };
//         }
//         return root;
//     }
//     const newTree = insertInTree(tree);
//     return newTree;
// }

module.exports = transformTree;

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
//                         0  1  2  3   4   5    6
//                         0 -> 1 , 2 ==== (0 * 2) + 1, (0 * 2) + 2
//                         1 -> 3 , 4 ==== (1 * 2) + 1, (1 * 2) + 2
//                         2 -> 5 , 6 ==== (2 * 2) + 1, (2 * 2) + 2
//        3
//      /   \
//     1     0
//    / \     \
//   8  12     1