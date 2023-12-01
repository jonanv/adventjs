const sortToys = require('./index.js');

test('Test #01 - return type array', () => {
    expect(
        Array.isArray(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]))
    ).toStrictEqual(true);
});

test("Test #02 - sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])", () => {
    expect(
        sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])
    ).toStrictEqual(
        [
            "puzzle",
            "car",
            "ball",
            "doll"
        ]
    );
});

test("Test #03 - sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])", () => {
    expect(
        sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])
    ).toStrictEqual(
        [
            "ps4",
            "xbox",
            "switch",
            "pc",
            "nintendo"
        ]
    );
});

test("Test #04 - sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])", () => {
    expect(
        sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])
    ).toStrictEqual(
        [
            "ps4",
            "xbox",
            "switch",
            "pc",
            "nintendo"
        ]
    );
});

test("Test #05 - sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111])", () => {
    expect(
        sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111])
    ).toStrictEqual(
        [
            "l",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "j",
            "k"
        ]
    );
});