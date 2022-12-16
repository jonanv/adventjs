const getOptimalPath = require('./index.js');

test('Test #01 - return type number', () => {
    expect(
        typeof(getOptimalPath([[0], [2, 3]]))
    ).toStrictEqual('number');
});

test('Test #02 - getOptimalPath([[0], [7, 4], [2, 4, 6]])', () => {
    expect(
        getOptimalPath([[0], [7, 4], [2, 4, 6]])
    ).toStrictEqual(8);
});

test('Test #03 - getOptimalPath([[0], [2, 3]])', () => {
    expect(
        getOptimalPath([[0], [2, 3]])
    ).toStrictEqual(2);
});

test('Test #04 - getOptimalPath([[0], [3, 4], [9, 8, 1]])', () => {
    expect(
        getOptimalPath([[0], [3, 4], [9, 8, 1]])
    ).toStrictEqual(5);
});

test('Test #05 - getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])', () => {
    expect(
        getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])
    ).toStrictEqual(8);
});

test('Test #06 - getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])', () => {
    expect(
        getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])
    ).toStrictEqual(7);
});