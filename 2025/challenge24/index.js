/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    function areMirror(a, b) {
        if (!a && !b) return true
        if (!a || !b) return false
        if (a.value !== b.value) return false

        return areMirror(a.left, b.right) &&
            areMirror(a.right, b.left)
    }

    const synchronized =
        tree1?.value === tree2?.value && areMirror(tree1, tree2)

    return [synchronized, tree1?.value]
}

module.exports = isTreesSynchronized;