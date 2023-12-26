// score: 25
function getStaircasePaths(steps, maxJump) {
    const paths = []
    const path = []
    const calculatePaths = (steps, maxJump, path) => {
        if (steps === 0) {
            paths.push(path)
            return
        }

        for (let i = 1; i <= maxJump && i <= steps; i++) {
            calculatePaths(steps - i, maxJump, [...path, i])
        }
    }

    calculatePaths(steps, maxJump, path)

    return paths
}

module.exports = getStaircasePaths;

getStaircasePaths(2, 1) // [[1, 1]]
getStaircasePaths(3, 3) // [[1, 1, 1], [1, 2], [2, 1], [3]]
getStaircasePaths(5, 1) // [[1, 1, 1, 1, 1]]
getStaircasePaths(5, 2)
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/