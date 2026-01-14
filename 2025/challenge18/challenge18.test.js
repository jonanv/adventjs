const hasFourInARow = require(".");

describe('Reto #18: 🎄 Luces en línea con diagonales', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof hasFourInARow([
                ['R', '.', '.', '.'],
                ['.', 'R', '.', '.'],
                ['.', '.', 'R', '.'],
                ['.', '.', '.', 'R']
            ])
        ).toStrictEqual("boolean");
    });
    
    test('Test #2 - hasFourInARow([["R", ".", ".", "."],[".", "R", ".", "."],[".", ".", "R", "."],[".", ".", ".", "R"]])', () => {
        expect(
            hasFourInARow([
                ['R', '.', '.', '.'],
                ['.', 'R', '.', '.'],
                ['.', '.', 'R', '.'],
                ['.', '.', '.', 'R']
            ])
        ).toStrictEqual(true);
    });

    test('Test #3 - hasFourInARow([[".", ".", ".", "G"],[".", ".", "G", "."],[".", "G", ".", "."],["G", ".", ".", "."]])', () => {
        expect(
            hasFourInARow([
                ['.', '.', '.', 'G'],
                ['.', '.', 'G', '.'],
                ['.', 'G', '.', '.'],
                ['G', '.', '.', '.']
            ])
        ).toStrictEqual(true);
    });

    test('Test #4 - hasFourInARow([["R", "R", "R", "R"],["G", "G", ".", "."],[".", ".", ".", "."],[".", ".", ".", "."]])', () => {
        expect(
            hasFourInARow([
                ['R', 'R', 'R', 'R'],
                ['G', 'G', '.', '.'],
                ['.', '.', '.', '.'],
                ['.', '.', '.', '.']
            ])
        ).toStrictEqual(true);
    });

    test('Test #5 - hasFourInARow([["R", "G", "R"],["G", "R", "G"],["G", "R", "G"]])', () => {
        expect(
            hasFourInARow([
                ['R', 'G', 'R'],
                ['G', 'R', 'G'],
                ['G', 'R', 'G']
            ])
        ).toStrictEqual(false);
    });

    test('Test #6 - hasFourInARow([[".", "G", "."],[".", "G", "."],[".", "G", "."],[".", "G", "."]])', () => {
        expect(
            hasFourInARow([
                ['.', 'G', '.'],
                ['.', 'G', '.'],
                ['.', 'G', '.'],
                ['.', 'G', '.']
            ])
        ).toStrictEqual(true);
    });

    test('Test #10 - hasFourInARow([[".", ".", ".", ".", "."],[".", "R", ".", ".", "."],[".", ".", "R", ".", "."],[".", ".", ".", "R", "."],[".", ".", ".", ".", "R"]])', () => {
        expect(
            hasFourInARow([
                ['.', '.', '.', '.', '.'],
                ['.', 'R', '.', '.', '.'],
                ['.', '.', 'R', '.', '.'],
                ['.', '.', '.', 'R', '.'],
                ['.', '.', '.', '.', 'R']
            ])
        ).toStrictEqual(true);
    });

    test('Test #11 - hasFourInARow([["G", ".", "."],[".", "G", "."],[".", ".", "G"]])', () => {
        expect(
            hasFourInARow([
                ['G', '.', '.'],
                ['.', 'G', '.'],
                ['.', '.', 'G']
            ])
        ).toStrictEqual(false);
    });
});