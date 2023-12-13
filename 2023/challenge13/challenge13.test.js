const calculateTime = require("./index")

test('Test #1 - Retorna un string', () => {
    expect(
        typeof(
            calculateTime(['00:10:00', '01:00:00', '03:30:00'])
        )
    ).toStrictEqual('string')
});

test("Test #2 - calculateTime(['00:10:00', '01:00:00', '03:30:00'])", () => {
    expect(
        calculateTime(['00:10:00', '01:00:00', '03:30:00'])
    ).toStrictEqual('-02:20:00')
});

test("Test #3 - calculateTime(['01:00:00', '05:00:00', '00:30:00'])", () => {
    expect(
        calculateTime(['01:00:00', '05:00:00', '00:30:00'])
    ).toStrictEqual('-00:30:00')
});

test("Test #4 - calculateTime(['02:00:00', '05:00:00', '00:30:00'])", () => {
    expect(
        calculateTime(['02:00:00', '05:00:00', '00:30:00'])
    ).toStrictEqual('00:30:00')
});

test("Test #5 - calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])", () => {
    expect(
        calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])
    ).toStrictEqual('-05:29:00')
});

test("Test #6 - calculateTime(['02:00:00', '03:00:00', '02:00:00'])", () => {
    expect(
        calculateTime(['02:00:00', '03:00:00', '02:00:00'])
    ).toStrictEqual('00:00:00')
});

test("Test #7 - calculateTime(['01:01:01', '09:59:59', '01:01:01'])", () => {
    expect(
        calculateTime(['01:01:01', '09:59:59', '01:01:01'])
    ).toStrictEqual('05:02:01')
});

test("Test #8 - calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])", () => {
    expect(
        calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])
    ).toStrictEqual('-00:00:01')
});