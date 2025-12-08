/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
    const lower = toy.toLowerCase();
    const count = {};

    // Contar apariciones ignorando mayúsculas
    for (const char of lower) {
        count[char] = (count[char] || 0) + 1;
    }

    // Buscar la primera letra no repetida
    for (let i = 0; i < toy.length; i++) {
        if (count[lower[i]] === 1) {
            return toy[i]; // devolver tal como aparece
        }
    }

    return "";
}