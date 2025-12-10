drawTree = require('./');

describe('Reto #7: 🎄 Montando el árbol', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof drawTree(5, 'o', 2)
        ).toStrictEqual("string");
    });

    test('Test #2 - drawTree(5, "o", 2)', () => {
        expect(
            drawTree(5, 'o', 2)
        ).toStrictEqual(
            "    *\n   o*o\n  *o*o*\n o*o*o*o\n*o*o*o*o*\n    #"
        );
    });

    test('Test #3 - drawTree(3, "@", 3)', () => {
        expect(
            drawTree(3, '@', 3)
        ).toStrictEqual(
            "  *\n *@*\n*@**@\n  #"
        );
    });

    test('Test #4 - drawTree(4, "+", 1)', () => {
        expect(
            drawTree(4, '+', 1)
        ).toStrictEqual(
            "   +\n  +++\n +++++\n+++++++\n   #"
        );
    });

    test('Test #5 - drawTree(1, "x", 2)', () => {
        expect(
            drawTree(1, 'x', 2)
        ).toStrictEqual(
            "*\n#"
        );
    });

    test('Test #6 - drawTree(2, "o", 2)', () => {
        expect(
            drawTree(2, 'o', 2)
        ).toStrictEqual(
            " *\no*o\n #"
        );
    });

    test('Test #11 - drawTree(3, "*", 2)', () => {
        expect(
            drawTree(3, '*', 2)
        ).toStrictEqual(
            "  *\n ***\n*****\n  #"
        );
    });

    test('Test #12 - drawTree(4, "o", 3)', () => {
        expect(
            drawTree(4, 'o', 3)
        ).toStrictEqual(
            "   *\n  *o*\n *o**o\n**o**o*\n   #"
        );
    });
    
});