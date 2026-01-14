const hasFourLights = require(".");

describe('Reto #17: 🎄 El panel de luces navideñas', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof hasFourLights([
                ['.', '.', '.', '.', '.'],
                ['R', 'R', 'R', 'R', '.'],
                ['G', 'G', '.', '.', '.']
            ])
        ).toStrictEqual("boolean");
    });
    
    test('Test #2 - hasFourLights([[".", ".", ".", ".", "."],["R", "R", "R", "R", "."],["G", "G", ".", ".", "."]])', () => {
        expect(
            hasFourLights([
                ['.', '.', '.', '.', '.'],
                ['R', 'R', 'R', 'R', '.'],
                ['G', 'G', '.', '.', '.']
            ])
        ).toStrictEqual(true);
    });

    test('Test #3 - hasFourLights([[".", "G", ".", "."],[".", "G", ".", "."],[".", "G", ".", "."],[".", "G", ".", "."]])', () => {
        expect(
            hasFourLights([
                ['.', 'G', '.', '.'],
                ['.', 'G', '.', '.'],
                ['.', 'G', '.', '.'],
                ['.', 'G', '.', '.']
            ])
        ).toStrictEqual(true);
    });

    test('Test #4 - hasFourLights([["R", "G", "R"],["G", "R", "G"],["G", "R", "G"]])', () => {
        expect(
            hasFourLights([
                ['R', 'G', 'R'],
                ['G', 'R', 'G'],
                ['G', 'R', 'G']
            ])
        ).toStrictEqual(false);
    });

    test('Test #5 - hasFourLights([["R", "R", "R", "."],[".", ".", ".", "."]])', () => {
        expect(
            hasFourLights([
                ['R', 'R', 'R', '.'],
                ['.', '.', '.', '.']
            ])
        ).toStrictEqual(false);
    });

    test('Test #6 - hasFourLights([[".", ".", "R", "R", "R", "R"],[".", ".", ".", ".", ".", "."]])', () => {
        expect(
            hasFourLights([
                ['.', '.', 'R', 'R', 'R', 'R'],
                ['.', '.', '.', '.', '.', '.']
            ])
        ).toStrictEqual(true);
    });

    test('Test #7 - hasFourLights([[".", ".", ".", "."],[".", ".", ".", "."]])', () => {
        expect(
            hasFourLights([
                ['.', '.', '.', '.'],
                ['.', '.', '.', '.']
            ])
        ).toStrictEqual(false);
    });

    test('Test #8 - hasFourLights([["G", "G", "G", "G", "G"]])', () => {
        expect(
            hasFourLights([
                ['G', 'G', 'G', 'G', 'G']
            ])
        ).toStrictEqual(true);
    });

    test('Test #12 - hasFourLights([["R", ".", "."],["R", ".", "."],["R", ".", "."],["R", ".", "."]])', () => {
        expect(
            hasFourLights([
                ['R', '.', '.'],
                ['R', '.', '.'],
                ['R', '.', '.'],
                ['R', '.', '.']
            ])
        ).toStrictEqual(true);
    });

    test('Test #13 - hasFourLights([["R", "G", "R", "G"],["G", "R", "G", "R"],["R", "G", "R", "G"],["G", "R", "G", "R"]])', () => {
        expect(
            hasFourLights([
                ['R', 'G', 'R', 'G'],
                ['G', 'R', 'G', 'R'],
                ['R', 'G', 'R', 'G'],
                ['G', 'R', 'G', 'R']
            ])
        ).toStrictEqual(false);
    });
});