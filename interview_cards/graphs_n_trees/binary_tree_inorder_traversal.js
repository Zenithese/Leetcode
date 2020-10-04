var inorderTraversal = function (root) {
    const result = []

    var helper = (root) => {

        if (root) {

            if (root.left) helper(root.left)
            result.push(root.val)
            if (root.right) helper(root.right)

        }

    }

    helper(root)
    return result
    
}; // Runtime: 80 ms, faster than 40.82 % of JavaScript online submissions for Binary Tree Inorder Traversal.
   // Memory Usage: 39 MB, less than 5.16 % of JavaScript online submissions for Binary Tree Inorder Traversal.
