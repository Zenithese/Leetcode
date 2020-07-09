var maxPathSum = function (root) {

    let greatest = root.val

    var recurse = (root) => {

        let left = 0, right = 0

        if (root.left) {
            left = recurse(root.left)
            root.left = null
        }

        if (root.right) {
            right = recurse(root.right)
            root.right = null
        }

        const fork = Math.max(left + root.val, right + root.val, root.val)

        const path = left + right + root.val

        greatest = Math.max(greatest, fork, path)

        return fork

    }

    recurse(root)

    return greatest
};