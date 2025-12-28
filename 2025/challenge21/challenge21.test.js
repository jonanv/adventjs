const clearGifts = require(".");

describe('Reto #21: 🤖 El robot de limpieza', () => {
    test('Test #1 - return type', () => {
        expect(
            Array.isArray(
                clearGifts(
                    [
                        ['.', '.', '.'],
                        ['.', '.', '.'],
                        ['#', '.', '#']
                    ],
                    [1]
                )
            )
        ).toStrictEqual(true);
    });
    
    test('Test #2 - clearGifts([[".", ".", "."],[".", ".", "."],["#", ".", "#"]], [1])', () => {
        expect(
            clearGifts([['.', '.', '.'],['.', '.', '.'],['#', '.', '#']], [1])
        ).toStrictEqual(
            [
                [
                    ".",
                    ".",
                    "."
                ],
                [
                    ".",
                    ".",
                    "."
                ],
                [
                    ".",
                    ".",
                    "."
                ]
            ]
        );
    });

    test('Test #3 - clearGifts([[".", ".", "#"], ["#", ".", "#"], ["#", ".", "#"]], [0, 1, 2])', () => {
        expect(
            clearGifts([['.', '.', '#'], ['#', '.', '#'], ['#', '.', '#']], [0, 1, 2])
        ).toStrictEqual(
            [
                [
                    ".",
                    ".",
                    "#"
                ],
                [
                    "#",
                    ".",
                    "#"
                ],
                [
                    "#",
                    ".",
                    "#"
                ]
            ]
        );
    });

    test('Test #4 - clearGifts([[".", ".", "."], ["#", "#", "."], ["#", "#", "."]], [2, 2])', () => {
        expect(
            clearGifts([['.', '.', '.'], ['#', '#', '.'], ['#', '#', '.']], [2, 2])
        ).toStrictEqual(
            [
                [
                    ".",
                    ".",
                    "."
                ],
                [
                    ".",
                    ".",
                    "."
                ],
                [
                    ".",
                    ".",
                    "."
                ]
            ]
        );
    });

    test('Test #5 - clearGifts([[".", "."], [".", "."]], [1, 1])', () => {
        expect(
            clearGifts([['.', '.'], ['.', '.']], [1, 1])
        ).toStrictEqual(
            [
                [
                    ".",
                    "#"
                ],
                [
                    ".",
                    "#"
                ]
            ]
        );
    });

    test('Test #6 - clearGifts([["#", "."], ["#", "."]], [0])', () => {
        expect(
            clearGifts([['#', '.'], ['#', '.']], [0])
        ).toStrictEqual(
            [
                [
                    "#",
                    "."
                ],
                [
                    "#",
                    "."
                ]
            ]
        );
    });

    test('Test #9 - clearGifts([["."]], [0])', () => {
        expect(
            clearGifts([['.']], [0])
        ).toStrictEqual(
            [
                [
                    "."
                ]
            ]
        );
    });

    test('Test #10 - clearGifts([[".", "."], ["#", "."]], [0])', () => {
        expect(
            clearGifts([['.', '.'], ['#', '.']], [0])
        ).toStrictEqual(
            [
                [
                    "#",
                    "."
                ],
                [
                    "#",
                    "."
                ]
            ]
        );
    });
    
});