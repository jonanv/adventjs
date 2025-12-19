const findGiftPath = require("./");

const workshop = {
    storage: {
        shelf: {
            box1: 'train',
            box2: 'switch'
        },
        box: 'car'
    },
    gift: 'doll'
}

describe('Reto #14: 🗃️ Encuentra el camino al regalo', () => {
    test('Test #1 - return type', () => {
        expect(
            Array.isArray(
                findGiftPath(workshop, 'train')
            )
        ).toStrictEqual(true);
    });

    test('Test #2 - findGiftPath(workshop, "train")', () => {
        expect(
            findGiftPath(workshop, 'train')
        ).toStrictEqual(
            [
                "storage",
                "shelf",
                "box1"
            ]
        );
    });

    test('Test #3 - findGiftPath(workshop, "switch")', () => {
        expect(
            findGiftPath(workshop, 'switch')
        ).toStrictEqual(
            [
                "storage",
                "shelf",
                "box2"
            ]
        );
    });

    test('Test #4 - findGiftPath(workshop, "car")', () => {
        expect(
            findGiftPath(workshop, 'car')
        ).toStrictEqual(
            [
                "storage",
                "box"
            ]
        );
    });

    test('Test #5 - findGiftPath(workshop, "doll")', () => {
        expect(
            findGiftPath(workshop, 'doll')
        ).toStrictEqual(
            [
                "gift"
            ]
        );
    });

    test('Test #6 - findGiftPath(workshop, "plane")', () => {
        expect(
            findGiftPath(workshop, 'plane')
        ).toStrictEqual(
            []
        );
    });

    test('Test #7 - findGiftPath({ a: { b: { c: 42 } } }, 42)', () => {
        expect(
            findGiftPath({ a: { b: { c: 42 } } }, 42)
        ).toStrictEqual(
            [
                "a",
                "b",
                "c"
            ]
        );
    });

    test('Test #8 - findGiftPath({ ok: true, nested: { nope: false, extra: { is: 0 } } }, false)', () => {
        expect(
            findGiftPath({ ok: true, nested: { nope: false, extra: { is: 0 } } }, false)
        ).toStrictEqual(
            [
                "nested",
                "nope"
            ]
        );
    });

    test('Test #12 - findGiftPath({ a: "x", x: "a" }, "x")', () => {
        expect(
            findGiftPath({ a: 'x', x: 'a' }, 'x')
        ).toStrictEqual(
            [
                "a"
            ]
        );
    });

    test('Test #13 - findGiftPath({ a: { b: "x" }, c: "y" }, "y")', () => {
        expect(
            findGiftPath({ a: { b: 'x' }, c: 'y' }, 'y')
        ).toStrictEqual(
            [
                "c"
            ]
        );
    });
});