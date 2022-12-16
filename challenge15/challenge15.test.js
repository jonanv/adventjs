const decorateTree = require('./index.js');

test('Test #01 - return type array', () => {
    expect(
        Array.isArray(decorateTree('B P R P'))
    ).toStrictEqual(true);
});

test("Test #02 - decorateTree('B P R P')", () => {
    expect(
        decorateTree('B P R P')
    ).toStrictEqual(
        [
            "R",
            "P B",
            "R B B",
            "B P R P"
        ]
    );
});

test("Test #03 - decorateTree('B B')", () => {
    expect(
        decorateTree('B B')
    ).toStrictEqual(
        [
            "B",
            "B B"
        ]
    );
});

test("Test #04 - decorateTree('B B P R P R R')", () => {
    expect(
        decorateTree('B B P R P R R')
    ).toStrictEqual(
        [
            "B",
            "R P",
            "B P P",
            "P R B R",
            "P P B B P",
            "B R B B B R",
            "B B P R P R R"
        ]
    );
});

test("Test #05 - decorateTree('R R P R R')", () => {
    expect(
        decorateTree('R R P R R')
    ).toStrictEqual(
        [
            "R",
            "R R",
            "P B P",
            "R B B R",
            "R R P R R"
        ]
    );
});