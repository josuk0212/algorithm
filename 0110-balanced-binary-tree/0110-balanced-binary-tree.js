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
var isBalanced = function(root) {
  let leftCount = 0;
  let rightCount = 0;

  if (!root && leftCount === 0 && rightCount === 0) {
    return true;
  }

  function recursion(next) {
    if (next.left) {
      leftCount += 1;
      let node = next.left;
      return recursion(node);
    } else if (next.right) {
      rightCount += 1;
      let node = next.right;
      return recursion(node);
    }
  }

  recursion(root);

  if (leftCount - rightCount <= 1 && leftCount - rightCount >= -1) {
    return true;
  } else {
    return false;
  }
};
