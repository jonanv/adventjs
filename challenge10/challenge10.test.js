const checkJump = require('./index.js');

test('Test #01 - return type', () => {
    expect(
        typeof(checkJump([1, 2, 1]))
    ).toStrictEqual('boolean');
});
