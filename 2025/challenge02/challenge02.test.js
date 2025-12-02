const manufactureGifts = require(".");

describe('Reto #2: 🏭 Fabrica los juguetes', () => {
    test('Test #01 - Return type', () => {
        expect(
            Array.isArray(
                manufactureGifts([{ toy: 'car', quantity: 3 }, { toy: 'doll', quantity: 1 }, { toy: 'ball', quantity: 2 }])
            )
        ).toStrictEqual(true);
    });

    test('Test #02 - manufactureGifts([{ toy: "car", quantity: 3 }, { toy: "doll", quantity: 1 }, { toy: "ball", quantity: 2 }])', () => {
        expect(
            manufactureGifts([{ toy: 'car', quantity: 3 }, { toy: 'doll', quantity: 1 }, { toy: 'ball', quantity: 2 }])
        ).toStrictEqual(
            [
                "car",
                "car",
                "car",
                "doll",
                "ball",
                "ball"
            ]
        );
    });
    
    test('Test #03 - manufactureGifts([{ toy: "train", quantity: 0 }, { toy: "bear", quantity: -2 }, { toy: "puzzle", quantity: 1 }])', () => {
        expect(
            manufactureGifts([{ toy: 'train', quantity: 0 }, { toy: 'bear', quantity: -2 }, { toy: 'puzzle', quantity: 1 }])
        ).toStrictEqual(
            [
                "puzzle"
            ]
        );
    });

    test('Test #04 - manufactureGifts([])', () => {
        expect(
            manufactureGifts([])
        ).toStrictEqual([]);
    });

    test('Test #05 - manufactureGifts([{ toy: "car", quantity: 1 }, { toy: "doll", quantity: 2 }, { toy: "ball", quantity: 0 }, { toy: "car", quantity: 3 }])', () => {
        expect(
            manufactureGifts([{ toy: 'car', quantity: 1 }, { toy: 'doll', quantity: 2 }, { toy: 'ball', quantity: 0 }, { toy: 'car', quantity: 3 }])
        ).toStrictEqual(
            [
                "car",
                "doll",
                "doll",
                "car",
                "car",
                "car"
            ]
        );
    });

    test('Test #06 - manufactureGifts([{ toy: "robot", quantity: 2 }, { toy: "drone", quantity: "3" }, { toy: "ball", quantity: 1 }])', () => {
        expect(
            manufactureGifts([{ toy: 'robot', quantity: 2 }, { toy: 'drone', quantity: '3' }, { toy: 'ball', quantity: 1 }])
        ).toStrictEqual(
            [
                "robot",
                "robot",
                "ball"
            ]
        );
    });

    test('Test #10 - manufactureGifts([{ toy: "console", quantity: 2 }, { toy: "game", quantity: 3 }])', () => {
        expect(
            manufactureGifts([{ toy: 'console', quantity: 2 }, { toy: 'game', quantity: 3 }])
        ).toStrictEqual(
            [
                "console",
                "console",
                "game",
                "game",
                "game"
            ]
        );
    });

    test('Test #11 - manufactureGifts([{ toy: "keyboard", quantity: 1 }, { toy: "mouse", quantity: 1 }, { toy: "pad", quantity: 1 }])', () => {
        expect(
            manufactureGifts([{ toy: 'keyboard', quantity: 1 }, { toy: 'mouse', quantity: 1 }, { toy: 'pad', quantity: 1 }])
        ).toStrictEqual(
            [
                "keyboard",
                "mouse",
                "pad"
            ]
        );
    });
});