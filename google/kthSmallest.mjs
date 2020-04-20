function countHelper(root){
    if(root === null) return 0;
    return countHelper(root.left) + 1 + countHelper(root.right);
}

/**
 * @param root: the given BST
 * @param k: the given k
 * @return: the kth smallest element in BST
 */
export function kthSmallest (root, k) {
    if(root === null) return null;
    let leftCnt = countHelper(root.left);
    let rightCnt = countHelper(root.right);
    if(leftCnt === k-1) return root;
    if(leftCnt < k-1) return kthSmallest(root.right, k - leftCnt -1);
    return kthSmallest(root.left, k);
}


