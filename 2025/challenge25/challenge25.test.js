const execute = require(".");

describe('Reto #25: 🪄 Ejecuta el lenguaje mágico', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof execute(`+++`)
        ).toStrictEqual("number");
    });
    
    test('Test #2 - execute(`+++`)', () => {
        expect(
            execute(`+++`)
        ).toStrictEqual(3);
    });

    test('Test #3 - execute(`+--`)', () => {
        expect(
            execute(`+--`)
        ).toStrictEqual(-1);
    });

    test('Test #4 - execute(`>+++[-]`)', () => {
        expect(
            execute(`>+++[-]`)
        ).toStrictEqual(0);
    });

    test('Test #5 - execute(`>>>+{++}`)', () => {
        expect(
            execute(`>>>+{++}`)
        ).toStrictEqual(3);
    });

    test('Test #6 - execute(`+{[-]+}`)', () => {
        expect(
            execute(`+{[-]+}`)
        ).toStrictEqual(1);
    });

    test('Test #7 - execute(`-[+>]++`)', () => {
        expect(
            execute(`-[+>]++`)
        ).toStrictEqual(2);
    });

    test('Test #8 - execute(`-[+{++}]++{[-]}++`)', () => {
        expect(
            execute(`-[+{++}]++{[-]}++`)
        ).toStrictEqual(2);
    });

    test('Test #9 - execute(`{+}{+}{+}`)', () => {
        expect(
            execute(`{+}{+}{+}`)
        ).toStrictEqual(0);
    });

    test('Test #10 - execute(``) // empty program', () => {
        expect(
            execute(``) // empty program
        ).toStrictEqual(0);
    });

    test('Test #11 - execute(`+++{[-]+++[-]+}`) // nested loops', () => {
        expect(
            execute(`+++{[-]+++[-]+}`) // nested loops
        ).toStrictEqual(1);
    });

    test('Test #12 - execute(`{>++>++}`) // skip increment if condition is zero', () => {
        expect(
            execute(`{>++>++}`) // skip increment if condition is zero
        ).toStrictEqual(0);
    });

    test('Test #13 - execute(`++++[-->]>++`) // move and increment', () => {
        expect(
            execute(`++++[-->]>++`) // move and increment
        ).toStrictEqual(2);
    });

    test('Test #17 - execute(`>++>[++>----]-->[+]-->[>+]>++`) // combination of loops', () => {
        expect(
            execute(`>++>[++>----]-->[+]-->[>+]>++`) // combination of loops
        ).toStrictEqual(2);
    });

    test('Test #18 - execute(`---[{+}]---[{+}]`) // nested loops and conditionals', () => {
        expect(
            execute(`---[{+}]---[{+}]`) // nested loops and conditionals
        ).toStrictEqual(0);
    });
    
});