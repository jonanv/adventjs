const getIndexsForPalindrome = require("./index");

test('Test #1 - Retorna una function', () => {
    expect(
        Array.isArray(
            getIndexsForPalindrome('anna')
        )
    ).toStrictEqual(true);
});

test("Test #2 - getIndexsForPalindrome('anna')", () => {
    expect(
        getIndexsForPalindrome('anna')
    ).toStrictEqual([]);
});

test("Test #3 - getIndexsForPalindrome('abab')", () => {
    expect(
        getIndexsForPalindrome('abab')
    ).toStrictEqual([
        0,
        1
    ]);
});

test("Test #4 - getIndexsForPalindrome('abac')", () => {
    expect(
        getIndexsForPalindrome('abac')
    ).toStrictEqual(null);
});

test("Test #5 - getIndexsForPalindrome('aaaaaaaa')", () => {
    expect(
        getIndexsForPalindrome('aaaaaaaa')
    ).toStrictEqual([]);
});

test("Test #6 - getIndexsForPalindrome('aaababa')", () => {
    expect(
        getIndexsForPalindrome('aaababa')
    ).toStrictEqual([
        1,
        3
    ]);
});

test("Test #7 - getIndexsForPalindrome('caababa')", () => {
    expect(
        getIndexsForPalindrome('caababa')
    ).toStrictEqual(null);
});

test("Test #7 - getIndexsForPalindrome('caababa')", () => {
    expect(
        getIndexsForPalindrome('caababa')
    ).toStrictEqual(null);
});

test("Test #8 - getIndexsForPalindrome('rotavator')", () => {
    expect(
        getIndexsForPalindrome('rotavator')
    ).toStrictEqual([]);
});

test("Test #9 - getIndexsForPalindrome('rotaratov')", () => {
    expect(
        getIndexsForPalindrome('rotaratov')
    ).toStrictEqual([
        4,
        8
    ]);
});

test("Test #10 - getIndexsForPalindrome('saippuakivikauppias')", () => {
    expect(
        getIndexsForPalindrome('saippuakivikauppias')
    ).toStrictEqual([]);
});