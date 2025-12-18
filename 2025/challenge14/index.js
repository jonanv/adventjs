/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
    function dfs(current, path) {
        for (const key in current) {
            const value = current[key]
            const newPath = [...path, key]

            if (value === gift) {
                return newPath
            }

            if (typeof value === 'object' && value !== null) {
                const result = dfs(value, newPath)
                if (result.length) return result
            }
        }
        return []
    }

    return dfs(workshop, [])
}

module.exports = findGiftPath;