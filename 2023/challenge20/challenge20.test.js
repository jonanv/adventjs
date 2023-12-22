const distributeGifts = require("./index");

test('Test #1 - Retorna un array', () => {
    expect(
        Array.isArray(
            distributeGifts([
                [4, 5, 1],
                [6, null, 3],
                [8, null, 4]
            ])
        )
    ).toStrictEqual(true);
});

test('Test #2 - distributeGifts([[4, 5, 1],[6, null, 3],[8, null, 4]])', () => {
    expect(
        distributeGifts([
            [4, 5, 1],
            [6, null, 3],
            [8, null, 4]
        ])
    ).toStrictEqual(
        [
            [5, 3, 3],
            [6, 5, 3],
            [7, 6, 4]
        ]
    );
});

test('Test #3 - distributeGifts([[2, null],[null, 3]])', () => {
    expect(
        distributeGifts([
            [2, null],
            [null, 3]
        ])
    ).toStrictEqual(
        [
            [2, 3],
            [3, 3]
        ]
    );
});

test('Test #4 - distributeGifts([[2, 1, 1],[3, 4, null]])', () => {
    expect(
        distributeGifts([
            [2, 1, 1],
            [3, 4, null]
        ])
    ).toStrictEqual(
        [
            [2, 2, 1],
            [3, 3, 3]
        ]
    );
});

test('Test #5 - distributeGifts([[null, 5],[3, null]])', () => {
    expect(
        distributeGifts([
            [null, 5],
            [3, null]
        ])
    ).toStrictEqual(
        [
            [4, 5],
            [3, 4]
        ]
    );
});

test('Test #6 - distributeGifts([[1, 2, 3],[4, 5, 6],[7, 8, 9]])', () => {
    expect(
        distributeGifts([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])
    ).toStrictEqual(
        [
            [2, 3, 4],
            [4, 5, 6],
            [6, 7, 8]
        ]
    );
});

test('Test #7 - distributeGifts([[null, 1, null, 1, null],[1, null, 1, null, 1],])', () => {
    expect(
        distributeGifts([
            [null, 1, null, 1, null],
            [1, null, 1, null, 1],
        ])
    ).toStrictEqual(
        [
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ]
    );
});