/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isValidBST(root, left = -Infinity, right = Infinity) {

    if (!root) return true

    if (root.val <= left || root.val >= right) return false

    return isValidBST(root.left, left, root.val) && isValidBST(root.right, root.val, right)

} // Runtime: 80 ms, faster than 91.32% of JavaScript online submissions for Validate Binary Search Tree.
  // Memory Usage: 43 MB, less than 9.02 % of JavaScript online submissions for Validate Binary Search Tree.