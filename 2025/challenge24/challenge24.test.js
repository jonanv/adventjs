const isTreesSynchronized = require(".");

describe('Reto #24: 🪞 Verifica si los árboles son espejos mágicos', () => {
    test('Test #1 - return type', () => {
        expect(
            Array.isArray(
                isTreesSynchronized(
                    { value: '🎄' },
                    { value: '🎄' }
                )
            )
        ).toStrictEqual(true);
    });
    
    test('Test #2 - isTreesSynchronized({ value: "🎄" },{ value: "🎄" })', () => {
        expect(
            isTreesSynchronized(
                { value: '🎄' },
                { value: '🎄' }
            )
        ).toStrictEqual(
            [
                true,
                "🎄"
            ]
        );
    });

    test('Test #3 - isTreesSynchronized({ value: "🎄", left: { value: "⭐" }, right: { value: "🎅" } },{ value: "🎄", left: { value: "🎅" }, right: { value: "⭐" } })', () => {
        expect(
            isTreesSynchronized(
                { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
                { value: '🎄', left: { value: '🎅' }, right: { value: '⭐' } }
            )
        ).toStrictEqual(
            [
                true,
                "🎄"
            ]
        );
    });

    test('Test #4 - isTreesSynchronized({ value: "✨", left: { value: "⭐" }, right: { value: "🎅" } },{ value: "✨", left: { value: "🎅" }, right: { value: "🎁" } })', () => {
        expect(
            isTreesSynchronized(
                { value: '✨', left: { value: '⭐' }, right: { value: '🎅' } },
                { value: '✨', left: { value: '🎅' }, right: { value: '🎁' } }
            )
        ).toStrictEqual(
            [
                false,
                "✨"
            ]
        );
    });

    test('Test #5 - isTreesSynchronized({ value: "🎁" },{ value: "🎁" })', () => {
        expect(
            isTreesSynchronized(
                { value: '🎁' },
                { value: '🎁' }
            )
        ).toStrictEqual(
            [
                true,
                "🎁"
            ]
        );
    });

    test('Test #6 - isTreesSynchronized({ value: "🎄" },{ value: "🎁" })', () => {
        expect(
            isTreesSynchronized(
                { value: '🎄' },
                { value: '🎁' }
            )
        ).toStrictEqual(
            [
                false,
                "🎄"
            ]
        );
    });

    test('Test #7 - isTreesSynchronized({ value: "🎄", left: { value: "⭐" } },{ value: "🎄", right: { value: "⭐" } })', () => {
        expect(
            isTreesSynchronized(
                { value: '🎄', left: { value: '⭐' } },
                { value: '🎄', right: { value: '⭐' } }
            )
        ).toStrictEqual(
            [
                true,
                "🎄"
            ]
        );
    });

    test('Test #8 - isTreesSynchronized({ value: "🎄", left: { value: "⭐" }, right: { value: "🎅" } },{ value: "🎁", left: { value: "🎅" }, right: { value: "⭐" } })', () => {
        expect(
            isTreesSynchronized(
                { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
                { value: '🎁', left: { value: '🎅' }, right: { value: '⭐' } }
            )
        ).toStrictEqual(
            [
                false,
                "🎄"
            ]
        );
    });

    test('Test #12 - isTreesSynchronized({value: "❄️",left: { value: "⭐", left: { value: "🎁" }, right: { value: "🎅" } },right: { value: "🎅", left: { value: "🎄" }, right: { value: "🎁" } }},{value: "❄️",left: { value: "🎅", left: { value: "🎁" }, right: { value: "🎄" } },right: { value: "⭐", left: { value: "🎅" }, right: { value: "🎁" } }})', () => {
        expect(
            isTreesSynchronized(
                {
                    value: '❄️',
                    left: { value: '⭐', left: { value: '🎁' }, right: { value: '🎅' } },
                    right: { value: '🎅', left: { value: '🎄' }, right: { value: '🎁' } }
                },
                {
                    value: '❄️',
                    left: { value: '🎅', left: { value: '🎁' }, right: { value: '🎄' } },
                    right: { value: '⭐', left: { value: '🎅' }, right: { value: '🎁' } }
                }
            )
        ).toStrictEqual(
            [
                true,
                "❄️"
            ]
        );
    });

});