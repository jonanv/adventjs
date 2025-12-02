const filterGifts = require('./index.js');

describe('Reto #1: 🎁 Filtrar los regalos defectuosos', () => {
    test('Test #01 - Return a array', () => {
        expect(
            Array.isArray(
                filterGifts(['car', 'doll#arm', 'ball', '#train'])
            )
        ).toStrictEqual(true);
    });
    
    test('Test #02 - filterGifts(["car", "doll#arm", "ball", "#train"])', () => {
        expect(
            filterGifts(['car', 'doll#arm', 'ball', '#train'])
        ).toStrictEqual(
            [
                "car",
                "ball"
            ]
        );
    });
    
    test('Test #03 - filterGifts(["#broken", "#rusty"])', () => {
        expect(
            filterGifts(['#broken', '#rusty'])
        ).toStrictEqual([]);
    });

    test('Test #04 - filterGifts([])', () => {
        expect(
            filterGifts([])
        ).toStrictEqual([]);
    });

    test('Test #05 - filterGifts(["game", "poster", "sticker#bad", "console"])', () => {
        expect(
            filterGifts(['game', 'poster', 'sticker#bad', 'console'])
        ).toStrictEqual(
            [
                "game",
                "poster",
                "console"
            ]
        );
    });

    test('Test #06 - filterGifts(["#bad", "car", "#oops", "ball"])', () => {
        expect(
            filterGifts(['#bad', 'car', '#oops', 'ball'])
        ).toStrictEqual(
            [
                "car",
                "ball"
            ]
        );
    });

    test('Test #10 - filterGifts(["toy", "toy#bad", "ball", "#car"])', () => {
        expect(
            filterGifts(['toy', 'toy#bad', 'ball', '#car'])
        ).toStrictEqual(
            [
                "toy",
                "ball"
            ]
        );
    });

    test('Test #11 - filterGifts(["puzzle", "#robot", "puzzle", "figure#x"])', () => {
        expect(
            filterGifts(['puzzle', '#robot', 'puzzle', 'figure#x'])
        ).toStrictEqual(
            [
                "puzzle",
                "puzzle"
            ]
        );
    });
});
