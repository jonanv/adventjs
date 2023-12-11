const adjustLights = require("./index");

test('Test #1 - Retorna un número', () => {
    expect(
        typeof(
            adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
        )
    ).toStrictEqual('number');
});

test("Test #2 - adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])", () => {
    expect(
        adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
    ).toStrictEqual(1);
});

test('Test #3 - adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])', () => {
    expect(
        adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])
    ).toStrictEqual(2);
});

test('Test #4 - adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])', () => {
    expect(
        adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])
    ).toStrictEqual(0);
});

test('Test #5 - adjustLights(["🔴", "🔴", "🔴"])', () => {
    expect(
        adjustLights(["🔴", "🔴", "🔴"])
    ).toStrictEqual(1);
});