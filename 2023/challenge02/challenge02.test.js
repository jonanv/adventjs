const manufacture = require("./index");

test('Test #1 - Retorna un arreglo', () => {
    expect(
        Array.isArray(
            manufacture(['tren', 'oso', 'pelota'], 'trosesa')
        )
    ).toStrictEqual(true);
});