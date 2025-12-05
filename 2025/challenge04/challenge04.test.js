decodeSantaPin = require('./');

describe('Reto #4: 🧮 Descifra el PIN de Santa', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof decodeSantaPin('[1++][2-][3+][<]')
        ).toStrictEqual('string');
    });

    test('Test #2 - decodeSantaPin("[1++][2-][3+][<]")', () => {
        expect(
            decodeSantaPin('[1++][2-][3+][<]')
        ).toStrictEqual("3144");
    });

    test('Test #3 - decodeSantaPin("[9+][0-][4][<]")', () => {
        expect(
            decodeSantaPin('[9+][0-][4][<]')
        ).toStrictEqual("0944");
    });

    test('Test #4 - decodeSantaPin("[1+][2-]")', () => {
        expect(
            decodeSantaPin('[1+][2-]')
        ).toStrictEqual(null);
    });

    test('Test #5 - decodeSantaPin("[4][5++][6--][5++]")', () => {
        expect(
            decodeSantaPin('[4][5++][6--][5++]')
        ).toStrictEqual("4747");
    });

    test('Test #6 - decodeSantaPin("[9+][0-][0-][8+]")', () => {
        expect(
            decodeSantaPin('[9+][0-][0-][8+]')
        ).toStrictEqual("0999");
    });

    test('Test #7 - decodeSantaPin("[0][<][<][<]")', () => {
        expect(
            decodeSantaPin('[0][<][<][<]')
        ).toStrictEqual("0000");
    });

    test('Test #8 - decodeSantaPin("[1+++++++++][2--][3----][<]")', () => {
        expect(
            decodeSantaPin('[1+++++++++][2--][3----][<]')
        ).toStrictEqual("0099");
    });

    test('Test #11 - decodeSantaPin("[3+][7+][<][<]")', () => {
        expect(
            decodeSantaPin('[3+][7+][<][<]')
        ).toStrictEqual("4888");
    });

    test('Test #12 - decodeSantaPin("[0-][0-][0-][0-]")', () => {
        expect(
            decodeSantaPin('[0-][0-][0-][0-]')
        ).toStrictEqual("9999");
    });
});
