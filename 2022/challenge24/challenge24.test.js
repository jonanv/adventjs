const canExit = require('./index.js');

test("Test #01 - return type boolean", () => {
    expect(
        typeof (
            canExit([
                [' ', ' ', 'W', ' ', 'S'],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', 'W', ' '],
                ['W', 'W', ' ', 'W', 'W'],
                [' ', ' ', ' ', ' ', 'E']
            ])
        )
    ).toStrictEqual("boolean");
});

test("Test #02 - canExit([[' ', ' ', 'W', ' ', 'S'],[' ', ' ', ' ', ' ', ' '],[' ', ' ', ' ', 'W', ' '],['W', 'W', ' ', 'W', 'W'],[' ', ' ', ' ', ' ', 'E']])", () => {
    expect(
        canExit([
            [' ', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ])
    ).toStrictEqual(true);
});

test("Test #03 - canExit([[' ', ' ', 'W', 'W', 'S'],[' ', ' ', ' ', 'W', ' '],[' ', ' ', ' ', 'W', ' '],['W', 'W', ' ', 'W', 'W'],[' ', ' ', ' ', ' ', 'E']])", () => {
    expect(
        canExit([
            [' ', ' ', 'W', 'W', 'S'],
            [' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ])
    ).toStrictEqual(false);
});

test("Test #04 - canExit([[' ', ' ', 'W', 'W', 'S'],[' ', ' ', ' ', 'W', ' '],[' ', ' ', ' ', 'W', ' '],['W', 'W', ' ', ' ', 'W'],[' ', ' ', ' ', ' ', 'E']])", () => {
    expect(
        canExit([
            [' ', ' ', 'W', 'W', 'S'],
            [' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', ' ', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ])
    ).toStrictEqual(false);
});

test("Test #05 - canExit([['E', ' ', ' ', ' ', 'S']])", () => {
    expect(
        canExit([
            ['E', ' ', ' ', ' ', 'S']
        ])
    ).toStrictEqual(true);
});

test("Test #06 - canExit([['E', ' ', 'W', ' ', 'S']])", () => {
    expect(
        canExit([
            ['E', ' ', 'W', ' ', 'S']
        ])
    ).toStrictEqual(false);
});

test("Test #07 - canExit([['E', ' ', 'W', ' ', 'S']])", () => {
    expect(
        canExit([
            ['E', ' ', 'W', ' ', 'S']
        ])
    ).toStrictEqual(false);
});

test("Test #08 - canExit([['E', ' ', 'W', ' ', 'S'],[' ', ' ', ' ', ' ', ' '],])", () => {
    expect(
        canExit([
            ['E', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
        ])
    ).toStrictEqual(true);
});

test("Test #09 - canExit([['E', ' ', 'W', ' ', 'S'],[' ', ' ', ' ', ' ', ' '],['W', 'W', 'W', 'W', 'W'],])", () => {
    expect(
        canExit([
            ['E', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            ['W', 'W', 'W', 'W', 'W'],
        ])
    ).toStrictEqual(true);
});

test("Test #10 - canExit([['E', ' ', 'W', ' ', 'S'],[' ', ' ', 'W', ' ', ' '],['W', 'W', 'W', 'W', 'W'],])", () => {
    expect(
        canExit([
            ['E', ' ', 'W', ' ', 'S'],
            [' ', ' ', 'W', ' ', ' '],
            ['W', 'W', 'W', 'W', 'W'],
        ])
    ).toStrictEqual(false);
});

test("Test #11 - canExit([['E', 'S', 'W', 'W', 'W'],['W', 'W', 'W', 'W', 'W'],['W', 'W', 'W', 'W', 'W']])", () => {
    expect(
        canExit([
            ['E', 'S', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'W', 'W']
        ])
    ).toStrictEqual(true);
});