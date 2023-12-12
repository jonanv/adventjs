const createChristmasTree = require("./index");

test('Test #1 - Retorna un string', () => {
    expect(
        typeof(
            createChristmasTree('123', 4)
        )
    ).toStrictEqual('string');
});

test('Test #2 - createChristmasTree("x", 3)', () => {
    expect(
        createChristmasTree("x", 3)
    ).toStrictEqual("  x\n x x\nx x x\n  |\n");
});

test('Test #3 - createChristmasTree("xo", 4)', () => {
    expect(
        createChristmasTree("xo", 4)
    ).toStrictEqual("   x\n  o x\n o x o\nx o x o\n   |\n");
});

test('Test #4 - createChristmasTree("123", 5)', () => {
    expect(
        createChristmasTree("123", 5)
    ).toStrictEqual("    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n");
});

test('Test #5 - createChristmasTree("*@o", 3)', () => {
    expect(
        createChristmasTree("*@o", 3)
    ).toStrictEqual("  *\n @ o\n* @ o\n  |\n");
});