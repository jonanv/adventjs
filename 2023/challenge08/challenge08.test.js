const organizeGifts = require("./index");

test('Test #1 - Retorna un string', () => {
    expect(
        typeof(
            organizeGifts('76a11b')
        )
    ).toStrictEqual('string');
});

test('Test #2 - organizeGifts("76a11b")', () => {
    expect(
        organizeGifts("76a11b")
    ).toStrictEqual("[a]{a}{a}(aaaaaa){b}(b)");
});

test('Test #3 - organizeGifts("20a")', () => {
    expect(
        organizeGifts("20a")
    ).toStrictEqual("{a}{a}");
});

test('Test #4 - organizeGifts("70b120a4c")', () => {
    expect(
        organizeGifts("70b120a4c")
    ).toStrictEqual("[b]{b}{b}[a][a]{a}{a}(cccc)");
});

test('Test #5 - organizeGifts("9c")', () => {
    expect(
        organizeGifts("9c")
    ).toStrictEqual("(ccccccccc)");
});

test('Test #6 - organizeGifts("19d51e")', () => {
    expect(
        organizeGifts("19d51e")
    ).toStrictEqual("{d}(ddddddddd)[e](e)");
});