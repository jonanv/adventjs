const dropGifts = require(".");

describe('Reto #20: 🎁 El almacén vertical', () => {
    test('Test #1 - return type', () => {
        expect(
            Array.isArray(
                dropGifts([['.', '.', '.'], ['.', '#', '.'], ['#', '#', '.']], [0])
            )
        ).toStrictEqual(true);
    });
    
    test('Test #2 - dropGifts([[".", ".", "."], [".", "#", "."], ["#", "#", "."]], [0])', () => {
        expect(
            dropGifts([['.', '.', '.'], ['.', '#', '.'], ['#', '#', '.']], [0])
        ).toStrictEqual(
            [
                [
                    ".",
                    ".",
                    "."
                ],
                [
                    "#",
                    "#",
                    "."
                ],
                [
                    "#",
                    "#",
                    "."
                ]
            ]
        );
    });

    test('Test #3 - dropGifts([[".", ".", "."], ["#", "#", "."], ["#", "#", "#"]], [0, 2])', () => {
        expect(
            dropGifts([['.', '.', '.'], ['#', '#', '.'], ['#', '#', '#']], [0, 2])
        ).toStrictEqual(
            [
                [
                    "#",
                    ".",
                    "."
                ],
                [
                    "#",
                    "#",
                    "#"
                ],
                [
                    "#",
                    "#",
                    "#"
                ]
            ]
        );
    });

    test('Test #4 - dropGifts([[".", ".", "."], [".", ".", "."], [".", ".", "."]], [0, 1, 2])', () => {
        expect(
            dropGifts([['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']], [0, 1, 2])
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
                    "#",
                    "#",
                    "#"
                ]
            ]
        );
    });

    test('Test #5 - dropGifts([["#", "."], ["#", "."]], [0])', () => {
        expect(
            dropGifts([['#', '.'], ['#', '.']], [0])
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

    test('Test #6 - dropGifts([["."]], [0])', () => {
        expect(
            dropGifts([['.']], [0])
        ).toStrictEqual(
            [
                [
                    "#"
                ]
            ]
        );
    });

    test('Test #7 - dropGifts([[".", "."], [".", "."]], [0, 0])', () => {
        expect(
            dropGifts([['.', '.'], ['.', '.']], [0, 0])
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

    test('Test #10 - dropGifts([[".", "."], [".", "."], [".", "."]], [0, 1, 0, 1])', () => {
        expect(
            dropGifts([['.', '.'], ['.', '.'], ['.', '.']], [0, 1, 0, 1])
        ).toStrictEqual(
            [
                [
                    ".",
                    "."
                ],
                [
                    "#",
                    "#"
                ],
                [
                    "#",
                    "#"
                ]
            ]
        );
    });

    test('Test #11 - dropGifts([["#", "#"], ["#", "#"]], [0, 1])', () => {
        expect(
            dropGifts([['#', '#'], ['#', '#']], [0, 1])
        ).toStrictEqual(
            [
                [
                    "#",
                    "#"
                ],
                [
                    "#",
                    "#"
                ]
            ]
        );
    });
});