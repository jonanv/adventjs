const checkPart = require('./index.js');

test('Test #01 - Retorna un boolean', () => {
    expect(
        typeof(checkPart("uwu"))
    ).toStrictEqual('boolean');
});

test('Test #02 - checkPart("uwu")', () => {
    expect(
        checkPart("uwu")
    ).toStrictEqual(true);
});

test('Test #03 - checkPart("midu")', () => {
    expect(
        checkPart("midu")
    ).toStrictEqual(false);
});

test('Test #04 - checkPart("lolol")', () => {
    expect(
        checkPart("lolol")
    ).toStrictEqual(true);
});

test('Test #05 - checkPart("yolooloy")', () => {
    expect(
        checkPart("yolooloy")
    ).toStrictEqual(true);
});

test('Test #06 - checkPart("zzzoonzzz")', () => {
    expect(
        checkPart("zzzoonzzz")
    ).toStrictEqual(true);
});

test('Test #07 - checkPart("rdadar")', () => {
    expect(
        checkPart("rdadar")
    ).toStrictEqual(true);
});
