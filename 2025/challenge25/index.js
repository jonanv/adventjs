/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    let value = 0
    let i = 0

    while (i < code.length) {
        const c = code[i]

        if (c === '+') value++
        else if (c === '-') value--
        else if (c === '>') {
            // solo avanza, no hace nada
        }
        else if (c === '[') {
            if (value === 0) {
                // saltar a la instrucción después de ]
                let depth = 1
                while (depth > 0) {
                    i++
                    if (code[i] === '[') depth++
                    else if (code[i] === ']') depth--
                }
            }
        }
        else if (c === ']') {
            if (value !== 0) {
                // volver después de [
                let depth = 1
                while (depth > 0) {
                    i--
                    if (code[i] === ']') depth++
                    else if (code[i] === '[') depth--
                }
            }
        }
        else if (c === '{') {
            if (value === 0) {
                // saltar a después de }
                let depth = 1
                while (depth > 0) {
                    i++
                    if (code[i] === '{') depth++
                    else if (code[i] === '}') depth--
                }
            }
        }
        else if (c === '}') {
            // no hay repetición: solo continuar
        }

        i++
    }

    return value
}

module.exports = execute;