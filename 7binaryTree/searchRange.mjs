/**
 * @param root: param root: The root of the binary search tree
 * @param k1: An integer
 * @param k2: An integer
 * @return: return: Return all keys that k1<=key<=k2 in ascending order
 */
export function searchRange (root, k1, k2) {
    if(root === null) return [];
    let results = [];
    if(root.val >=k1){
        let l = searchRange(root.left, k1, k2);
        results.push(...l);
    }
    if(root.val >=k1 && root.val <=k2) results.push(root.val);
    if(root.val <= k2){
        let r = searchRange(root.right, k1, k2);
        results.push(...r);
    }
    return results;
}


