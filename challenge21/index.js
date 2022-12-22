// score: 300
// function printTable(gifts) {
//     const GIFT = 'Gift'
//     const QUANTITY = 'Quantity'
//     const TOP_BORDER_SYMBOL = '+'
//     const BOTTOM_BORDER_SYMBOL = '*'
//     const HORIZONTAL_SYMBOL = '-'
//     const VERTICAL_SYMBOL = '|'
//     const SPACE_SYMBOL = ' '

//     const maxGiftLength = Math.max(
//         ...gifts.map(({ name }) => name.length),
//         GIFT.length
//     )
//     const maxQuantityLength = Math.max(
//         ...gifts.map(({ quantity }) => `${quantity}`.length),
//         QUANTITY.length
//     )

//     const maxLineLength =
//         VERTICAL_SYMBOL.length + SPACE_SYMBOL.length +
//         maxGiftLength +
//         SPACE_SYMBOL.length + VERTICAL_SYMBOL.length + SPACE_SYMBOL.length +
//         maxQuantityLength +
//         VERTICAL_SYMBOL.length + SPACE_SYMBOL.length

//     const makeLine = (gift, quantity) =>
//         `${VERTICAL_SYMBOL}${SPACE_SYMBOL}` +
//         `${gift.padEnd(maxGiftLength, SPACE_SYMBOL)}` +
//         `${SPACE_SYMBOL}${VERTICAL_SYMBOL}${SPACE_SYMBOL}` +
//         `${quantity.padEnd(maxQuantityLength, SPACE_SYMBOL)}` +
//         `${SPACE_SYMBOL}${VERTICAL_SYMBOL}`

//     const TOP = TOP_BORDER_SYMBOL.repeat(maxLineLength)
//     const HEADER = makeLine(GIFT, QUANTITY)
//     const SEPARATOR = makeLine(
//         HORIZONTAL_SYMBOL.repeat(maxGiftLength),
//         HORIZONTAL_SYMBOL.repeat(maxQuantityLength)
//     )
//     const TABLE_CONTENT = gifts.map(({ name, quantity }) =>
//         makeLine(name, `${quantity}`)
//     )
//     const BOTTOM = BOTTOM_BORDER_SYMBOL.repeat(maxLineLength)

//     return [
//         TOP,
//         HEADER,
//         SEPARATOR,
//         ...TABLE_CONTENT,
//         BOTTOM,
//     ].join('\n')
// }

// score: 300
// function printTable(gifts) {
//     let maxQuantityLength = Math.max(
//         ...gifts.map((x) => (x.quantity + '').length),
//         'Quantity'.length
//     );
//     let maxNameLength = Math.max(
//         ...gifts.map((x) => x.name.length),
//         'Gift'.length
//     );

//     let basesLength = maxNameLength + maxQuantityLength + 7;

//     let result = `${'+'.repeat(basesLength)}\n| ${'Gift'.padEnd(
//         maxNameLength
//     )} | ${'Quantity'.padEnd(maxQuantityLength)} |\n| ${'-'.repeat(
//         maxNameLength
//     )} | ${'-'.repeat(maxQuantityLength)} |\n`;

//     gifts.forEach(({ name, quantity }) => {
//         result += `| ${name.padEnd(maxNameLength)} | ${(quantity + '').padEnd(
//             maxQuantityLength
//         )} |\n`;
//     });
//     result += '*'.repeat(basesLength);
//     return result;
// }

// score: 160
function printTable(gifts) {
    const maxName = Math.max(...gifts.map(g => g.name.length), 4)
    const maxQuan = Math.max(...gifts.map(g => String(g.quantity).length), 8)

    const top = `++${"+".repeat(maxName)}+++${"+".repeat(maxQuan)}++`
    const bottom = top.replaceAll("+", "*")
    const head = [
        { name: "Gift", quantity: "Quantity" },
        { name: "-".repeat(maxName), quantity: "-".repeat(maxQuan) }
    ]
    const rows = head.concat(gifts).map(
        ({ name, quantity }) =>
            `| ${name.padEnd(maxName)} | ${String(quantity).padEnd(maxQuan)} |\n`
    )
    return top + "\n" + rows.join("") + bottom
}

module.exports = printTable;

printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
]);

printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
]);