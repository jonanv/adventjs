const cyberReindeer = require("./index");

test('Test #1 - Retorna un array', () => {
    expect(
        Array.isArray(
            cyberReindeer('S..|...|..', 10)
        )
    ).toStrictEqual(true);
});

test("Test #2 - cyberReindeer('S..|...|..', 10)", () => {
    expect(
        cyberReindeer('S..|...|..', 10)
    ).toStrictEqual(
        [
            "S..|...|..",
            ".S.|...|..",
            "..S|...|..",
            "..S|...|..",
            "..S|...|..",
            "...S...*..",
            "...*S..*..",
            "...*.S.*..",
            "...*..S*..",
            "...*...S.."
        ]
    );
});

test("Test #3 - cyberReindeer('S.|.', 4)", () => {
    expect(
        cyberReindeer('S.|.', 4)
    ).toStrictEqual(
        [
            "S.|.",
            ".S|.",
            ".S|.",
            ".S|."
        ]
    );
});

test("Test #4 - cyberReindeer('S.|.|.', 7)", () => {
    expect(
        cyberReindeer('S.|.|.', 7)
    ).toStrictEqual(
        [
            "S.|.|.",
            ".S|.|.",
            ".S|.|.",
            ".S|.|.",
            ".S|.|.",
            "..S.*.",
            "..*S*."
        ]
    );
});

test("Test #5 - cyberReindeer('S.|..', 6)", () => {
    expect(
        cyberReindeer('S.|..', 6)
    ).toStrictEqual(
        [
            "S.|..",
            ".S|..",
            ".S|..",
            ".S|..",
            ".S|..",
            "..S.."
        ]
    );
});

test("Test #6 - cyberReindeer('S.|.|.|......|.||.........', 8)", () => {
    expect(
        cyberReindeer('S.|.|.|......|.||.........', 8)
    ).toStrictEqual(
        [
            "S.|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            "..S.*.*......*.**.........",
            "..*S*.*......*.**.........",
            "..*.S.*......*.**........."
        ]
    );
});