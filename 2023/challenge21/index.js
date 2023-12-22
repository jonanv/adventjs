// score: 130
// function findBalancedSegment(message) {
//     const zeros = [0];
//     const ones = [0];
//     for (const bit of message) {
//         zeros.push(zeros.at(-1) + +(bit === 0));
//         ones.push(ones.at(-1) + +(bit === 1));
//     }
//     console.log(zeros, ones);
//     const response = [];
//     let max = 0;
//     for (let i = 0; i < ones.length; i++) {
//         for (let j = i + 1; j < ones.length; j++) {
//             if (ones[j] - ones[i] === zeros[j] - zeros[i]
//                 && ones[j] - ones[i] > max) {
//                 response[0] = i;
//                 response[1] = j - 1;
//                 max = ones[j] - ones[i];
//             }
//         }
//     }
//     return response;
// }

// score: 230
function findBalancedSegment(message) {
    let actual = [0];
    for (let i = 0; i < message.length; i++) {
        let check_balance = message[i];
        let cont = 1;
        for (let j = i + 1; j < message.length; j++) {
            check_balance += message[j];
            if (++cont / check_balance === 2 && cont > actual[0])
                actual = [cont, i, j];
        }
    }
    return actual.slice(1);
}

module.exports = findBalancedSegment;

findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

// findBalancedSegment([1, 1, 0])
//                      |__|
//                     [1, 2]

// findBalancedSegment([1, 1, 1])
// no hay segmentos equilibrados: []

// findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])
//                      |____________________|
// no hay segmentos equilibrados: [0, 7]