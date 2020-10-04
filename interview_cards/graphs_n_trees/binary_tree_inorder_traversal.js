var inorderTraversal = function (root, result = []) {

    if (root) {

        if (root.left) inorderTraversal(root.left, result)
        result.push(root.val)
        if (root.right) inorderTraversal(root.right, result)

    }

    return result

}; // Runtime: 72 ms, faster than 86.00% of JavaScript online submissions for Binary Tree Inorder Traversal.
   // Memory Usage: 38.9 MB, less than 5.16 % of JavaScript online submissions for Binary Tree Inorder Traversal.