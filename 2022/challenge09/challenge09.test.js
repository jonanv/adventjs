const countTime = require('./index.js');

test('Test #01 - return type number', () => {
    expect(
        typeof(countTime([0, 1, 1, 0, 1]))
    ).toStrictEqual('number');
});

test('Test #02 - countTime([0, 1, 1, 0, 1])', () => {
    expect(
        countTime([0, 1, 1, 0, 1])
    ).toStrictEqual(7);
});

test('Test #03 - countTime([0, 0, 0, 1])', () => {
    expect(
        countTime([0, 0, 0, 1])
    ).toStrictEqual(21);
});

test('Test #04 - countTime([0, 0, 1, 0, 0])', () => {
    expect(
        countTime([0, 0, 1, 0, 0])
    ).toStrictEqual(28);
});

test('Test #05 - countTime([1, 0, 0, 1, 0, 0])', () => {
    expect(
        countTime([1, 0, 0, 1, 0, 0])
    ).toStrictEqual(14);
});

test('Test #06 - countTime([1, 1, 0, 0, 0, 0])', () => {
    expect(
        countTime([1, 1, 0, 0, 0, 0])
    ).toStrictEqual(28);
});

test('Test #07 - countTime([1, 1, 1])', () => {
    expect(
        countTime([1, 1, 1])
    ).toStrictEqual(0);
});

test('Test #08 - countTime([0, 0, 0, 0, 0, 0, 1, 0])', () => {
    expect(
        countTime([0, 0, 0, 0, 0, 0, 1, 0])
    ).toStrictEqual(49);
});