// score: 170 - ahora 109
// function fitsInOneBox(boxes) {
//     return boxes
//         .sort((a, b) => (a.l + a.w + a.h) - (b.l + b.w + b.h)) // Ordena las cajas sumando todos sus lados
//         .every(({ l: large, w: width, h: height }, index) => { // Itera todas la posiciones del arreglo y devuelve true si la condición se cumple en todas de lo contrario devolvera false si encuentra uno que no la cumpla y termina la iteración
//             if (index === 0) return true; // Ignora la primera caja porque no tiene con que comparar
//             const { l: largeCurrent, w: widthCurrent, h: heightCurrent } = boxes[index - 1]; // Caja anterior
//             return (large > largeCurrent &&
//                 width > widthCurrent &&
//                 height > heightCurrent); // Condición de todos los lados, comparar si la anterior es más grande
//         });
// }

// score: 140
// function fitsInOneBox(boxes) {
//     return boxes.sort((a, b) => {
//         return (a.l + a.w + a.h) - (b.l + b.w + b.h)
//     }).every((box, i) => {
//         if (i === 0) return true;
//         const prev = boxes[i - 1]
//         return box.l > prev.l && box.w > prev.w && box.h > prev.h
//     })
// }

// score: 156
function fitsInOneBox(boxes) {
    return boxes.sort((a, b) => {
        return (b.l + b.w + b.h) - (a.l + a.w + a.h)
    }).slice(1).every((box, i) => {
        return box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h
    })
}

module.exports = fitsInOneBox;

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
];

const isFitsInOneBox = fitsInOneBox(boxes);
console.log(isFitsInOneBox);