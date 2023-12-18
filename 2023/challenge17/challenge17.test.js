const optimizeIntervals = require("./index");

test('Test #1 - Retorna un array', () => {
    expect(
        Array.isArray(
            optimizeIntervals([[2, 7], [3, 4], [5, 8]])
        )
    ).toStrictEqual(true)
});

test('Test #2 - optimizeIntervals([[2, 7], [3, 4], [5, 8]])', () => {
    expect(
        optimizeIntervals([[2, 7], [3, 4], [5, 8]])
    ).toStrictEqual([
        [
            2,
            8
        ]
    ])
});

test('Test #3 - optimizeIntervals([[3, 4], [5, 8], [2, 7]])', () => {
    expect(
        optimizeIntervals([[3, 4], [5, 8], [2, 7]])
    ).toStrictEqual([
        [
            2,
            8
        ]
    ])
});

test('Test #4 - optimizeIntervals([[1, 3], [2, 6], [8, 10]])', () => {
    expect(
        optimizeIntervals([[1, 3], [2, 6], [8, 10]])
    ).toStrictEqual([
        [
            1,
            6
        ],
        [
            8,
            10
        ]
    ])
});

test('Test #5 - optimizeIntervals([[1, 2], [3, 4], [5, 6]])', () => {
    expect(
        optimizeIntervals([[1, 2], [3, 4], [5, 6]])
    ).toStrictEqual([
        [
            1,
            2
        ],
        [
            3,
            4
        ],
        [
            5,
            6
        ]
    ])
});

test('Test #6 - optimizeIntervals([[5, 7], [6, 8]])', () => {
    expect(
        optimizeIntervals([[5, 7], [6, 8]])
    ).toStrictEqual([
        [
            5,
            8
        ]
    ])
});

test('Test #7 - optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])', () => {
    expect(
        optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])
    ).toStrictEqual([
        [
            1,
            5
        ],
        [
            6,
            10
        ],
        [
            11,
            15
        ],
        [
            16,
            20
        ]
    ])
});

test('Test #8 - optimizeIntervals([[1, 15], [8, 12], [4, 7]])', () => {
    expect(
        optimizeIntervals([[1, 15], [8, 12], [4, 7]])
    ).toStrictEqual([
        [
            1,
            15
        ]
    ])
});