// score: 150
// function canExit(maze) {
//     let start, end;

//     //To calculate distance to the end
//     let calculateDistance = (node, end) =>
//         Math.sqrt((node.x - end.x) ** 2 + (node.y - end.x) ** 2);
//     //To search neighbors
//     let steps = [
//         [-1, 0], //up
//         [1, 0], // down
//         [0, 1], //right
//         [0, -1], // left
//     ];

//     //Array to graph
//     maze
//         .map((row, y) => {
//             return row.map((value, x) => {
//                 let node = {
//                     x,
//                     y,
//                     value,
//                     neighbors: [],
//                     gScore: 0,
//                     fScore: Infinity,
//                 };
//                 if (value == 'S') start = node;
//                 else if (value == 'E') end = node;
//                 return node;
//             });
//         })
//         .map((row, _, maze) => {
//             row.map((node) => {
//                 steps.forEach((point) => {
//                     if (
//                         node.y + point[0] >= 0 &&
//                         node.y + point[0] <= maze.length - 1 &&
//                         node.x + point[1] >= 0 &&
//                         node.x + point[1] <= maze[0].length - 1
//                     ) {
//                         let neighbor = maze[node.y + point[0]][node.x + point[1]];
//                         if (neighbor) node.neighbors.push(neighbor);
//                     }
//                 });
//             });
//         });

//     // Priority Queue
//     let open = [start];

//     //traverse through nodes
//     while (open.length) {
//         //Sort by fScore
//         let next = open.sort((x, y) => y.fScore - x.fScore).pop();

//         //Go through the neighbors
//         next.neighbors.forEach((neighbor) => {
//             //If its not a wall then we can go through it
//             if (neighbor.value != 'W') {
//                 //New gScore
//                 let newGScore = next.gScore + 1;

//                 //If is less than the old one we set the new ones
//                 if (newGScore < neighbor.gScore || neighbor.gScore == 0) {
//                     //gScore is the steps we took to get there
//                     neighbor.gScore = newGScore;

//                     //fScore is the steps we took plus how much would cost to get to the end if there wasn't walls
//                     //So fScore is an approximation of how far we are from the end
//                     neighbor.fScore = newGScore + calculateDistance(next, end);

//                     //Since is lower, we push it to the priority queue (if it's not there) because now we found a shorter path
//                     if (
//                         !open.find((node) => node.x == neighbor.x && node.y == neighbor.y)
//                     )
//                         open.push(neighbor);
//                 }
//             }
//         });
//     }

//     //If we found the exit then gScore of end would not be zero

//     return !!end.gScore;
// }

// score: 300
// function canExit(maze) {
//     function replace(str) {
//         return str
//             .replace(/[S][\sE]/g, "SS")
//             .replace(/[\sE][S]/g, "SS")
//             .split("");
//     }

//     let x = [];
//     new Array(maze[0].length * maze.length).fill(0).forEach(() => {
//         let check = [...maze];
//         maze.map((horizontal, i) => {
//             maze[i] = replace(horizontal.join(""));
//             let v = maze[0].map((_, i) => replace(maze.map((x) => x[i]).join("")));
//             maze[i] = v.map((x) => x[i]);
//         });
//         check.flat().join("") == maze.flat().join("") && x.push(check);
//     });

//     return !x.flat(2).includes("E");
// }

// score: 600
// function canExit(maze) {
//     const r = ([x, y]) => {
//         if (maze[x][y] == "E") return true;
//         maze[x][y] = "X";
//         return [
//             [x + 1, y],
//             [x - 1, y],
//             [x, y + 1],
//             [x, y - 1],
//         ]
//             .filter(([toX, toY]) => {
//                 const celda = maze[toX] && maze[toX][toY]
//                 return celda && celda != "W" && celda != "X"
//             })
//             .some(r);
//     };

//     const n = maze.flat().join("").indexOf("S");
//     const x = Math.trunc(n / maze[0].length);
//     const y = n % maze[0].length;

//     const result = r([x, y]);

//     return result;
// }

// score: 900
// function canExit(maze) {
//     function replace(str) {
//         return str
//             .replace(/[S][\sE]/g, "SS")
//             .replace(/[\sE][S]/g, "SS")
//             .split("");
//     }

//     let x = [];
//     new Array(maze[0].length * maze.length).fill(0).forEach(() => {
//         let check = [...maze];
//         maze.map((horizontal, i) => {
//             maze[i] = replace(horizontal.join(""));
//             let v = maze[0].map((_, i) => replace(maze.map((x) => x[i]).join("")));
//             maze[i] = v.map((x) => x[i]);
//         });
//         check.flat().join("") == maze.flat().join("") && x.push(check);
//     });

//     return !x.flat(2).includes("E");
// }

// score: 2400
// function canExit(maze) {
//     const r = ([x, y]) => {
//         const val = maze[x][y];
//         maze[x][y] = 'X';
//         return !!(
//             ['E'].includes(val) +
//             [
//                 [x + 1, y],
//                 [x - 1, y],
//                 [x, y + 1],
//                 [x, y - 1]
//             ]
//                 .filter(arr => {
//                     const cell = maze[arr[0]] && maze[arr[0]][arr[1]];
//                     return ['E', ' '].includes(cell);
//                 })
//                 .some(r)
//         );
//     };
//     const n = maze.flat().join('').indexOf('S');
//     const x = parseInt(n / maze[0].length, 10);
//     const y = n % maze[0].length;
//     const result = r([x, y]);
//     return result;
// }

// score: 3000
// function canExit(maze) {
//     const r = ([x, y]) => {
//         const val = maze[x][y];
//         delete maze[x][y];
//         return (
//             ['E'].includes(val) +
//             [
//                 [x + 1, y],
//                 [x - 1, y],
//                 [x, y + 1],
//                 [x, y - 1]
//             ]
//                 .filter((arr) => maze[arr[0]])
//                 .filter(arr => ['E', ' '].includes(maze[arr[0]][arr[1]]))
//                 .some(r)
//         );
//     };
//     const n = maze.flat().join('').indexOf('S');
//     const x = ~~(n / maze[0].length);
//     const y = n % maze[0].length;
//     return !!r([x, y]);
// }

// score: 150
// function canExit(maze) {
//     function canReallyExit(maze, row, col) {
//         if (maze[row][col] === 'E') return true;
//         else if(maze[row][col] !== ' ') return false;

//         maze[row][col] = '.';

//         if (
//             row >= 1 
//             && canReallyExit(maze, row - 1, col)
//         ) return true;
//         else if(
//             row < maze.length - 1 
//             && canReallyExit(maze, row + 1, col)
//         ) return true;

//         else if (
//             col >= 1
//             && canReallyExit(maze, row, col - 1)
//         ) return true;
//         else if (
//             col < maze[row].length - 1 
//             && canReallyExit(maze, row, col + 1)
//         ) return true;
//         else return false;
//     }
//     const startRow = maze.findIndex(
//         columns => columns.find(x => x === 'S')
//     );
//     const startCol = maze[startRow].findIndex(
//         cell => cell === 'S'
//     );
//     maze[startRow][startCol] = ' ';
//     const result = canReallyExit(maze, startRow, startCol);
//     return result;
// }

// score: 1200
function canExit(maze) {
    const wall = Array(maze.length + 2).fill('W');
    maze = [wall, ...maze.map(
        row => ['W', ...row, 'W']
    ), wall];

    const moves = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    function canReallyExit(maze, row, col) {
        return (maze[row][col] === 'E') 
        || (maze[row][col] === ' ')
        && (maze[row][col] = '.')
        && moves.some(([deltaRow, deltaCol]) => 
            canReallyExit(maze, row + deltaRow, col + deltaCol)
        );
    }
    const startRow = maze.findIndex(
        columns => columns.find(x => x === 'S')
    );
    const startCol = maze[startRow].findIndex(
        cell => cell === 'S'
    );
    maze[startRow][startCol] = ' ';
    const result = canReallyExit(maze, startRow, startCol);
    return result;
}

module.exports = canExit;

console.log(
    canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
    ]) // -> true
);
// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

console.log(
    canExit([
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
    ]) // -> false
);
// No hay manera de llegar de [0, 4] a [4, 4]

// [
//     ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
//     ['W', ' ', ' ', 'W', ' ', 'S', 'W'],
//     ['W', ' ', ' ', ' ', ' ', ' ', 'W'],
//     ['W', ' ', ' ', ' ', 'W', ' ', 'W'],
//     ['W', 'W', 'W', ' ', 'W', 'W', 'W'],
//     ['W', ' ', ' ', ' ', ' ', 'E', 'W'],
//     ['W', 'W', 'W', 'W', 'W', 'W', 'W']
// ]