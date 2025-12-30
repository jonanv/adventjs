const minStepsToDeliver = require(".");

describe('Reto #23: 🎁 Ruta de regalos', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof minStepsToDeliver([
                ['S', '.', 'G'],
                ['.', '#', '.'],
                ['G', '.', '.']
            ])
        ).toStrictEqual("number");
    });
    
    test('Test #2 - Example 1: 3x3 map with obstacles', () => {
        expect(
            minStepsToDeliver([
                ['S', '.', 'G'],
                ['.', '#', '.'],
                ['G', '.', '.']
            ])
        ).toStrictEqual(4);
    });

    test('Test #3 - Example 2: Unreachable house', () => {
        expect(

        ).toStrictEqual(-1);
    });

    test('Test #4 - Example 3: Simple 1x2 map', () => {
        expect(
            minStepsToDeliver([['S', 'G']])
        ).toStrictEqual(1);
    });

    test('Test #5 - Map with all Gs in a row', () => {
        expect(
            
        ).toStrictEqual(6);
    });

    test('Test #6 - Map with Gs requiring a detour', () => {
        expect(

        ).toStrictEqual(3);
    });

    test('Test #10 - Santa is blocked from all Gs', () => {
        expect(
            minStepsToDeliver([
                ['S', '#', 'G'],
                ['#', '#', '.'],
                ['G', '.', '.']
            ])
        ).toStrictEqual(-1);
    });

    test('Test #11 - Large map with multiple Gs', () => {
        expect(

        ).toStrictEqual(16);
    });
    
});