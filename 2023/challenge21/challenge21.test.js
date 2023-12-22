const findBalancedSegment = require("./index");

test('Test #1 - Retorna un array', () => {
    expect(
        Array.isArray(
            findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
        )
    ).toStrictEqual(true);
});

test('Test #2 - findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])', () => {
    expect(
        findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
    ).toStrictEqual(
        [
            2,
            5
        ]
    );
});

test('Test #3 - findBalancedSegment([1, 1, 0])', () => {
    expect(
        findBalancedSegment([1, 1, 0])
    ).toStrictEqual(
        [
            1,
            2
        ]
    );
});

test('Test #4 - findBalancedSegment([1, 1, 1])', () => {
    expect(
        findBalancedSegment([1, 1, 1])
    ).toStrictEqual(
        []
    );
});

test('Test #5 - findBalancedSegment([1, 0, 1])', () => {
    expect(
        findBalancedSegment([1, 0, 1])
    ).toStrictEqual(
        [
            0,
            1
        ]
    );
});

test('Test #6 - findBalancedSegment([1, 0, 1, 0])', () => {
    expect(
        findBalancedSegment([1, 0, 1, 0])
    ).toStrictEqual(
        [
            0,
            3
        ]
    );
});

test('Test #7 - findBalancedSegment([1, 1, 0, 1, 0, 1])', () => {
    expect(
        findBalancedSegment([1, 1, 0, 1, 0, 1])
    ).toStrictEqual(
        [
            1,
            4
        ]
    );
});

test('Test #8 - findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])', () => {
    expect(
        findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])
    ).toStrictEqual(
        [
            0,
            7
        ]
    );
});

test('Test #9 - findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])', () => {
    expect(
        findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])
    ).toStrictEqual(
        [
            5,
            10
        ]
    );
});