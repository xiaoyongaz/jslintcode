
function combineHelper(n, k, currentSet, index, collector){
    if(currentSet.length === k) {
        collector.push([...currentSet]);
        return;
    }

    if((n.length - index + currentSet.length) < k) return;

    currentSet.push(n[index]);
    combineHelper(n, k, currentSet, index+1, collector);

    currentSet.pop();
    combineHelper(n, k, currentSet, index+1, collector);
}
/**
 * @param n: Given the range of numbers
 * @param k: Given the numbers of combinations
 * @return: All the combinations of k numbers out of 1..n
 */
export function combine (n, k) {
    let currentSet = [];
    let collector = [];
    let inputs = [];
    for(let i = 1; i <= n; i++) inputs.push(i);
    combineHelper(inputs, k, currentSet, 0, collector);
    return collector;
}


