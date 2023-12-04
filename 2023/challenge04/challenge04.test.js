const decode = require("./index");

test('Test #1 - Retorna un string', () => {
    expect(
        typeof(
            decode('hola (odnum)')
        )
    ).toStrictEqual('string');
});

test("Test #2 - decode('hola (odnum)')", () => {
    expect(
        decode('hola (odnum)')
    ).toStrictEqual('hola mundo');
});

test("Test #3 - decode('(olleh) (dlrow)!')", () => {
    expect(
        decode('(olleh) (dlrow)!')
    ).toStrictEqual('hello world!');
});

test("Test #4 - decode('sa(u(cla)atn)s')", () => {
    expect(
        decode('sa(u(cla)atn)s')
    ).toStrictEqual('santaclaus');
});

test("Test #5 - decode('((nta)(sa))')", () => {
    expect(
        decode('((nta)(sa))')
    ).toStrictEqual('santa');
});