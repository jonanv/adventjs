// 170
function fitsInOneBox(boxes) {
    return boxes
        .sort((a, b) => (a.l + a.w + a.h) - (b.l + b.w + b.h))
        .every(({ l: large, w: width, h: height }, index) => {
            if (index === 0) return true;
            const { l: largeCurrent, w: widthCurrent, h: heightCurrent } = boxes[index - 1];
            return (large > largeCurrent && 
                    width > widthCurrent && 
                    height > heightCurrent);
        });
}

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
];

const isFitsInOneBox = fitsInOneBox(boxes);
console.log(isFitsInOneBox);