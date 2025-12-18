findUnsafeGifts = require('./');

describe('Reto #11: 📹 Regalos sin vigilancia', () => {
    test('Test #1 - return type', () => {
        expect(
            typeof findUnsafeGifts(['.*.','*#*','.*.'])
        ).toStrictEqual("number");
    });
    
    test('Test #2 - findUnsafeGifts([".*.","*#*",".*."])', () => {
        expect(
            findUnsafeGifts(['.*.','*#*','.*.'])
        ).toStrictEqual(0);
    });

    test('Test #3 - findUnsafeGifts(["...",".*.","..."])', () => {
        expect(
            findUnsafeGifts(['...','.*.','...'])
        ).toStrictEqual(1);
    });

    test('Test #4 - findUnsafeGifts(["*.*","...","*#*"])', () => {
        expect(
            findUnsafeGifts(['*.*','...','*#*'])
        ).toStrictEqual(2);
    });

    test('Test #5 - findUnsafeGifts([".....",".*.*.","..#..",".*.*.","....."])', () => {
        expect(
            findUnsafeGifts(['.....','.*.*.','..#..','.*.*.','.....'])
        ).toStrictEqual(4);
    });

    test('Test #6 - findUnsafeGifts(["#*.","...","..#"])', () => {
        expect(
            findUnsafeGifts(['#*.','...','..#'])
        ).toStrictEqual(0);
    });

    test('Test #7 - findUnsafeGifts(["...#....","..*#*..","...#...."])', () => {
        expect(
            findUnsafeGifts(['...#....','..*#*..','...#....'])
        ).toStrictEqual(0);
    });

    test('Test #8 - findUnsafeGifts(["*.*","...","*.*"])', () => {
        expect(
            findUnsafeGifts(['*.*','...','*.*'])
        ).toStrictEqual(4);
    });

    test('Test #12 - findUnsafeGifts([".#.","***",".#."])', () => {
        expect(
            findUnsafeGifts(['.#.','***','.#.'])
        ).toStrictEqual(2);
    });

    test('Test #13 - findUnsafeGifts([".*..",".#..","..*."])', () => {
        expect(
            findUnsafeGifts(['.*..','.#..','..*.'])
        ).toStrictEqual(1);
    });
});