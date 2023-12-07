const maxDistance = require("./index");

test('Test #1 - Retorna un número', () => {
    expect(
        typeof(
            maxDistance(">>*<")
        )
    ).toStrictEqual('number');
});

test('Test #2 - maxDistance(">>*<")', () => {
    expect(
        maxDistance(">>*<")
    ).toStrictEqual(2);
});

test('Test #3 - maxDistance("<<<<<")', () => {
    expect(
        maxDistance("<<<<<")
    ).toStrictEqual(5);
});

test('Test #4 - maxDistance(">***>")', () => {
    expect(
        maxDistance(">***>")
    ).toStrictEqual(5);
});

test('Test #5 - maxDistance("**********")', () => {
    expect(
        maxDistance("**********")
    ).toStrictEqual(10);
});

test('Test #6 - maxDistance("<<**>>")', () => {
    expect(
        maxDistance("<<**>>")
    ).toStrictEqual(2);
});