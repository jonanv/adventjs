/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
    const cols = Object.keys(data[0])

    // 1. Ordenar los datos
    const sorted = [...data].sort((a, b) => {
        const x = a[sortBy]
        const y = b[sortBy]
        return typeof x === 'number' ? x - y : String(x).localeCompare(String(y))
    })

    // 2. Calcular anchos de columna
    const widths = cols.map((col, i) => {
        const header = String.fromCharCode(65 + i)
        return Math.max(
            header.length,
            ...sorted.map(row => String(row[col]).length)
        ) + 2
    })

    // Helpers
    const line = () =>
        '+' + widths.map(w => '-'.repeat(w)).join('+') + '+'

    const row = values =>
        '|' +
        values
            .map((v, i) => ' ' + String(v).padEnd(widths[i] - 1))
            .join('|') +
        '|'

    // 3. Construir tabla
    const result = []

    result.push(line())
    result.push(row(cols.map((_, i) => String.fromCharCode(65 + i))))
    result.push(line())

    for (const item of sorted) {
        result.push(row(cols.map(col => item[col])))
    }

    result.push(line())

    return result.join('\n')
}

module.exports = drawTable;