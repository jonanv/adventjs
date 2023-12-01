const checkStepNumbers = require('./index.js');

test('Test #01 - return type boolean', () => {
    expect(
        typeof (checkStepNumbers(
            ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
            [1, 33, 10, 2, 44, 20]
        ))
    ).toStrictEqual('boolean');
});

test('Test #02 - checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],[1, 33, 10, 2, 44, 20])', () => {
    expect(
        checkStepNumbers(
            ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
            [1, 33, 10, 2, 44, 20]
        )
    ).toStrictEqual(true);
});

test('Test #03 - checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])', () => {
    expect(
        checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])
    ).toStrictEqual(false);
});

test('Test #04 - checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])', () => {
    expect(
        checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])
    ).toStrictEqual(true);
});

test('Test #05 - checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])', () => {
    expect(
        checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])
    ).toStrictEqual(false);
});