const compile = require("./index");

test('Test #1 - Retorna un número', () => {
    expect(
        typeof(
            compile('++*-')
        )
    ).toStrictEqual('number');
});

test("Test #2 - compile('++*-')", () => {
    expect(
        compile('++*-')
    ).toStrictEqual(3);
});

test("Test #3 - compile('++¿+?')", () => {
    expect(
        compile('++¿+?')
    ).toStrictEqual(3);
});

test("Test #4 - compile('-+¿+?')", () => {
    expect(
        compile('-+¿+?')
    ).toStrictEqual(0);
});

test("Test #5 - compile('++*¿-?')", () => {
    expect(
        compile('++*¿-?')
    ).toStrictEqual(3);
});

test("Test #6 - compile('++%++<')", () => {
    expect(
        compile('++%++<')
    ).toStrictEqual(6);
});

test("Test #7 - compile('++%++<++¿*?')", () => {
    expect(
        compile('++%++<++¿*?')
    ).toStrictEqual(16);
});

test("Test #8 - compile('++¿+?¿+?¿+?')", () => {
    expect(
        compile('++¿+?¿+?¿+?')
    ).toStrictEqual(5);
});

test("Test #9 - compile('--¿+++?')", () => {
    expect(
        compile('--¿+++?')
    ).toStrictEqual(-2);
});

test("Test #10 - compile('--¿+++?+++¿--?')", () => {
    expect(
        compile('--¿+++?+++¿--?')
    ).toStrictEqual(-1);
});

test("Test #11 - compile('<%+¿++%++<?')", () => {
    expect(
        compile('<%+¿++%++<?')
    ).toStrictEqual(7);
});

test("Test #12 - compile('<<<<<<+<<<<<+%')", () => {
    expect(
        compile('<<<<<<+<<<<<+%')
    ).toStrictEqual(2);
});