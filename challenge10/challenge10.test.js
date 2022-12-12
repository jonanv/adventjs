const checkJump = require('./index.js');

test('Test #01 - return type boolean', () => {
    expect(
        typeof(checkJump([1, 2, 1]))
    ).toStrictEqual('boolean');
});

test('Test #02 - checkJump([1, 2, 1])', () => {
    expect(
        checkJump([1, 2, 1])
    ).toStrictEqual(true);
});

test('Test #03 - checkJump([1, 3, 8, 5, 2])', () => {
    expect(
        checkJump([1, 3, 8, 5, 2])
    ).toStrictEqual(true);
});

test('Test #04 - checkJump([1, 7, 3, 5])', () => {
    expect(
        checkJump([1, 7, 3, 5])
    ).toStrictEqual(false);
});

test('Test #05 - checkJump([1, 2, 3, 2, 1])', () => {
    expect(
        checkJump([1, 2, 3, 2, 1])
    ).toStrictEqual(true);
});

test('Test #06 - checkJump([1, 2, 2, 2, 1])', () => {
    expect(
        checkJump([1, 2, 2, 2, 1])
    ).toStrictEqual(true);
});

test('Test #07 - checkJump([0, 1, 0])', () => {
    expect(
        checkJump([0, 1, 0])
    ).toStrictEqual(true);
});

test('Test #08 - checkJump([2, 2, 2, 2])', () => {
    expect(
        checkJump([2, 2, 2, 2])
    ).toStrictEqual(false);
});

test('Test #09 - checkJump([1, 2, 3])', () => {
    expect(
        checkJump([1, 2, 3])
    ).toStrictEqual(false);
});

test('Test #10 - checkJump([1, 2, 3, 2, 1, 2, 3])', () => {
    expect(
        checkJump([1, 2, 3, 2, 1, 2, 3])
    ).toStrictEqual(false);
});

test('Test #11 - checkJump([1, 1000, 900, 800])', () => {
    expect(
        checkJump([1, 1000, 900, 800])
    ).toStrictEqual(true);
});

test('Test #12 - checkJump([1, 1000, 100, 800])', () => {
    expect(
        checkJump([1, 1000, 100, 800])
    ).toStrictEqual(false);
});

test('Test #13 - checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])', () => {
    expect(
        checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])
    ).toStrictEqual(true);
});

test('Test #14 - checkJump([1, 2, 3, 1, 3, 1])', () => {
    expect(
        checkJump([1, 2, 3, 1, 3, 1])
    ).toStrictEqual(false);
});

test('Test #15 - checkJump([1, 3, 2, 5, 4, 3, 2, 1])', () => {
    expect(
        checkJump([1, 3, 2, 5, 4, 3, 2, 1])
    ).toStrictEqual(false);
});
