/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
    let life1 = 3
    let life2 = 3

    const rounds = Math.max(elf1.length, elf2.length)

    for (let i = 0; i < rounds; i++) {
        const m1 = elf1[i]
        const m2 = elf2[i]

        let damage1 = 0
        let damage2 = 0

        // Daño al Elfo 1
        if (m2 === 'F') {
            damage1 = 2
        } else if (m2 === 'A' && m1 !== 'B') {
            damage1 = 1
        }

        // Daño al Elfo 2
        if (m1 === 'F') {
            damage2 = 2
        } else if (m1 === 'A' && m2 !== 'B') {
            damage2 = 1
        }

        life1 -= damage1
        life2 -= damage2

        // Fin inmediato si alguien muere
        if (life1 <= 0 || life2 <= 0) break
    }

    // Decisión final
    if (life1 <= 0 && life2 <= 0) return 0
    if (life1 <= 0) return 2
    if (life2 <= 0) return 1
    if (life1 > life2) return 1
    if (life2 > life1) return 2
    return 0
}

module.exports = elfBattle;