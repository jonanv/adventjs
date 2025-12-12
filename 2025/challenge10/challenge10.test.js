maxDepth = require('./');

describe('Reto #10: 📨 Profundidad de la magia navideña', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof maxDepth('[]')
        ).toStrictEqual("number");
    });
    
    test('Test #2 - maxDepth("[]")', () => {
        expect(
            maxDepth('[]')
        ).toStrictEqual(1);
    });

    test('Test #3 - maxDepth("[[]]")', () => {
        expect(
            maxDepth('[[]]')
        ).toStrictEqual(2);
    });

    test('Test #4 - maxDepth("[][]")', () => {
        expect(
            maxDepth('[][]')
        ).toStrictEqual(1);
    });

    test('Test #5 - maxDepth("[[][]]")', () => {
        expect(
            maxDepth('[[][]]')
        ).toStrictEqual(2);
    });

    test('Test #6 - maxDepth("[[[]]]")', () => {
        expect(
            maxDepth('[[[]]]')
        ).toStrictEqual(3);
    });

    test('Test #7 - maxDepth("[][[]][]")', () => {
        expect(
            maxDepth('[][[]][]')
        ).toStrictEqual(2);
    });

    test('Test #8 - maxDepth("][")', () => {
        expect(
            maxDepth('][')
        ).toStrictEqual(-1);
    });

    test('Test #9 - maxDepth("[[[")', () => {
        expect(
            maxDepth('[[[')
        ).toStrictEqual(-1);
    });

    test('Test #10 - maxDepth("[]]]")', () => {
        expect(
            maxDepth('[]]]')
        ).toStrictEqual(-1);
    });

    test('Test #11 - maxDepth("[][][")', () => {
        expect(
            maxDepth('[][][')
        ).toStrictEqual(-1);
    });

    test('Test #15 - maxDepth("[[[[]]]]")', () => {
        expect(
            maxDepth('[[[[]]]]')
        ).toStrictEqual(4);
    });

    test('Test #16 - maxDepth("[[][[]]]")', () => {
        expect(
            maxDepth('[[][[]]]')
        ).toStrictEqual(3);
    });
});