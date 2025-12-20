const drawTable = require(".");

describe('Reto #15: ✏️ Dibujando tablas', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof drawTable([
                { name: 'Charlie', city: 'New York' },
                { name: 'Alice', city: 'London' },
                { name: 'Bob', city: 'Paris' }
            ], 'name')
        ).toStrictEqual("string");
    });
    
    test('Test #2 - drawTable([{ name: "Charlie", city: "New York" },{ name: "Alice", city: "London" },{ name: "Bob", city: "Paris" }], "name")', () => {
        expect(
            drawTable([
                { name: 'Charlie', city: 'New York' },
                { name: 'Alice', city: 'London' },
                { name: 'Bob', city: 'Paris' }
            ], 'name')
        ).toStrictEqual("+---------+----------+\n| A       | B        |\n+---------+----------+\n| Alice   | London   |\n| Bob     | Paris    |\n| Charlie | New York |\n+---------+----------+");
    });

    test('Test #3 - drawTable([{ gift: "Book", quantity: 5 },{ gift: "Music CD", quantity: 1 },{ gift: "Doll", quantity: 10 }], "quantity")', () => {
        expect(
            drawTable([
                { gift: 'Book', quantity: 5 },
                { gift: 'Music CD', quantity: 1 },
                { gift: 'Doll', quantity: 10 }
            ], 'quantity')
        ).toStrictEqual("+----------+----+\n| A        | B  |\n+----------+----+\n| Music CD | 1  |\n| Book     | 5  |\n| Doll     | 10 |\n+----------+----+");
    });

    test('Test #4 - drawTable([{ name: "Alice", city: "Paris" },{ name: "Bob", city: "London" }], "city")', () => {
        expect(
            drawTable([
                { name: 'Alice', city: 'Paris' },
                { name: 'Bob', city: 'London' }
            ], 'city')
        ).toStrictEqual("+-------+--------+\n| A     | B      |\n+-------+--------+\n| Bob   | London |\n| Alice | Paris  |\n+-------+--------+");
    });

    test('Test #5 - drawTable([{ name: "Alice", city: "London" }], "name")', () => {
        expect(
            drawTable([{ name: 'Alice', city: 'London' }], 'name')
        ).toStrictEqual("+-------+--------+\n| A     | B      |\n+-------+--------+\n| Alice | London |\n+-------+--------+");
    });

    test('Test #6 - drawTable([{ a: 2, b: "Y", c: "X" },{ a: 1, b: "Z", c: "W" },{ a: 3, b: "A", c: "B" }], "a")', () => {
        expect(
            drawTable([
                { a: 2, b: 'Y', c: 'X' },
                { a: 1, b: 'Z', c: 'W' },
                { a: 3, b: 'A', c: 'B' }
            ], 'a')
        ).toStrictEqual(
            "+---+---+---+\n| A | B | C |\n+---+---+---+\n| 1 | Z | W |\n| 2 | Y | X |\n| 3 | A | B |\n+---+---+---+"
        );
    });

    test('Test #7 - drawTable([{ id: "zebra", active: true },{ id: "alpha", active: false }], "id")', () => {
        expect(
            drawTable([
                { id: 'zebra', active: true },
                { id: 'alpha', active: false }
            ], 'id')
        ).toStrictEqual("+-------+-------+\n| A     | B     |\n+-------+-------+\n| alpha | false |\n| zebra | true  |\n+-------+-------+");
    });

    test('Test #11 - drawTable([{ name: "Short", city: "TinyCity" },{ name: "VeryLongNameIndeed", city: "MegaLongCityName" }], "name")', () => {
        expect(
            drawTable([
                { name: 'Short', city: 'TinyCity' },
                { name: 'VeryLongNameIndeed', city: 'MegaLongCityName' }
            ], 'name')
        ).toStrictEqual("+--------------------+------------------+\n| A                  | B                |\n+--------------------+------------------+\n| Short              | TinyCity         |\n| VeryLongNameIndeed | MegaLongCityName |\n+--------------------+------------------+");
    });

    test('Test #12 - drawTable([{ title: "Banana" }, { title: "Apple" }], "title")', () => {
        expect(
            drawTable([{ title: 'Banana' }, { title: 'Apple' }], 'title')
        ).toStrictEqual("+--------+\n| A      |\n+--------+\n| Apple  |\n| Banana |\n+--------+");
    });
});