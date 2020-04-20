function dfsTimeHelper(tree, treeTime, index){
    if(tree[index] === undefined) return 0;
    let childrenTime = [];
    for(let n = 0; n < tree[index].length; n++){
        childrenTime.push(treeTime[index][n] + dfsTimeHelper(tree, treeTime, tree[index][n]));
    }
    let maxTime = Math.max(0, ...childrenTime);
    return maxTime;
}
/**
 * @param father: the father of every node
 * @param time: the time from father[i] to node i
 * @return: time to flower tree
 */
export function timeToFlowerTree (father, time) {
    //using associate array to represent tree
    //each node has two arraies, 1 for children, 1 for time to reach childern
    //using DFS to get the maxTime
    let tree = [];
    let treeTime = [];
    for(let i = 1; i < father.length; i++){
        if(tree[father[i]] == undefined) {
            tree[father[i]] = [];
            treeTime[father[i]] = [];
        }
        tree[father[i]].push(i);
        treeTime[father[i]].push(time[i]);
    }

    let r = dfsTimeHelper(tree, treeTime, 0);
    return r;
}


