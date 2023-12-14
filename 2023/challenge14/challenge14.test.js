const maxGifts = require("./index");

test('Test #1 - Retorna un número', () => {
    expect(
        typeof(
            maxGifts([1, 2, 3, 1])
        )
    ).toStrictEqual('number');
});

test('Test #2 - maxGifts([1, 2, 3, 1])', () => {
    expect(
        maxGifts([1, 2, 3, 1])
    ).toStrictEqual(4);
});

test('Test #3 - maxGifts([2, 7, 9, 3, 1])', () => {
    expect(
        maxGifts([2, 7, 9, 3, 1])
    ).toStrictEqual(12);
});

test('Test #4 - maxGifts([0, 0, 0, 0, 1])', () => {
    expect(
        maxGifts([0, 0, 0, 0, 1])
    ).toStrictEqual(1);
});

test('Test #5 - maxGifts([100])', () => {
    expect(
        maxGifts([100])
    ).toStrictEqual(100);
});

test('Test #6 - maxGifts([1, 1, 1, 1])', () => {
    expect(
        maxGifts([1, 1, 1, 1])
    ).toStrictEqual(2);
});

test('Test #7 - maxGifts([1, 1, 1])', () => {
    expect(
        maxGifts([1, 1, 1])
    ).toStrictEqual(2);
});

test('Test #8 - maxGifts([3, 4, 5])', () => {
    expect(
        maxGifts([3, 4, 5])
    ).toStrictEqual(8);
});

test('Test #9 - maxGifts([99])', () => {
    expect(
        maxGifts([99])
    ).toStrictEqual(99);
});