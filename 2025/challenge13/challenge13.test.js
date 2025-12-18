const runFactory = require(".");

describe('Reto #13: 🏭 La cadena de montaje', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof runFactory(['>>.'])
        ).toStrictEqual("string");
    });
    
    test('Test #2 - runFactory([">>."])', () => {
        expect(
            runFactory(['>>.'])
        ).toStrictEqual("completed");
    });

    test('Test #3 - runFactory([">>>"])', () => {
        expect(
            runFactory(['>>>'])
        ).toStrictEqual("broken");
    });

    test('Test #4 - runFactory([">><"])', () => {
        expect(
            runFactory(['>><'])
        ).toStrictEqual("loop");
    });

    test('Test #5 - runFactory([">>v","..<"])', () => {
        expect(
            runFactory(['>>v','..<'])
        ).toStrictEqual("completed");
    });

    test('Test #6 - runFactory([">>v","<<<"])', () => {
        expect(
            runFactory(['>>v','<<<'])
        ).toStrictEqual("broken");
    });

    test('Test #7 - runFactory([">v.","^.."])', () => {
        expect(
            runFactory(['>v.','^..'])
        ).toStrictEqual("completed");
    });

    test('Test #8 - runFactory(["v.","^."])', () => {
        expect(
            runFactory(['v.','^.'])
        ).toStrictEqual("loop");
    });

    test('Test #9 - runFactory(["."])', () => {
        expect(
            runFactory(['.'])
        ).toStrictEqual("completed");
    });

    test('Test #10 - runFactory(["^"])', () => {
        expect(
            runFactory(['^'])
        ).toStrictEqual("broken");
    });

    test('Test #11 - runFactory(["v","^"])', () => {
        expect(
            runFactory(['v','^'])
        ).toStrictEqual("loop");
    });

    test('Test #15 - runFactory([">"])', () => {
        expect(
            runFactory(['>'])
        ).toStrictEqual("broken");
    });

    test('Test #16 - runFactory(["<."])', () => {
        expect(
            runFactory(['<.'])
        ).toStrictEqual("broken");
    });
});