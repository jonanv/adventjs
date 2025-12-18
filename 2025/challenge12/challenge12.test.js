const elfBattle = require("./");

describe('Reto #12: ⚔️ Batalla de elfos', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof elfBattle('A', 'B')
        ).toStrictEqual("number");
    });
    
    test('Test #2 - elfBattle("A", "B")', () => {
        expect(
            elfBattle('A', 'B')
        ).toStrictEqual(0);
    });

    test('Test #3 - elfBattle("F", "B")', () => {
        expect(
            elfBattle('F', 'B')
        ).toStrictEqual(1);
    });

    test('Test #4 - elfBattle("AAB", "BBA")', () => {
        expect(
            elfBattle('AAB', 'BBA')
        ).toStrictEqual(0);
    });

    test('Test #5 - elfBattle("AFA", "BBA")', () => {
        expect(
            elfBattle('AFA', 'BBA')
        ).toStrictEqual(1);
    });

    test('Test #6 - elfBattle("AFAB", "BBAF")', () => {
        expect(
            elfBattle('AFAB', 'BBAF')
        ).toStrictEqual(1);
    });

    test('Test #7 - elfBattle("AA", "FF")', () => {
        expect(
            elfBattle('AA', 'FF')
        ).toStrictEqual(2);
    });

    test('Test #8 - elfBattle("AAFFFBBB", "ABBBBFFF")', () => {
        expect(
            elfBattle('AAFFFBBB', 'ABBBBFFF')
        ).toStrictEqual(1);
    });

    test('Test #12 - elfBattle("FFA", "BBA")', () => {
        expect(
            elfBattle('FFA', 'BBA')
        ).toStrictEqual(1);
    });

    test('Test #13 - elfBattle("ABA", "FAF")', () => {
        expect(
            elfBattle('ABA', 'FAF')
        ).toStrictEqual(2);
    });
    
});