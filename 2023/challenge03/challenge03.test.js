const findNaughtyStep = require("./index");

test('Test #1 - Retorna un string', () => {
    expect(
        typeof(
            findNaughtyStep('abcd', 'abcde')
        )
    ).toStrictEqual('string');
});

test("Test #2 - findNaughtyStep('abcd', 'abcde')", () => {
    expect(
        findNaughtyStep('abcd', 'abcde')
    ).toStrictEqual('e');
});

test("Test #3 - findNaughtyStep('abcde', 'abcd')", () => {
    expect(
        findNaughtyStep('abcde', 'abcd')
    ).toStrictEqual('e');
});

test("Test #4 - findNaughtyStep('xxxx', 'xxoxx')", () => {
    expect(
        findNaughtyStep('xxxx', 'xxoxx')
    ).toStrictEqual('o');
});

test("Test #5 - findNaughtyStep('stepfor', 'stepor')", () => {
    expect(
        findNaughtyStep('stepfor', 'stepor')
    ).toStrictEqual('f');
});

test("Test #6 - findNaughtyStep('iiiii', 'iiiii')", () => {
    expect(
        findNaughtyStep('iiiii', 'iiiii')
    ).toStrictEqual('');
});