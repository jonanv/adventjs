const checkIsValidCopy = require("./index");

test('Test #1 - Retorna un boleano', () => {
    expect(
        typeof(
            checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
        )
    ).toStrictEqual('boolean');
});

test("Test #2 - checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')", () => {
    expect(
        checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
    ).toStrictEqual(true);
});

test("Test #3 - checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')", () => {
    expect(
        checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')
    ).toStrictEqual(false);
});

test("Test #4 - checkIsValidCopy('Santa Claus', ' Santa Claus ')", () => {
    expect(
        checkIsValidCopy('Santa Claus', ' Santa Claus ')
    ).toStrictEqual(false);
});

test("Test #5 - checkIsValidCopy('Santa Claus', '###:. c:+##')", () => {
    expect(
        checkIsValidCopy('Santa Claus', '###:. c:+##')
    ).toStrictEqual(true);
});

test("Test #6 - checkIsValidCopy('Santa Claus', 'sant##claus+')", () => {
    expect(
        checkIsValidCopy('Santa Claus', 'sant##claus+')
    ).toStrictEqual(false);
});

test("Test #7 - checkIsValidCopy('Santa Claus', 's#+:. c:. s')", () => {
    expect(
        checkIsValidCopy('Santa Claus', 's#+:. c:. s')
    ).toStrictEqual(true);
});

test("Test #8 - checkIsValidCopy('Santa Claus', 's#+:.#c:. s')", () => {
    expect(
        checkIsValidCopy('Santa Claus', 's#+:.#c:. s')
    ).toStrictEqual(false);
});

test("Test #9 - checkIsValidCopy('Santa Claus', 'SantA ClauS')", () => {
    expect(
        checkIsValidCopy('Santa Claus', 'SantA ClauS')
    ).toStrictEqual(false);
});

test("Test #10 - checkIsValidCopy('3 #egalos', '3 .+:# #:')", () => {
    expect(
        checkIsValidCopy('3 #egalos', '3 .+:# #:')
    ).toStrictEqual(true);
});

test("Test #11 - checkIsValidCopy('3 regalos', '3        ')", () => {
    expect(
        checkIsValidCopy('3 regalos', '3        ')
    ).toStrictEqual(true);
});

test("Test #12 - checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')", () => {
    expect(
        checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')
    ).toStrictEqual(true);
});

test("Test #13 - checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')", () => {
    expect(
        checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')
    ).toStrictEqual(false);
});