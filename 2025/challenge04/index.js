/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
// Score: 8
function decodeSantaPin(code) {
    const blocks = code.match(/\[.*?\]/g);
    if (!blocks) return null;

    const pin = [];

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];

        // Caso especial: [<]
        if (block === '[<]') {
            if (pin.length === 0) return null; // nada que repetir
            pin.push(pin[pin.length - 1]);
            continue;
        }

        // Extraer número y operaciones
        const match = block.match(/\[(\d)([-+]*)\]/);
        console.log(match);
        if (!match) return null;

        let num = Number(match[1]);
        const ops = match[2];

        // Aplicar operaciones en orden
        for (const op of ops) {
            if (op === '+') {
                num = (num + 1) % 10;
            } else if (op === '-') {
                num = (num + 9) % 10; // equivalente a num - 1 mod 10
            }
        }
        pin.push(num);
    }
    return pin.length >= 4 ? pin.join('').slice(0, 4) : null;
}

// function decodeSantaPin(code) {
//     // Code here
//     let n;
//     let ans = "";

//     const op = {
//         "+": () => n = (n + 1 + 10) % 10,
//         "-": () => n = (n - 1 + 10) % 10,
//         "<": () => n = +ans.at(-1),
//         "]": () => ans += n,
//     }

//     Array.from(code)
//         .forEach((e) => {
//             if (Number.isInteger(+e))
//                 n = +e;

//             op[e]?.();
//         });

//     return ans.length < 4 ? null : ans;
// }

module.exports = decodeSantaPin;