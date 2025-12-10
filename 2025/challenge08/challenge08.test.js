findUniqueToy = require('./');

describe('Reto #8: 🎁 Encuentra el juguete único', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof findUniqueToy('Gift')
        ).toStrictEqual("string");
    });
    
    test('Test #2 - findUniqueToy("Gift")', () => {
        expect(
            findUniqueToy('Gift')
        ).toStrictEqual("G");
    });

    test('Test #3 - findUniqueToy("sS")', () => {
        expect(
            findUniqueToy('sS')
        ).toStrictEqual("");
    });

    test('Test #4 - findUniqueToy("reindeeR")', () => {
        expect(
            findUniqueToy('reindeeR')
        ).toStrictEqual("i");
    });

    test('Test #5 - findUniqueToy("sTreSS")', () => {
        expect(
            findUniqueToy('sTreSS')
        ).toStrictEqual("T");
    });

    test('Test #6 - findUniqueToy("aA")', () => {
        expect(
            findUniqueToy('aA')
        ).toStrictEqual("");
    });

    test('Test #7 - findUniqueToy("z")', () => {
        expect(
            findUniqueToy('z')
        ).toStrictEqual("z");
    });

    test('Test #8 - findUniqueToy("")', () => {
        expect(
            findUniqueToy('')
        ).toStrictEqual("");
    });

    test('Test #9 - findUniqueToy("abcDEF")', () => {
        expect(
            findUniqueToy('abcDEF')
        ).toStrictEqual("a");
    });

    test('Test #10 - findUniqueToy("aabbc")', () => {
        expect(
            findUniqueToy('aabbc')
        ).toStrictEqual("c");
    });

    test('Test #11 - findUniqueToy("AaBbCc")', () => {
        expect(
            findUniqueToy('AaBbCc')
        ).toStrictEqual("");
    });

    test('Test #15 - findUniqueToy("SantaSantaS")', () => {
        expect(
            findUniqueToy('SantaSantaS')
        ).toStrictEqual("");
    });

    test('Test #16 - findUniqueToy("ElvesTreeElves")', () => {
        expect(
            findUniqueToy('ElvesTreeElves')
        ).toStrictEqual("T");
    });
    
});