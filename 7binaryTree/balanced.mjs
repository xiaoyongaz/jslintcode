function balancedHight(root){
    if(root == null) return [0, true];
    let l = balancedHight(root.left);
    let r = balancedHight(root.right);
    let balanced = l[1] && r[1] && (Math.abs(l[0] - r[0]) <=1);
    let height = 1 + Math.max(l[0], r[0]);
    return [height, balanced];
}

/**
 * @param root: The root of binary tree.
 * @return: True if this Binary tree is Balanced, or false.
 */
export function isBalanced(root) {
    let r = balancedHight(root);
    return r[1];
}


