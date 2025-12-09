moveReno = require('./');

describe('Reto #9: 🦌 El reno robot aspirador', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'U')
        ).toStrictEqual('string');
    });

    test('Test #2 - moveReno(`.....\n.*#.*\n.@...\n.....\n`, "U")', () => {
        expect(
            moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'U')
        ).toStrictEqual("success");
    });
    
    test('Test #3 - moveReno(`.....\n.*#.*\n.@...\n.....\n`, "RRRUU")', () => {
        expect(
            moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'RRRUU')
        ).toStrictEqual("success");
    });
    
    test('Test #4 - moveReno(`.....\n.*#.*\n.@...\n.....\n`, "D")', () => {
        expect(
            moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'D')
        ).toStrictEqual("fail");
    });

    test('Test #5 - moveReno(`.....\n.*#.*\n.@...\n.....\n`, "DD")', () => {
        expect(
            moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'DD')
        ).toStrictEqual("crash");
    });

    test('Test #6 - moveReno(`.....\n.*#.*\n.@...\n.....\n`, "RU")', () => {
        expect(
            moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'RU')
        ).toStrictEqual("crash");
    });

    test('Test #7 - moveReno(`.....\n.*#.*\n.@...\n.....\n`, "UUU")', () => {
        expect(
            moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'UUU')
        ).toStrictEqual("success");
    });

    test('Test #8 - moveReno(`.....\n.*#.*\n.@...\n.....\n`, "RR")', () => {
        expect(
            moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'RR')
        ).toStrictEqual("fail");
    });

    test('Test #9 - moveReno(`.....\n.....\n.@..*\n.....\n`, "RRRRRRRRR")', () => {
        expect(
            moveReno(`.....\n.....\n.@..*\n.....\n`, 'RRRRRRRRR')
        ).toStrictEqual("success");
    });

    test('Test #13 - moveReno(`.....\n.*#.*\n.@...\n.....\n`, "LLLL")', () => {
        expect(
            moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'LLLL')
        ).toStrictEqual("crash");
    });

    test('Test #14 - moveReno(`.....\n.*#.*\n.@...\n.....\n`, "LU")', () => {
        expect(
            moveReno(`.....\n.*#.*\n.@...\n.....\n`, 'LU')
        ).toStrictEqual("fail");
    });
    
});