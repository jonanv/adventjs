const travelDistance = require("./index");

test('Test #1 - Retorna un número', () => {
    expect(
        typeof (
            travelDistance(
                `.....1....
                ..S.......
                ..........
                ....3.....
                ......2...`
            )
        )
    ).toStrictEqual('number');
});

test("Test #2 - travelDistance(`.....1......S.....................3...........2...`)", () => {
    expect(
        travelDistance(
            `.....1....
            ..S.......
            ..........
            ....3.....
            ......2...`
        )
    ).toStrictEqual(12);
});

test("Test #3 - travelDistance(`..S.1...`)", () => {
    expect(
        travelDistance(`..S.1...`)
    ).toStrictEqual(2);
});

test("Test #4 - travelDistance(`.....2......S.....................1...........3...`)", () => {
    expect(
        travelDistance(
            `.....2....
            ..S.......
            ..........
            ....1.....
            ......3...`
        )
    ).toStrictEqual(13);
});

test("Test #5 - travelDistance(`3....1......S................2................4...`)", () => {
    expect(
        travelDistance(
            `3....1....
            ..S.......
            .........2
            ..........
            ......4...`
        )
    ).toStrictEqual(31);
});

test("Test #6 - travelDistance(`S1`)", () => {
    expect(
        travelDistance(`S1`)
    ).toStrictEqual(1);
});

test("Test #7 - travelDistance(`1....S`)", () => {
    expect(
        travelDistance(`1....S`)
    ).toStrictEqual(5);
});

test("Test #8 - travelDistance(`S12....3`)", () => {
    expect(
        travelDistance(`S12....3`)
    ).toStrictEqual(7);
});