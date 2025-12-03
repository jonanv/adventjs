const drawGift = require(".");

describe('Reto #3: 👶 Ayuda al becario', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof drawGift(5, '*')
        ).toStrictEqual('string');
    });

    test('Test #2 - drawGift(1, "+")', () => {
        expect(
            drawGift(1, "+")
        ).toStrictEqual('');
    });

    test('Test #3 - drawGift(2, "#")', () => {
        expect(
            drawGift(2, "#")
        ).toStrictEqual(
            "##\n##"
        );
    });

    test('Test #4 - drawGift(3, "#")', () => {
        expect(
            drawGift(3, "#")
        ).toStrictEqual(
            "###\n# #\n###"
        );
    });

    test('Test #5 - drawGift(4, "*")', () => {
        expect(
            drawGift(4, "*")
        ).toStrictEqual(
            "****\n*  *\n*  *\n****"
        );
    });

    test('Test #6 - drawGift(5, "@")', () => {
        expect(
            drawGift(5, "@")
        ).toStrictEqual(
            "@@@@@\n@   @\n@   @\n@   @\n@@@@@"
        );
    });

    test('Test #10 - drawGift(3, "X")', () => {
        expect(
            drawGift(3, "X")
        ).toStrictEqual(
            "XXX\nX X\nXXX"
        );
    });

    test('Test #11 - drawGift(4, "$")', () => {
        expect(
            drawGift(4, "$")
        ).toStrictEqual(
            "$$$$\n$  $\n$  $\n$$$$"
        );
    });
});
