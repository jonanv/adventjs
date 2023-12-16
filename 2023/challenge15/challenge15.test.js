const autonomousDrive = require("./index");

test('Test #1 - Retorna un array', () => {
    expect(
        Array.isArray(
            autonomousDrive(['..!....'], ['R', 'L'])
        )
    ).toStrictEqual(true);
});

test("Test #2 - autonomousDrive(['..!....'], ['R', 'L'])", () => {
    expect(
        autonomousDrive(['..!....'], ['R', 'L'])
    ).toStrictEqual(
        [
            "..!...."
        ]
    );
});

test("Test #3 - autonomousDrive(['!..', '***'], ['U', 'L'])", () => {
    expect(
        autonomousDrive(['!..', '***'], ['U', 'L'])
    ).toStrictEqual(
        [
            "!..",
            "***"
        ]
    );
});

test("Test #4 - autonomousDrive(['..!....', '......*'], ['R', 'D', 'L'])", () => {
    expect(
        autonomousDrive(['..!....', '......*'], ['R', 'D', 'L'])
    ).toStrictEqual(
        [
            ".......",
            "..!...*"
        ]
    );
});

test("Test #5 - autonomousDrive(['*..!..*', '*.....*'], ['R', 'R', 'R', 'D', 'D'])", () => {
    expect(
        autonomousDrive(['*..!..*', '*.....*'], ['R', 'R', 'R', 'D', 'D'])
    ).toStrictEqual(
        [
            "*.....*",
            "*....!*"
        ]
    );
});

test("Test #6 - autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])", () => {
    expect(
        autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
    ).toStrictEqual(
        [
            "***",
            "..!",
            "***"
        ]
    );
});

test("Test #7 - autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])", () => {
    expect(
        autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])
    ).toStrictEqual(
        [
            "***",
            "*!*",
            "***"
        ]
    );
});

test("Test #8 - autonomousDrive(['.**.*.*.', '.***....', '..!.....'], ['D', 'U', 'R', 'R', 'R'])", () => {
    expect(
        autonomousDrive(['.**.*.*.', '.***....', '..!.....'], ['D', 'U', 'R', 'R', 'R'])
    ).toStrictEqual(
        [
            ".**.*.*.",
            ".***....",
            ".....!.."
        ]
    );
});