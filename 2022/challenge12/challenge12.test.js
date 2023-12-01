const selectSleigh = require('./index.js');

test('Test #01 - return type string', () => {
    expect(
        typeof (selectSleigh(1, [
            { name: 'pheralb', consumption: 0.3 },
            { name: 'TMChein', consumption: 0.5 }
        ]))
    ).toStrictEqual('string');
});

test("Test #02 - selectSleigh(1, [{ name: 'pheralb', consumption: 0.3 }, { name: 'TMChein', consumption: 0.5 }])", () => {
    expect(
        selectSleigh(1, [
            { name: 'pheralb', consumption: 0.3 },
            { name: 'TMChein', consumption: 0.5 }
        ])
    ).toStrictEqual('TMChein');
});

test("Test #03 - selectSleigh(10, [{ name: 'Pedrosillano', consumption: 1 }, { name: 'SamarJaffal', consumption: 5 }])", () => {
    expect(
        selectSleigh(10, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 5 }
        ])
    ).toStrictEqual('Pedrosillano');
});

test("Test #04 - selectSleigh(10, [{ name: 'Pedrosillano', consumption: 1 }, { name: 'SamarJaffal', consumption: 2 }, { name: 'marcospage', consumption: 3 }])", () => {
    expect(
        selectSleigh(10, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ])
    ).toStrictEqual('SamarJaffal');
});

test("Test #05 - selectSleigh(50, [{ name: 'Pedrosillano', consumption: 1 }, { name: 'SamarJaffal', consumption: 2 }, { name: 'marcospage', consumption: 3 }])", () => {
    expect(
        selectSleigh(50, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ])
    ).toStrictEqual(null);
});