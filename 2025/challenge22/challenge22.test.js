const canEscape = require(".");

describe('Reto #22: 🎄 El laberinto del trineo', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof canEscape([['S', '.', '#', '.'], ['#', '.', '#', '.'], ['.', '.', '.', '.'], ['#', '#', '#', 'E']])
        ).toStrictEqual("boolean");
    });
    
    test('Test #2 - canEscape([["S", ".", "#", "."], ["#", ".", "#", "."], [".", ".", ".", "."], ["#", "#", "#", "E"]])', () => {
        expect(
            canEscape([['S', '.', '#', '.'], ['#', '.', '#', '.'], ['.', '.', '.', '.'], ['#', '#', '#', 'E']])
        ).toStrictEqual(true);
    });

    test('Test #3 - canEscape([["S", "#", "#"], [".", "#", "."], [".", "#", "E"]])', () => {
        expect(
            canEscape([['S', '#', '#'], ['.', '#', '.'], ['.', '#', 'E']])
        ).toStrictEqual(false);
    });

    test('Test #4 - canEscape([["S", "E"]])', () => {
        expect(
            canEscape([['S', 'E']])
        ).toStrictEqual(true);
    });

    test('Test #5 - canEscape([["S", "#", "E"]])', () => {
        expect(
            canEscape([['S', '#', 'E']])
        ).toStrictEqual(false);
    });

    test('Test #6 - canEscape([["S", ".", "."], ["#", "#", "."], ["E", ".", "."]])', () => {
        expect(
            canEscape([['S', '.', '.'], ['#', '#', '.'], ['E', '.', '.']])
        ).toStrictEqual(true);
    });

    test('Test #7 - canEscape([["S", ".", "."], [".", ".", "."], [".", ".", "E"]])', () => {
        expect(
            canEscape([['S', '.', '.'], ['.', '.', '.'], ['.', '.', 'E']])
        ).toStrictEqual(true);
    });

    test('Test #8 - canEscape([["S", ".", ".", ".", "."], ["#", "#", "#", "#", "E"]])', () => {
        expect(
            canEscape([['S', '.', '.', '.', '.'], ['#', '#', '#', '#', 'E']])
        ).toStrictEqual(true);
    });

    test('Test #11 - canEscape([["S", ".", "."], ["#", "#", "."], [".", ".", "."], [".", "#", "#"], [".", ".", "E"]])', () => {
        expect(
            canEscape([['S', '.', '.'], ['#', '#', '.'], ['.', '.', '.'], ['.', '#', '#'], ['.', '.', 'E']])
        ).toStrictEqual(true);
    });

    test('Test #12 - canEscape([["S", ".", "#"], ["#", "#", "#"], [".", ".", "E"]])', () => {
        expect(
            canEscape([['S', '.', '#'], ['#', '#', '#'], ['.', '.', 'E']])
        ).toStrictEqual(false);
    });
    
});