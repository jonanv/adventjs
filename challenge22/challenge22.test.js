const _ = require('./index.js');

test('Test #01 - return type ', () => {
    expect(
        typeof(_())
    ).toStrictEqual();
});