const manufacture = require("./index");

test('Test #1 - Retorna un arreglo', () => {
    expect(
        Array.isArray(
            manufacture(['tren', 'oso', 'pelota'], 'trosesa')
        )
    ).toStrictEqual(true);
});

test("Test #2 - manufacture(['tren', 'oso', 'pelota'], 'tronesa')", () => {
    expect(
        manufacture(['tren', 'oso', 'pelota'], 'tronesa')
    ).toStrictEqual(
        [
        "tren",
        "oso"
        ]
    );
});

test("Test #3 - manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')", () => {
    expect(
        manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')
    ).toStrictEqual([]);
});

test("Test #4 - manufacture(['patineta', 'robot', 'libro'], 'nopor')", () => {
    expect(
        manufacture(['patineta', 'robot', 'libro'], 'nopor')
    ).toStrictEqual([]);
});

test("Test #5 - manufacture([], 'letras')", () => {
    expect(
        manufacture([], 'letras')
    ).toStrictEqual([]);
});