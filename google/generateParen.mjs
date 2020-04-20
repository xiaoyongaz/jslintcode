function genHelper(n, leftPCnt, current, collector){
    if(current.length === 2*n){
        collector.push([...current].join(""));
        return;
    }

    if(leftPCnt < n){
        current.push("(");
        leftPCnt++;
        genHelper(n, leftPCnt, current, collector);
        leftPCnt--;
        current.pop();
    }

    if(leftPCnt > (current.length - leftPCnt)){
        current.push(")");
        genHelper(n, leftPCnt, current, collector);
        current.pop();
    }

    return;
}
/**
 * @param n: n pairs
 * @return: All combinations of well-formed parentheses
 */
export function generateParenthesis (n) {
    let current = [];
    let collector = [];
    genHelper(n, 0, current, collector);
    return collector;
}


