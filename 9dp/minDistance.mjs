function minHelper(word1, word2, index1, index2, costMap){
    if(costMap[index1][index2] !== undefined) return costMap[index1][index2];

    if(index1 == word1.length && index2 == word2.length){
        costMap[index1][index2] = 0;
        return 0;
    }

    let x_delete = Number.MAX_SAFE_INTEGER;     
    if(index1 < word1.length){
        x_delete = 1 + minHelper(word1, word2, index1+1, index2, costMap);
    }

    let y_insert = Number.MAX_SAFE_INTEGER;
    if(index2 < word2.length){
        y_insert = 1 + minHelper(word1, word2, index1, index2+1, costMap);
    }

    let moveBoth = Number.MAX_SAFE_INTEGER;
    if(index1 < word1.length && index2 < word2.length){
        let cost = word1[index1] === word2[index2] ? 0 : 1;
        moveBoth = cost + minHelper(word1, word2, index1+1, index2+1, costMap);
    }

    costMap[index1][index2] = Math.min(x_delete, y_insert, moveBoth);
    return costMap[index1][index2];
}

/**
 * @param word1: A string
 * @param word2: A string
 * @return: The minimum number of steps.
 */
export function minDistance (word1, word2) {
    let costMap = [];
    for(let i = 0; i <= word1.length; i++) costMap[i] = [];
    let r = minHelper(word1, word2, 0, 0, costMap);
    return r;
}
