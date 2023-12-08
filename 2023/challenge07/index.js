// score: 270
function drawGift(size, symbol) {
    let line = '#';
    let giftTop = [];
    let giftMedium = [];
    let giftButtom = [];
    let top = [];
    let buttom = [];

    if (size <= 1) {
        return line + '\n';
    }

    giftMedium = [line.repeat(size) + symbol.repeat(size - 2) + line];
    giftButtom = [];
    top = [' '.repeat(size - 1) + line.repeat(size)];
    buttom = [line.repeat(size)];

    for (const index of [...Array(size - 2).keys()]) {
        giftTop[index] = ' '.repeat(size - index - 2)
            + line.repeat(1)
            + symbol.repeat(size - 2)
            + line.repeat(1)
            + symbol.repeat(index)
            + line.repeat(1) + '\n';
        
        giftButtom[index] = line.repeat(1)
            + symbol.repeat(size - 2)
            + line.repeat(1)
            + symbol.repeat(index)
            + line.repeat(1) + '\n';
    };
    return top + '\n' 
            + [...giftTop].join('') 
            + [...giftMedium].join('\n') + '\n'
            + [...giftButtom.reverse()].join('')
            + buttom + '\n';
}

// score: 160
// function drawGift(size, symbol) {
//     const endLine = "#\n";
//     if (size <= 1) {
//         return endLine;
//     }
//     const pound = "#";
//     const lineLength = size * 2 - 1;
//     let gift = " ".repeat(lineLength - size) + pound.repeat(size - 1) + endLine;
//     const topFace = symbol.repeat(size - 2);
//     for (let i = 2; i < lineLength; i++) {
//         const isFace = i !== size;
//         const calc = lineLength - size - i + 1
//         const prefix = " ".repeat(Math.max(calc, 0)) + pound;
//         if (isFace) {
//             const sideFace = pound + symbol.repeat(size - 2 - Math.abs(size - i))
//             gift += prefix + topFace + sideFace;
//         } else {
//             const symbols = symbol.repeat(lineLength - size - 1)
//             gift += pound.repeat(size) + symbols;
//         }
//         gift += endLine
//     }
//     gift += pound.repeat(size - 1) + endLine
//     return gift;
// }

// score: 290
// function drawGift(size, symbol) {
//     let bgSize = size - 2;

//     bgSize += +!(bgSize + 1);

//     let response = "";
//     let topCenter = "";
//     let bottomCenter = "";

//     for (const a of [...Array.from({ length: bgSize }).keys()]) {
//         const c = "#"
//             + symbol.repeat(bgSize)
//             + "#" + symbol.repeat(a) + "#";
//         bottomCenter = c + "\n" + bottomCenter;
//         topCenter += " ".repeat(bgSize - a) + c + "\n";
//     }

//     response = " ".repeat(size - 1) + "#".repeat(size) + "\n"
//         + (topCenter
//             + "#".repeat(size) + symbol.repeat(bgSize) + "#" + "\n"
//             + bottomCenter
//             + "#".repeat(size) + "\n").repeat(+!!(size - 1));
//     return response;
// }

module.exports = drawGift;

let result = drawGift(10, '%');
console.log(result);

// drawGift(4, '+');
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

// drawGift(5, '*');
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/