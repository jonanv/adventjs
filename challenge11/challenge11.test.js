const getCompleted = require('./index.js');

test("Test #01 - return type string", () => {
    expect(
        typeof(getCompleted('01:00:00', '03:00:00'))
    ).toStrictEqual("string");
});

test("Test #02 - getCompleted('01:00:00', '03:00:00')", () => {
    expect(
        getCompleted('01:00:00', '03:00:00')
    ).toStrictEqual("1/3");
});

test("Test #03 - getCompleted('02:00:00', '04:00:00')", () => {
    expect(
        getCompleted('02:00:00', '04:00:00')
    ).toStrictEqual("1/2");
});

test("Test #04 - getCompleted('01:00:00', '01:00:00')", () => {
    expect(
        getCompleted('01:00:00', '01:00:00')
    ).toStrictEqual("1/1");
});

test("Test #05 - getCompleted('00:10:00', '01:00:00')", () => {
    expect(
        getCompleted('00:10:00', '01:00:00')
    ).toStrictEqual("1/6");
});

test("Test #06 - getCompleted('01:10:10', '03:30:30')", () => {
    expect(
        getCompleted('01:10:10', '03:30:30')
    ).toStrictEqual("1/3");
});

test("Test #07 - getCompleted('02:20:20', '03:30:30')", () => {
    expect(
        getCompleted('02:20:20', '03:30:30')
    ).toStrictEqual("2/3");
});

test("Test #08 - getCompleted('03:30:30', '05:50:50')", () => {
    expect(
        getCompleted('03:30:30', '05:50:50')
    ).toStrictEqual("3/5");
});
