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

// cleaner

var maxPathSum = function (root) {

    var recurse = (root) => {

        if (!root) return [-Infinity, -Infinity]

        const left = recurse(root.left)

        const right = recurse(root.right)

        const path = left[0] + right[0] + root.val

        const fork = Math.max(left[0] + root.val, right[0] + root.val, root.val)

        const greatest = Math.max(fork, path, left[1], right[1])

        return [fork, greatest]

    }

    return recurse(root)[1]

};