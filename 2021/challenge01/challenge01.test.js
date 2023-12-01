const countSheeps = require("./index");

test('Test #1 - retorna un arreglo', () => {
    expect(
        Array.isArray(
            countSheeps(
                [
                    { name: 'Noa', color: 'azul' },
                    { name: 'Euge', color: 'rojo' },
                    { name: 'Navidad', color: 'rojo' },
                    { name: 'Ki Na Ma', color: 'rojo' },
                    { name: 'AAAAAaaaaa', color: 'rojo' },
                    { name: 'Nnnnnnnn', color: 'rojo' }
                ]
            )
        )
    ).toStrictEqual(true);
});

test("Test #2 - countSheeps([{ name: 'Noa', color: 'azul' }, { name: 'Euge', color: 'rojo' }, { name: 'Navidad', color: 'rojo' }, { name: 'Ki Na Ma', color: 'rojo' }, { name: 'AAAAAaaaaa', color: 'rojo' }, { name: 'Nnnnnnnn', color: 'rojo' }])", () => {
    expect(
        countSheeps(
            [
                { name: 'Noa', color: 'azul' },
                { name: 'Euge', color: 'rojo' },
                { name: 'Navidad', color: 'rojo' },
                { name: 'Ki Na Ma', color: 'rojo' },
                { name: 'AAAAAaaaaa', color: 'rojo' },
                { name: 'Nnnnnnnn', color: 'rojo' }
            ]
        )
    ).toStrictEqual(
        [
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' }
        ]
    );
});

test('Test #3 - countSheeps([])', () => {
    expect(
        countSheeps([])
    ).toStrictEqual([]);
});

test("Test #4 - countSheeps([{ name: 'Pitufa', color: 'rojo' }, { name: 'Euge', color: 'amarillo' }, { name: 'Natavidad', color: 'rojo' }])", () => {
    expect(
        countSheeps(
            [
                { name: 'Pitufa', color: 'rojo' },
                { name: 'Euge', color: 'amarillo' },
                { name: 'Natavidad', color: 'rojo' }
            ]
        )
    ).toStrictEqual(
        [
            { name: 'Natavidad', color: 'rojo' }
        ]
    );
})